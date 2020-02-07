# Your init script
#
# Atom will evaluate this file each time a new window is opened. It is run
# after packages are loaded/activated and after the previous editor state
# has been restored.
#
# An example hack to log to the console when each text editor is saved.
#
# atom.workspace.observeTextEditors (editor) ->
#   editor.onDidSave ->
#     console.log "Saved! #{editor.getPath()}"

atom.commands.add '.fuzzy-finder atom-text-editor[mini]', 'custom:replace-tab', ->

    # you want to open in an empty pane
    if typeof atom.workspace.getActivePaneItem() is "undefined"
        atom.commands.dispatch(@, "core:confirm")

    # current file is saved
    else if ! atom.workspace.getActivePaneItem().isModified()
        current = atom.workspace.getActivePaneItem()
        atom.commands.dispatch(@, "core:confirm")
        current.destroy()

        # current file is not saved
    else
        atom.commands.dispatch(@, "pane:split-right")

# commands to emulate my vim settings

# composite command for ctrl-c
atom.commands.add '.editor.vim-mode-plus:not(.insert-mode)', 'custom:reset-normal-mode', ->
    atom.commands.dispatch(@, "vim-mode-plus:reset-normal-mode")
    atom.commands.dispatch(@, "quick-highlight:clear")
    atom.commands.dispatch(@, "typescript:clear-errors")
    atom.commands.dispatch(@, "typescript:check-all-files")

atom.commands.add '.editor.vim-mode-plus:not(.insert-mode)', 'write:file', ->
    atom.commands.dispatch(@, "core:save")

atom.commands.add 'body', 'custom:reload-file', ->
    atom.workspace.getActiveTextEditor().buffer.reload()
    
# Adds support for checking JavaScript files with atom-typescript. See
# https://github.com/TypeStrong/atom-typescript/blob/master/docs/faq.md#i-want-to-use-atom-typescript-with-javascript-too
# CHANGE THE PACKAGE NAME IN THE NEXT LINE IF YOU'RE USING A DIFFERENT GRAMMAR
# PACKAGE
do (grammarPackageImUsing = "language-javascript") ->
  atom.packages.onDidTriggerActivationHook "#{grammarPackageImUsing}:grammar-used", ->
    atom.packages.triggerActivationHook 'language-typescript:grammar-used'
