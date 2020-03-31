# Keymap Control
Customizing Atom's keybindings can be exhausting. This plugin can help.

If you set a keybinding in your `keymap.cson` file, it should just work. You shouldn't
have to fight though waves of CSS specificity rules to manually unset conflicting
keybindings from other packages first.

Install this package to automatically do it for you.


## What this package does
After Atom starts, Keymap Control looks inside your `keymap.cson` file for any keybindings that
conflict with keybindings from other packages and automatically unbinds them, removing
the conflicts which can prevent your new keybindings from working.

This can remove keybindings from Atom's core just as easily as from 3rd party packages.
Any keybindings you set in your `keymap.cson` file will always take precedence, so you
can concentrate on setting the keybindings you want, instead of why they don't work.


## How to use the plugin
1. Search and install it in Atom, or use `apm install keymap-control` from the command line.
2. Set any keybindings you want in your `keymap.cson` file, restart Atom and
any conflicting keybindings will automatically be unset.


## Drawbacks
If you define a keybinding in your `keymap.cson` file like "cmd-k" it will undefine
all other "cmd-k" keybindings from other packages, even if you wanted to keep
some of them around.

To overcome this, just add the "cmd-k" keybindings from the other packages that
you wanted to keep in your `keymap.cson` file. This way your `keymap.cson` file
becomes the authoritative definition for all keybindings you override.


## TODO
1. Add an option to unset keybindings with the same command but different keystroke.
For example, if you define "cmd-k" as "core:save", this would automatically unset
the "cmd-s" keybinding since it's also bound to "core:save".


## License
Copyright 2018 Hans Livingstone. Distributed under the MIT License.
