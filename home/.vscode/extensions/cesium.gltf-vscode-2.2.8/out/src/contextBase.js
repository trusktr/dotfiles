"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const utilities_1 = require("./utilities");
class ContextBase {
    constructor(context) {
        this._context = context;
        this._extensionRootPath = `${utilities_1.toResourceUrl(this._context.extensionPath)}/`;
    }
    get extensionRootPath() {
        return this._extensionRootPath;
    }
    getConfigResourceUrl(section, name, localResourceRoots) {
        const value = vscode.workspace.getConfiguration(section).get(name);
        if (value.startsWith('{extensionRootPath}')) {
            return value.replace(/^{extensionRootPath}/, this._extensionRootPath);
        }
        localResourceRoots.push(vscode.Uri.file(path.dirname(value)));
        return utilities_1.toResourceUrl(value.replace(/\\/, '/'));
    }
}
exports.ContextBase = ContextBase;
//# sourceMappingURL=contextBase.js.map