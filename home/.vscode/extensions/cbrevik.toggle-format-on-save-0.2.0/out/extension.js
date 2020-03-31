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
            if (err || !settingsJson) {
                vscode.window.showWarningMessage("Unable to find settings.json to toggle Format on Save.");
                return;
            }
            let userSettings;
            try {
                userSettings = settingsFile_1.getSettings(settingsJson);
            }
            catch (_a) {
                vscode.window.showWarningMessage("Unable to parse settings.json to toggle Format on Save. Does it contain comments or hanging commas?");
                return;
            }
            let updatedValue = true;
            if (formatOnSaveKey in userSettings) {
                updatedValue = !userSettings[formatOnSaveKey];
            }
            userSettings[formatOnSaveKey] = updatedValue;
            fs.writeFile(settingsFilePath, JSON.stringify(userSettings, null, 4), function (err) {
                if (err) {
                    vscode.window.showInformationMessage("Unable to toggle Format on Save.");
                }
                else {
                    if (updatedValue) {
                        vscode.window.setStatusBarMessage("Format on Save: ON.", 2000);
                    }
                    else {
                        vscode.window.setStatusBarMessage("Format on Save: OFF.", 2000);
                    }
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