'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
const debugSetup_1 = require("./debugSetup");
const internalConfig_1 = require("./internalConfig");
const languageSetup_1 = require("./languageSetup");
const fsUtils_1 = require("./util/fsUtils");
const logger_1 = require("./util/logger");
const status_1 = require("./util/status");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        languageSetup_1.configureLanguage();
        const kotlinConfig = vscode.workspace.getConfiguration("kotlin");
        const langServerEnabled = kotlinConfig.get("languageServer.enabled");
        const debugAdapterEnabled = kotlinConfig.get("debugAdapter.enabled");
        if (!(yield fsUtils_1.fsExists(context.globalStoragePath))) {
            yield fs.promises.mkdir(context.globalStoragePath);
        }
        const internalConfigPath = path.join(context.globalStoragePath, "config.json");
        const internalConfigManager = yield internalConfig_1.InternalConfigManager.loadingConfigFrom(internalConfigPath);
        if (!internalConfigManager.getConfig().initialized) {
            const message = "The Kotlin extension will automatically download a language server and a debug adapter to provide code completion, linting, debugging and more. If you prefer to install these yourself, you can provide custom paths or disable them in your settings.";
            const confirmed = yield vscode.window.showInformationMessage(message, "Ok, continue");
            if (!confirmed) {
                yield vscode.window.showWarningMessage("Only syntax highlighting will be available for Kotlin.");
                return;
            }
            yield internalConfigManager.updateConfig({ initialized: true });
        }
        const initTasks = [];
        if (langServerEnabled) {
            initTasks.push(withSpinningStatus(context, (status) => __awaiter(this, void 0, void 0, function* () {
                yield languageSetup_1.activateLanguageServer(context, status, kotlinConfig);
            })));
        }
        else {
            logger_1.LOG.info("Skipping language server activation since 'kotlin.languageServer.enabled' is false");
        }
        if (debugAdapterEnabled) {
            initTasks.push(withSpinningStatus(context, (status) => __awaiter(this, void 0, void 0, function* () {
                yield debugSetup_1.registerDebugAdapter(context, status, kotlinConfig);
            })));
        }
        else {
            logger_1.LOG.info("Skipping debug adapter registration since 'kotlin.debugAdapter.enabled' is false");
        }
        yield Promise.all(initTasks);
    });
}
exports.activate = activate;
function withSpinningStatus(context, action) {
    return __awaiter(this, void 0, void 0, function* () {
        const status = new status_1.StatusBarEntry(context, "$(sync~spin)");
        status.show();
        yield action(status);
        status.dispose();
    });
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map