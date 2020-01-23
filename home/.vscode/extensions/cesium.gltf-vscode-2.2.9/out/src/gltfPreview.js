"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const contextBase_1 = require("./contextBase");
const utilities_1 = require("./utilities");
class GltfPreview extends contextBase_1.ContextBase {
    constructor(context) {
        super(context);
        this._panels = {};
        this._onDidChangeActivePanel = new vscode.EventEmitter();
        this._onDidChangePanelReady = new vscode.EventEmitter();
        this.onDidChangeActivePanel = this._onDidChangeActivePanel.event;
        this.onDidChangeReadyState = this._onDidChangePanelReady.event;
        this._mainHtml = fs.readFileSync(this._context.asAbsolutePath('pages/previewModel.html'), 'UTF-8');
        this._babylonHtml = encodeURI(fs.readFileSync(this._context.asAbsolutePath('pages/babylonView.html'), 'UTF-8'));
        this._cesiumHtml = encodeURI(fs.readFileSync(this._context.asAbsolutePath('pages/cesiumView.html'), 'UTF-8'));
        this._threeHtml = encodeURI(fs.readFileSync(this._context.asAbsolutePath('pages/threeView.html'), 'UTF-8'));
    }
    // Instructions to open Chrome DevTools on the HTML preview window:
    //
    // 1. With the HTML preview window open, click Help->Toggle Developer Tools.
    //    Note that this DevTools is docked and is only for VSCode itself.
    //
    // 2. In the Console tab, paste this line:
    //    document.body.querySelector('webview').getWebContents().openDevTools();
    //
    // 3. You now have a second DevTools, the new one is un-docked.  Close the
    //    old docked one.
    //
    // 4. In the top of the Console tab of the remaining un-docked DevTools,
    //    click the pull-down and change "top" to "active-frame (webview.html)".
    //    Now you can debug the HTML preview in the sandboxed iframe.
    openPanel(gltfEditor) {
        const gltfFilePath = gltfEditor.document.fileName;
        let panel = this._panels[gltfFilePath];
        if (!panel) {
            const localResourceRoots = [
                vscode.Uri.file(this._context.extensionPath),
                vscode.Uri.file(path.dirname(gltfFilePath)),
            ];
            const defaultBabylonReflection = this.getConfigResourceUrl('glTF.Babylon', 'environment', localResourceRoots);
            const defaultThreeReflection = this.getConfigResourceUrl('glTF.Three', 'environment', localResourceRoots);
            panel = vscode.window.createWebviewPanel('gltf.preview', 'glTF Preview', vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: localResourceRoots,
            });
            panel._defaultBabylonReflection = defaultBabylonReflection;
            panel._defaultThreeReflection = defaultThreeReflection;
            panel._watchers = [];
            panel.textEditor = gltfEditor;
            panel.onDidDispose(() => {
                this.unwatchFiles(this._panels[gltfFilePath]);
                delete this._panels[gltfFilePath];
                this.updateActivePanel();
            });
            panel.onDidChangeViewState(() => {
                this.updateActivePanel();
            });
            this._panels[gltfFilePath] = panel;
        }
        const gltfContent = gltfEditor.document.getText();
        this.updatePanel(panel, gltfFilePath, gltfContent);
        panel.reveal(vscode.ViewColumn.Two);
        this.setActivePanel(panel);
    }
    get activePanel() {
        return this._activePanel;
    }
    getPanel(fileName) {
        return this._panels[fileName];
    }
    setActivePanel(activePanel) {
        if (this._activePanel !== activePanel) {
            this._activePanel = activePanel;
            this._onDidChangeActivePanel.fire(activePanel);
            if (activePanel) {
                activePanel.webview.postMessage({ command: 'updateDebugMode' });
            }
            else {
                vscode.commands.executeCommand('setContext', 'gltfDebugActive', false);
            }
        }
    }
    updateActivePanel() {
        const activePanel = Object.values(this._panels).find(panel => panel.active);
        this.setActivePanel(activePanel);
    }
    updatePanel(panel, gltfFilePath, gltfContent) {
        const map = utilities_1.parseJsonMap(gltfContent);
        panel._jsonMap = map;
        const gltfRootPath = utilities_1.toResourceUrl(`${path.dirname(gltfFilePath)}/`);
        const gltfFileName = path.basename(gltfFilePath);
        const gltf = map.data;
        let gltfMajorVersion = 1;
        if (gltf && gltf.asset && gltf.asset.version && gltf.asset.version[0] === '2') {
            gltfMajorVersion = 2;
        }
        panel.title = `glTF Preview [${gltfFileName}]`;
        panel.webview.html = this.formatHtml(gltfMajorVersion, gltfContent, gltfRootPath, gltfFileName, panel._defaultBabylonReflection, panel._defaultThreeReflection)
            .replace(/\${webview.cspSource}/g, panel.webview.cspSource);
        panel.webview.onDidReceiveMessage(message => {
            this.onDidReceiveMessage(panel, message);
        });
        this.watchFiles(panel);
    }
    onDidReceiveMessage(panel, message) {
        switch (message.command) {
            case 'select': {
                const pointer = panel._jsonMap.pointers[message.jsonPointer];
                const document = panel.textEditor.document;
                const range = new vscode.Range(document.positionAt(pointer.value.pos), document.positionAt(pointer.valueEnd.pos));
                vscode.commands.executeCommand('gltf.openGltfSelection', range);
                break;
            }
            case 'setContext': {
                vscode.commands.executeCommand('setContext', message.name, message.value);
                break;
            }
            case 'showErrorMessage': {
                vscode.window.showErrorMessage(message.message);
                break;
            }
            case 'showWarningMessage': {
                vscode.window.showWarningMessage(message.message);
                break;
            }
            case 'onReady': {
                panel.ready = true;
                this._onDidChangePanelReady.fire(panel);
                break;
            }
            default: {
                throw new Error(`Unknown command: ${message.command}`);
            }
        }
    }
    formatHtml(gltfMajorVersion, gltfContent, gltfRootPath, gltfFileName, defaultBabylonReflection, defaultThreeReflection) {
        const defaultEngine = vscode.workspace.getConfiguration('glTF').get('defaultV' + gltfMajorVersion + 'Engine');
        const dracoLoaderPath = this.extensionRootPath + 'engines/Draco/draco_decoder.js';
        const dracoLoaderWasmPath = this.extensionRootPath + 'engines/Draco/draco_decoder.wasm';
        // These strings are available in JavaScript by looking up the ID.  They provide the extension's root
        // path (needed for locating additional assets), various settings, and the glTF name and contents.
        // Some engines can display "live" glTF contents, others must load from the glTF path and filename.
        // The path name is needed for glTF files that include external resources.
        const strings = [
            { id: 'extensionRootPath', text: this.extensionRootPath },
            { id: 'defaultEngine', text: defaultEngine },
            { id: 'defaultBabylonReflection', text: defaultBabylonReflection },
            { id: 'defaultThreeReflection', text: defaultThreeReflection },
            { id: 'dracoLoaderPath', text: dracoLoaderPath },
            { id: 'dracoLoaderWasmPath', text: dracoLoaderWasmPath },
            { id: 'babylonHtml', text: this._babylonHtml },
            { id: 'cesiumHtml', text: this._cesiumHtml },
            { id: 'threeHtml', text: this._threeHtml },
            { id: 'gltf', text: gltfContent },
            { id: 'gltfRootPath', text: gltfRootPath },
            { id: 'gltfFileName', text: gltfFileName }
        ];
        const styles = [
            'pages/babylonView.css',
            'pages/cesiumView.css',
            'pages/threeView.css',
            'pages/previewModel.css'
        ];
        const scripts = [
            'engines/Cesium/Cesium.js',
            'node_modules/babylonjs/babylon.js',
            'node_modules/babylonjs-loaders/babylonjs.loaders.min.js',
            'node_modules/babylonjs-inspector/babylon.inspector.bundle.js',
            'engines/Three/three.min.js',
            'engines/Three/DDSLoader.js',
            'engines/Three/DRACOLoader.js',
            'engines/Three/GLTFLoader.js',
            'engines/Three/OrbitControls.js',
            'pages/babylonView.js',
            'pages/babylonDebug.js',
            'pages/cesiumView.js',
            'pages/threeView.js',
            'pages/previewModel.js'
        ];
        // Note that with the file: protocol, we must manually specify the UTF-8 charset.
        return this._mainHtml.replace('{assets}', styles.map(s => `<link rel="stylesheet" href="${this.extensionRootPath + s}"></link>\n`).join('') +
            strings.map(s => `<script id="${s.id}" type="text/plain">${s.text}</script>\n`).join('') +
            scripts.map(s => `<script type="text/javascript" charset="UTF-8" crossorigin="anonymous" src="${this.extensionRootPath + s}"></script>\n`).join(''));
    }
    watchFiles(panel) {
        this.unwatchFiles(panel);
        const document = panel.textEditor.document;
        const documentFilePath = document.fileName;
        panel._watchers.push(fs.watch(documentFilePath, () => {
            this.updatePanel(panel, documentFilePath, document.getText());
        }));
        const documentDirectoryPath = path.dirname(documentFilePath);
        const watch = (object) => {
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    const value = object[key];
                    if (key === "uri" && typeof value === "string" && !value.startsWith("data:")) {
                        const filePath = path.join(documentDirectoryPath, value);
                        panel._watchers.push(fs.watch(filePath, () => {
                            panel.webview.postMessage({ command: 'refresh' });
                        }));
                    }
                    else if (typeof value === "object") {
                        watch(value);
                    }
                }
            }
        };
        watch(panel._jsonMap.data);
    }
    unwatchFiles(panel) {
        for (const watcher of panel._watchers) {
            watcher.close();
        }
        panel._watchers.length = 0;
    }
}
exports.GltfPreview = GltfPreview;
//# sourceMappingURL=gltfPreview.js.map