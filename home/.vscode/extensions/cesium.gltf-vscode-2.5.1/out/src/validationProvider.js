"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const gltfValidator = require("gltf-validator");
const editorUtilities_1 = require("./editorUtilities");
const PreviewReport = 'Preview Report...';
const SaveReportAs = 'Save Report As...';
const OverwriteReport = 'Save report.json';
function messageLabel(howMany, name) {
    if (howMany === 1) {
        if (name.endsWith('.')) {
            name = name.replace('s.', '.');
        }
        else {
            name = name.replace(/s$/, '');
        }
    }
    return howMany.toFixed() + ' ' + name;
}
async function validate(sourceFilename) {
    if (typeof sourceFilename === 'undefined') {
        return;
    }
    if (!fs.existsSync(sourceFilename)) {
        throw new Error('File not found.');
    }
    const currentSettings = vscode.workspace.getConfiguration('glTF').get('Validation');
    const gltfData = fs.readFileSync(sourceFilename);
    const baseName = path.basename(sourceFilename);
    const folderName = path.resolve(sourceFilename, '..');
    const result = await gltfValidator.validateBytes(new Uint8Array(gltfData), {
        uri: baseName,
        maxIssues: currentSettings.maxIssues,
        ignoredIssues: currentSettings.ignoredIssues,
        severityOverrides: currentSettings.severityOverrides,
        externalResourceFunction: (uri) => new Promise((resolve, reject) => {
            uri = path.resolve(folderName, decodeURIComponent(uri));
            fs.readFile(uri, (err, data) => {
                if (err) {
                    reject(err.toString());
                    return;
                }
                resolve(data);
            });
        }),
    });
    const useSaveAs = !vscode.workspace.getConfiguration('glTF').get('alwaysOverwriteDefaultFilename');
    const SaveReport = useSaveAs ? SaveReportAs : OverwriteReport;
    //
    // Show the user a quick summary, and ask if they want to save the full report.
    //
    let userChoicePromise;
    if (result.issues.numErrors > 0 && result.issues.numWarnings > 0) {
        userChoicePromise = vscode.window.showErrorMessage('glTF Validator found ' +
            messageLabel(result.issues.numErrors, 'errors') + ' and ' +
            messageLabel(result.issues.numWarnings, 'warnings.'), PreviewReport, SaveReport);
    }
    else if (result.issues.numErrors > 0) {
        userChoicePromise = vscode.window.showErrorMessage('glTF Validator found ' +
            messageLabel(result.issues.numErrors, 'errors.'), PreviewReport, SaveReport);
    }
    else if (result.issues.numWarnings > 0) {
        userChoicePromise = vscode.window.showWarningMessage('glTF Validator found ' +
            messageLabel(result.issues.numWarnings, 'warnings.'), PreviewReport, SaveReport);
    }
    else if (result.issues.numInfos > 0) {
        userChoicePromise = vscode.window.showWarningMessage('glTF Validator added information to its report.', PreviewReport, SaveReport);
    }
    else {
        userChoicePromise = vscode.window.showInformationMessage('glTF Validator: Passed \u2714', PreviewReport, SaveReport);
    }
    let userChoice = await userChoicePromise;
    if (userChoice === PreviewReport) {
        const textEditor = vscode.window.activeTextEditor;
        let indent = '    ';
        if (textEditor) {
            const insertables = new editorUtilities_1.Insertables(textEditor);
            indent = insertables.indent;
        }
        let reportString = JSON.stringify(result, null, indent);
        vscode.workspace.openTextDocument({
            content: reportString,
            language: "json"
        }).then(document => vscode.window.showTextDocument(document));
    }
    if (userChoice === SaveReport) {
        // Compose a target filename
        let targetFilename = sourceFilename;
        if (path.extname(targetFilename).length > 1) {
            let components = targetFilename.split('.');
            components.pop();
            targetFilename = components.join('.');
        }
        targetFilename += '_report.json';
        if (useSaveAs) {
            const options = {
                defaultUri: vscode.Uri.file(targetFilename),
                filters: {
                    'JSON': ['json'],
                    'All files': ['*']
                }
            };
            let uri = await vscode.window.showSaveDialog(options);
            if (!uri) {
                return;
            }
            targetFilename = uri.fsPath;
        }
        // write out the final GLTF json and open.
        let reportString = JSON.stringify(result, null, '    ');
        fs.writeFileSync(targetFilename, reportString, 'utf8');
        vscode.commands.executeCommand('vscode.open', vscode.Uri.file(targetFilename));
    }
}
//# sourceMappingURL=validationProvider.js.map