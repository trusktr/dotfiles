// For more information on customizing Oni,
// check out our wiki page:
// https://github.com/onivim/oni/wiki/Configuration

const activate = oni => {
    console.log("config activated")

    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))

    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")
}

const deactivate = () => {
    console.log("config deactivated")
}

module.exports = {
    activate,
    deactivate,
    //add custom config here, such as

    //"oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    //"oni.loadInitVim": false,
    //"editor.fontSize": "14px",
    //"editor.fontFamily": "Monaco"

    // UI customizations
    "ui.colorscheme": "nord",
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",

    //"oni.hideMenu": true, // Hide default menu, can be opened with <alt>
    "oni.loadInitVim": true, // Load user's init.vim
    "oni.useDefaultConfig": false, // Do not load Oni's init.vim
    "tabs.mode": "buffer", // tabs behave like vim
    "autoClosingPairs.enabled": true, // disable autoclosing pairs
    //"editor.quickOpen.filterStrategy": "regex", // A strategy for the fuzzy finder closer to CtrlP
    'commandline.mode': false, // Do not override commandline UI
    //'wildmenu.mode': false // Do not override wildmenu UI
}

