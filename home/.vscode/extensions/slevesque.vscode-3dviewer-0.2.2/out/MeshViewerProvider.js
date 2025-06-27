"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshViewerProvider = void 0;
const path = require("path");
const vscode = require("vscode");
const util_1 = require("./util");
/**
 * Provider for Mesh viewers.
 */
let MeshViewerProvider = /** @class */ (() => {
    class MeshViewerProvider {
        constructor(_context) {
            this._context = _context;
            /**
             * Tracks all known webviews
             */
            this.webviews = new util_1.WebviewCollection();
            this._callbacks = new Map();
        }
        static register(context) {
            return vscode.window.registerCustomEditorProvider(MeshViewerProvider.viewType, new MeshViewerProvider(context), {
                // Keeps the webview alive even when it is not visible. You should avoid using this setting
                // unless is absolutely required as it does have memory overhead.
                webviewOptions: {
                    retainContextWhenHidden: true,
                },
                supportsMultipleEditorsPerDocument: false,
            });
        }
        //#region CustomReadonlyEditorProvider
        openCustomDocument(uri, openContext, _token) {
            const document = new util_1.MeshDocument(uri);
            const listeners = [];
            listeners.push(document.onDidChangeContent(e => {
                // Update all webviews when the document changes
                for (const webviewPanel of this.webviews.get(document.uri)) {
                    this.postMessage(webviewPanel, 'update', {});
                }
            }));
            document.onDidDispose(() => util_1.disposeAll(listeners));
            return document;
        }
        resolveCustomEditor(document, webviewPanel, _token) {
            // Add the webview to our internal set of active webviews
            this.webviews.add(document.uri, webviewPanel);
            // Setup initial content for the webview
            webviewPanel.webview.options = {
                enableScripts: true,
            };
            webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview, document);
            webviewPanel.webview.onDidReceiveMessage(e => this.onMessage(document, e));
            if (document.uri.scheme === 'file' && vscode.workspace.getConfiguration('3dviewer').get('hotReload', true)) {
                const watcher = vscode.workspace.createFileSystemWatcher(document.uri.fsPath, true, false, true);
                watcher.onDidChange(() => webviewPanel.webview.postMessage('modelRefresh'));
                webviewPanel.onDidDispose(() => watcher.dispose());
            }
            // Wait for the webview to be properly ready before we init
            webviewPanel.webview.onDidReceiveMessage(e => {
                if (e.type === 'ready') {
                    this.postMessage(webviewPanel, 'init', {});
                }
            });
        }
        //#endregion
        getMediaPath(scheme, mediaFile) {
            return vscode.Uri.file(path.join(this._context.extensionPath, 'media', mediaFile))
                .with({ scheme: scheme });
        }
        getSettings(uri) {
            const config = vscode.workspace.getConfiguration('3dviewer');
            const initialData = {
                fileToLoad: uri.toString(),
                wireframe: config.get('wireframe', false),
                background: config.get('background', '#8f8f8f'),
                useEnvCube: config.get('useEnvCube', true),
                boundingBox: config.get('boundingBox', false),
                grid: config.get('grid', true),
                gridSize: config.get('gridSize', 32),
                near: config.get('near', 0.01),
                far: config.get('far', 1000000),
                limitFps: config.get('limitFps', 0),
                hotReloadAutomatically: config.get('hotReloadAutomatically', false)
            };
            return `<meta id="vscode-3dviewer-data" data-settings="${JSON.stringify(initialData).replace(/"/g, '&quot;')}">`;
        }
        getScripts(scheme, nonce) {
            const scripts = [
                this.getMediaPath(scheme, 'build/three.js'),
                this.getMediaPath(scheme, 'examples/js/libs/inflate.min.js'),
                this.getMediaPath(scheme, 'examples/js/libs/dat.gui.min.js'),
                this.getMediaPath(scheme, 'examples/js/controls/OrbitControls.js'),
                this.getMediaPath(scheme, 'examples/js/loaders/LoaderSupport.js'),
                this.getMediaPath(scheme, 'examples/js/loaders/ColladaLoader.js'),
                this.getMediaPath(scheme, 'examples/js/loaders/FBXLoader.js'),
                this.getMediaPath(scheme, 'examples/js/loaders/TDSLoader.js'),
                this.getMediaPath(scheme, 'examples/js/loaders/OBJLoader.js'),
                this.getMediaPath(scheme, 'examples/js/loaders/STLLoader.js'),
                this.getMediaPath(scheme, 'examples/js/loaders/PLYLoader.js'),
                this.getMediaPath(scheme, 'viewer.js')
            ];
            return scripts
                .map(source => `<script nonce="${nonce}" src="${source}"></script>`)
                .join('\n');
        }
        /**
         * Get the static HTML used for in our editor's webviews.
         */
        getHtmlForWebview(webview, document) {
            const fileToLoad = document.uri.scheme === "file" ?
                webview.asWebviewUri(vscode.Uri.file(document.uri.fsPath)) :
                document.uri;
            // Local path to script and css for the webview
            const scriptUri = webview.asWebviewUri(vscode.Uri.file(path.join(this._context.extensionPath, 'media', 'viewer.js')));
            const styleUri = webview.asWebviewUri(vscode.Uri.file(path.join(this._context.extensionPath, 'media', 'viewer.css')));
            const mediaUri = webview.asWebviewUri(vscode.Uri.file(path.join(this._context.extensionPath, 'media')));
            // Use a nonce to whitelist which scripts can be run
            const nonce = util_1.getNonce();
            return /* html */ `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">

                <!--
                Use a content security policy to only allow loading images from https or from our extension directory,
                and only allow scripts that have a specific nonce.
                -->
                <meta http-equiv="Content-Security-Policy" content="default-src ${webview.cspSource} 'self' 'unsafe-eval' blob: data:; img-src ${webview.cspSource} 'self' 'unsafe-eval' blob: data:; style-src ${webview.cspSource} 'unsafe-inline'; script-src ${webview.cspSource} 'self' 'unsafe-eval' blob: data:;">

                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <link href="${styleUri}" rel="stylesheet" />

                <base href="${mediaUri}/">
                
                ${this.getSettings(fileToLoad)}

                <title>3D Mesh Viewer</title>
            </head>
            <body>
                ${this.getScripts('vscode-resource', nonce)}
            </body>
            </html>`;
        }
        postMessage(panel, type, body) {
            panel.webview.postMessage({ type, body });
        }
        onMessage(document, message) {
            switch (message.type) {
                case 'response':
                    const callback = this._callbacks.get(message.requestId);
                    callback === null || callback === void 0 ? void 0 : callback(message.body);
                    return;
            }
        }
    }
    MeshViewerProvider.viewType = '3dviewer.viewer';
    return MeshViewerProvider;
})();
exports.MeshViewerProvider = MeshViewerProvider;
//# sourceMappingURL=MeshViewerProvider.js.map