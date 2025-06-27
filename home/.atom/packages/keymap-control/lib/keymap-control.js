'use babel';

/**
 * Returns true if the keybinding source is the user's keymap file.
 */
const isUserKeymap = function(source){
    return source.indexOf('keymap.cson') !== -1;
};


/**
 * Returns the keystroke string from the keybinding, used for comparing
 * keybindings.
 *
 * If allowPartialMatches is true this will only return the first keycode, since
 * that's all we care about in that case. For example, if the keybinding was
 * "cmd-k cmd-d" it would only return "cmd-k".
 */
const getKeystroke = function(keybinding, allowPartialMatches){
    if(allowPartialMatches){
        return keybinding.keystrokes.split(' ')[0];
    }
    else{
        return keybinding.keystrokes;
    }
};


/**
 * Moves through all the keymaps looking for keybindings from the user that
 * overlap with keybindings defined by other packages. Runs through the
 * keybindings in 3 passes in order to preserve the order they are defined in
 * Atom.
 *
 * First, this collects all the keystrokes in the user's keymap. Next, finds
 * the sources which have overlapping keystrokes.
 *
 * Finally, moves through all of the packages which have overlapping keystrokes
 * and categorizes the keystrokes as either overlapping (if they need to
 * be removed) or disjoint (if there is no conflict).
 *
 * Returns a vector of package sources with overlapping keybindings, the
 * overlapping keybindings and disjoint keybindings.
 */
const findKeybindings = function(keybindings, allowPartialMatches){
    const userKeystrokes = new Set();
    keybindings.forEach(function(keybinding){
        if(isUserKeymap(keybinding.source)){
            const keystroke = getKeystroke(keybinding, allowPartialMatches);
            userKeystrokes.add(keystroke);
        }
    });

    const overlappingSources = new Set();
    keybindings.forEach(function(keybinding){
        if(!isUserKeymap(keybinding.source)){
            const keystroke = getKeystroke(keybinding, allowPartialMatches);

            if(userKeystrokes.has(keystroke)){
                overlappingSources.add(keybinding.source);
            }
        }
    });

    const overlappingKeybindings = []
    const disjointKeybindings = [];
    keybindings.forEach(function(keybinding){
        if(overlappingSources.has(keybinding.source)){
            const keystroke = getKeystroke(keybinding, allowPartialMatches);

            if(userKeystrokes.has(keystroke)){
                overlappingKeybindings.push(keybinding);
            }
            else{
                disjointKeybindings.push(keybinding);
            }
        }
    });

    return [overlappingSources, overlappingKeybindings, disjointKeybindings];
};


/**
 * Adds a keybinding to Atom.
 */
const addKeybinding = function(keybinding){
    const selector = {};
    selector[keybinding.selector] = {};
    selector[keybinding.selector][keybinding.keystrokes] = keybinding.command;

    atom.keymaps.add(keybinding.source,
                     selector,
                     keybinding.priority);
};


/**
 * Finds all of the overlapping keybindings and then removes them.
 *
 * Since Atom doesn't provide a way to remove individual keybindings from a
 * package, we need to remove all keybindings from the offending packages and
 * then only add the ones back that we want to keep (the disjoint ones),
 * effectively masking out the ones we wanted to remove.
 */
const removeOverlappingKeybindings = function(keybindings, allowPartialMatches){
    const [overlappingSources,
           overlappingKeybindings,
           disjointKeybindings] = findKeybindings(keybindings,
                                                  allowPartialMatches);

    overlappingSources.forEach(function(source){
        atom.keymaps.removeBindingsFromSource(source);
    });

    disjointKeybindings.forEach(addKeybinding);

    return overlappingKeybindings;
};


/**
 * Holds all the keybindings we removed so they can be gracefully
 * added back if the package is deactivated.
 */
let removedKeybindings = [];


/**
 * Pulls the latest configuration info and applies keybinding changes based on
 * it.
 */
const setKeybindingChanges = function(){
    removedKeybindings = removeOverlappingKeybindings(
        atom.keymaps.getKeyBindings(),
        atom.config.get('keymap-control.allowPartialMatches'));
};


/**
 * Restores any keybinding changes our package made.
 */
const unsetKeybindingChanges = function(){
    removedKeybindings.forEach(addKeybinding);
    removedKeybindings = [];
};


/**
 * Description for the single configuration option.
 */
const description = 'Remove keybindings from other packages that start with '
    + 'the same keystroke. For example, '
    + 'if the user defines "cmd-k" and another package defines "cmd-k cmd-d" '
    + 'this will still remove the "cmd-k cmd-d" binding because it starts with '
    + '"cmd-k". Disabling this will cause Keymap Control to only remove exact matches';


export default {
    /**
     * Configuration options for the settings pane.
     */
    config: {allowPartialMatches: {type: 'boolean',
                                   default: true,
                                   description: description}},

    /**
     * Applies the changes, either when all packages have loaded for the first
     * time or a keymap changes.
     *
     * NOTE: It seems like onDidReloadKeymap() gets called twice in a row
     * when the user's keymap changes. This could be debounced, but there's no
     * harm in doing this twice.
     */
    activate(state){
        atom.packages.onDidActivateInitialPackages(setKeybindingChanges);

        atom.keymaps.onDidReloadKeymap(function(){
            unsetKeybindingChanges();
            setKeybindingChanges();
        });
    },

    /**
     * Restores any removed keybindings.
     */
    deactivate: unsetKeybindingChanges
};
