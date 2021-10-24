"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshDocument = exports.WebviewCollection = exports.disposeAll = exports.getNonce = void 0;
const vscode = require("vscode");
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
exports.getNonce = getNonce;
function disposeAll(disposables) {
    while (disposables.length) {
        const item = disposables.pop();
        if (item) {
            item.dispose();
        }
    }
}
exports.disposeAll = disposeAll;
/**
 * Tracks all webviews.
 */
class WebviewCollection {
    constructor() {
        this._webviews = new Set();
    }
    /**
     * Get all known webviews for a given uri.
     */
    *get(uri) {
        const key = uri.toString();
        for (const entry of this._webviews) {
            if (entry.resource === key) {
                yield entry.webviewPanel;
            }
        }
    }
    /**
     * Add a new webview to the collection.
     */
    add(uri, webviewPanel) {
        const entry = { resource: uri.toString(), webviewPanel };
        this._webviews.add(entry);
        webviewPanel.onDidDispose(() => {
            this._webviews.delete(entry);
        });
    }
}
exports.WebviewCollection = WebviewCollection;
/**
 * Define the document (the data model) used for mesh files.
 */
class MeshDocument {
    constructor(uri) {
        this.uri = uri;
        this.isDisposed = false;
        this.disposables = [];
        this._onDidDispose = this._register(new vscode.EventEmitter());
        /**
         * Fired when the document is disposed of.
         */
        this.onDidDispose = this._onDidDispose.event;
        this._onDidChangeDocument = this._register(new vscode.EventEmitter());
        /**
         * Fired to notify webviews that the document has changed.
         */
        this.onDidChangeContent = this._onDidChangeDocument.event;
    }
    /**
     * Called by VS Code when there are no more references to the document.
     *
     * This happens when all editors for it have been closed.
     */
    dispose() {
        this._onDidDispose.fire();
        if (this.isDisposed) {
            return;
        }
        this.isDisposed = true;
        disposeAll(this.disposables);
    }
    _register(value) {
        if (this.isDisposed) {
            value.dispose();
        }
        else {
            this.disposables.push(value);
        }
        return value;
    }
}
exports.MeshDocument = MeshDocument;
//# sourceMappingURL=util.js.map