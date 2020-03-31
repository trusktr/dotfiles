"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
const settings = require("../src/SettingsFileLocator");
const env = require("../src/environmentdetection");
var os = require("os");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "softwrap" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand("extension.softwrap", () => {
        // The code you place here will be executed every time your command is executed
        var message = "failed to change";
        var settingsfile = new settings.SettingsFile(env.EnvironmentDetection);
        fs.readFile(settingsfile.GetPath(), "utf8", function (err, orignialFile) {
            if (err) {
                vscode.window.showInformationMessage("Softwrap unable to modify settings file.");
            }
            console.log("before:" + os.EOL + orignialFile);
            var newFile = settingsfile.SetValue("editor.wrappingColumn", orignialFile);
            fs.writeFile(settingsfile.GetPath(), newFile, function (err) {
                if (err) {
                    vscode.window.showInformationMessage("Softwrap unable to modify settings file.");
                }
            });
            console.log("after:" + os.EOL + newFile);
            var value = vscode.workspace.getConfiguration();
            // Display a message box to the user
            // !!! it is opposite of value read because it hasn't updated yet. Probably a better way to do this...
            if (value.get("editor.wrappingColumn") == 0) {
                vscode.window.showInformationMessage("Softwrap off");
            }
            else {
                vscode.window.showInformationMessage("Softwrap on");
            }
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map