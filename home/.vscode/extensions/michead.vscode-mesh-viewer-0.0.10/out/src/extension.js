"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const ContentProvider_1 = require("./ContentProvider");
function activate(context) {
    const contentProvider = new ContentProvider_1.default();
    const disposable = vscode.commands.registerCommand('extension.openMeshPreview', (selectedItem) => {
        const filepath = selectedItem.fsPath;
        const filename = path.basename(filepath);
        const previewUri = vscode.Uri.parse(`mesh-preview://${filepath}`);
        vscode.workspace.registerTextDocumentContentProvider('mesh-preview', contentProvider);
        vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Active, `${filename} (Rendered)`, {
            allowScripts: true,
            allowSvgs: true
        })
            .then(() => { }, (reason) => {
            vscode.window.showErrorMessage(reason);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// tslint:disable-next-line:no-empty
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map