"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fs = require("fs");
const settingsFile_1 = require("./settingsFile");
const formatOnSaveKey = "editor.formatOnSave";
function activate(context) {
    console.log('Congratulations, your extension "toggle-format-on-save" is now active!');
    const disposable = vscode.commands.registerCommand("toggle-format-on-save.toggle", () => {
        const settingsFilePath = settingsFile_1.getSettingsPath();
        fs.readFile(settingsFilePath, "utf8", function (err, settingsJson) {
            if (err) {
                vscode.window.showInformationMessage("Unable to toggle Format on Save.");
            }
            const userSettings = settingsFile_1.getSettings(settingsJson);
            let updatedValue = true;
            if (formatOnSaveKey in userSettings) {
                updatedValue = !userSettings[formatOnSaveKey];
            }
            userSettings[formatOnSaveKey] = updatedValue;
            fs.writeFile(settingsFilePath, JSON.stringify(userSettings, null, 4), function (err) {
                if (err) {
                    vscode.window.showInformationMessage("Unable to toggle Format on Save.");
                }
            });
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map