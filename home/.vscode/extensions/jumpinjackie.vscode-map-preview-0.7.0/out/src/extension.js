'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const fs = require("fs");
const vscode = require("vscode");
const path = require("path");
var SourceType;
(function (SourceType) {
    SourceType[SourceType["SCRIPT"] = 0] = "SCRIPT";
    SourceType[SourceType["STYLE"] = 1] = "STYLE";
})(SourceType || (SourceType = {}));
const EPSG_REGEX = /^EPSG:\d+$/g;
const SCHEME = "map-preview";
const WEBVIEW_TYPE = "mapPreview";
const PREVIEW_COMMAND_ID = "map.preview";
const PREVIEW_PROJ_COMMAND_ID = "map.preview-with-proj";
function makePreviewUri(doc) {
    return vscode.Uri.parse(`${SCHEME}://map-preview/map-preview: ${doc.fileName}`);
}
class PreviewDocumentContentProvider {
    constructor(extensionPath) {
        this.extensionPath = extensionPath;
        this._onDidChange = new vscode.EventEmitter();
        this._projections = new Map();
        this._subscriptions = vscode.Disposable.from(vscode.workspace.onDidOpenTextDocument(this.onDocumentOpened.bind(this)));
    }
    dispose() {
        this._projections.clear();
        this._subscriptions.dispose();
        this._onDidChange.dispose();
    }
    onDocumentOpened(e) {
        //console.log(`Document opened ${e.uri}`);
        const uri = makePreviewUri(e);
        this._onDidChange.fire(uri);
    }
    triggerVirtualDocumentChange(uri) {
        this._onDidChange.fire(uri);
    }
    clearPreviewProjection(uri) {
        this._projections.delete(uri.toString());
    }
    setPreviewProjection(uri, projection) {
        this._projections.set(uri.toString(), projection);
    }
    resolveDocument(uri) {
        const matches = vscode.window.visibleTextEditors.filter(ed => {
            return makePreviewUri(ed.document).toString() == uri.toString();
        });
        if (matches.length >= 1) { //If we get more than one match, it's probably because the same document has been opened more than once (eg. split view)
            return matches[0].document;
        }
        else {
            return null;
        }
    }
    generateDocumentContent(uri) {
        const doc = this.resolveDocument(uri);
        if (doc) {
            let proj = null;
            const sUri = uri.toString();
            if (this._projections.has(sUri)) {
                proj = this._projections.get(sUri);
            }
            const content = this.createMapPreview(doc, proj);
            const debugSettings = vscode.workspace.getConfiguration("map.preview.debug");
            if (debugSettings.has("dumpContentPath")) {
                const dumpPath = debugSettings.get("dumpContentPath");
                if (dumpPath) {
                    try {
                        fs.writeFileSync(dumpPath, content);
                    }
                    catch (e) {
                        vscode.window.showErrorMessage(`Error dumping preview content: ${e.message}`);
                    }
                }
            }
            return content;
        }
        else {
            return this.errorSnippet(`<h1>Error preparing preview</h1><p>Cannot resolve document for virtual document URI: ${uri.toString()}</p>`);
        }
    }
    provideTextDocumentContent(uri) {
        var _a;
        const content = this.generateDocumentContent(uri);
        // Need to set up CSP for any URLs we find in the base layer defns
        const baseLayersRoot = vscode.workspace.getConfiguration("map.preview.customLayers");
        const cspAllowedUrls = [];
        if (baseLayersRoot.has("base")) {
            const baseLayers = baseLayersRoot.get("base");
            if (Array.isArray(baseLayers)) {
                for (const bldef of baseLayers) {
                    switch (bldef.kind) {
                        // xyz layers already handled by the https: img-src policy
                        case "wmts":
                            {
                                const url = (_a = bldef.sourceParams.find(sp => sp.name === 'wmts:capabilitiesUrl')) === null || _a === void 0 ? void 0 : _a.value;
                                if (url) {
                                    cspAllowedUrls.push(url);
                                }
                            }
                            break;
                    }
                }
            }
        }
        return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <!--
        Use a content security policy to only allow loading images from https or from our extension directory,
        and only allow scripts that have a specific nonce.
        -->
        <meta 
            http-equiv="Content-Security-Policy"
            content="default-src 'none';
                img-src ${this._wctx.getCspSource()} data: https:;
                worker-src ${this._wctx.getCspSource()} blob:;
                connect-src ${this._wctx.getCspSource()} https://dev.virtualearth.net ${cspAllowedUrls.join(" ")};
                style-src 'unsafe-inline' ${this._wctx.getCspSource()};
                style-src-elem 'unsafe-inline' ${this._wctx.getCspSource()};
                script-src 'nonce-${this._wctx.getScriptNonce()}' ${this._wctx.getCspSource()};" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Map Preview</title>
    </head>
    ${content}
</html>`;
    }
    errorSnippet(error) {
        return `
            <body>
                ${error}
            </body>`;
    }
    /**
     * Expose an event to signal changes of _virtual_ documents
     * to the editor
     */
    get onDidChange() {
        return this._onDidChange.event;
    }
    attachWebViewContext(xformer) {
        this._wctx = xformer;
    }
    detachWebViewContext() {
        this._wctx = undefined;
    }
    createLocalSource(file, type) {
        const onDiskPath = vscode.Uri.file(path.join(this.extensionPath, 'static', file));
        const source_path = this._wctx.asWebviewUri(onDiskPath);
        switch (type) {
            case SourceType.SCRIPT:
                return `<script nonce="${this._wctx.getScriptNonce()}" src="${source_path}" type="text/javascript"></script>`;
            case SourceType.STYLE:
                return `<link nonce="${this._wctx.getStylesheetNonce()}" href="${source_path}" rel="stylesheet" />`;
        }
    }
    createMapPreview(doc, projection = null) {
        const config = vscode.workspace.getConfiguration("map.preview");
        /*
        //We cannot proceed if default base layer is one that requires API keys and no API key has been provided
        const baseLayer = config.get<string>("defaultBaseLayer");
        switch (baseLayer) {
            case "stamen-toner":
            case "stamen-terrain":
            case "stamen-water":
                {
                    let hasApiKey = false;
                    if (config.has("apikeys.stadiamaps")) {
                        const key = config.get<string>("apikeys.stadiamaps") ?? "";
                        hasApiKey = (key.trim().length > 0);
                    }
                    if (!hasApiKey) {
                        return this.errorSnippet(`<h1>API Key Required</h1>
<p>Your chosen default base layer of <strong>${baseLayer}</strong> requires a Stadia Maps API key and no such key was provided</p>
<p>Please specify a valid API key for the <strong>map.preview.apikeys.stadiamaps</strong> setting, or change the <strong>map.preview.defaultBaseLayer</strong> setting to a layer type that does not require an API key (like <strong>osm</strong>)</p>`);
                    }
                }
        }
        */
        return `<body>
            <div id="map" style="width: 100%; height: 100%">
                <div id="format" style="position: absolute; left: 40; top: 5; z-index: 100; padding: 5px; background: yellow; color: black"></div>
            </div>
            <div id="loading-mask" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0">
                <div>Loading Preview ...</div>
            </div>` +
            this.createLocalSource("purify.min.js", SourceType.SCRIPT) +
            this.createLocalSource("ol.css", SourceType.STYLE) +
            this.createLocalSource("ol-layerswitcher.css", SourceType.STYLE) +
            this.createLocalSource("ol-popup.css", SourceType.STYLE) +
            this.createLocalSource("proj4.js", SourceType.SCRIPT) +
            this.createLocalSource("papaparse.min.js", SourceType.SCRIPT) +
            this.createLocalSource("ol.js", SourceType.SCRIPT) +
            this.createLocalSource("ol-layerswitcher.js", SourceType.SCRIPT) +
            this.createLocalSource("ol-popup.js", SourceType.SCRIPT) +
            this.createLocalSource("preview.js", SourceType.SCRIPT) +
            this.createLocalSource("preview.css", SourceType.STYLE) +
            `<script nonce="${this._wctx.getScriptNonce()}" type="text/javascript">

                function setError(e) {
                    var mapEl = document.getElementById("map");
                    var errHtml = "<h1>An error occurred rendering preview</h1>";
                    //errHtml += "<p>" + DOMPurify.sanitize(e.name) + ": " + DOMPurify.sanitize(e.message) + "</p>";
                    errHtml += "<pre>" + DOMPurify.sanitize(e.stack) + "</pre>";
                    mapEl.innerHTML = errHtml;
                }

                try {
                    var previewProj = ${projection ? ('"' + projection + '"') : "null"};
                    var previewConfig = ${JSON.stringify(config)};
                    previewConfig.sourceProjection = previewProj;
                    var docUri = "${this._wctx.asWebviewUri(doc.uri)}";
                    fetch(docUri).then(r => {
                        r.text().then(content => {
                            var formatOptions = { featureProjection: 'EPSG:3857' };
                            if (previewProj != null) {
                                formatOptions.dataProjection = previewProj; 
                            }
                            createPreviewSource(content, formatOptions, previewConfig, function (preview) {
                                document.getElementById("format").innerHTML = "Format: " + preview.driver;
                                initPreviewMap('map', preview, previewConfig);
                            });
                        }).catch(e => setError(e));
                    }).catch(e => setError(e));                    
                } catch (e) {
                    setError(e);
                }
            </script>
        </body>`;
    }
}
function loadWebView(content, previewUri, fileName, extensionPath) {
    //const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
    const docName = path.basename(fileName);
    const docDir = path.dirname(fileName);
    const panel = vscode.window.createWebviewPanel(WEBVIEW_TYPE, `Map Preview: ${docName}`, vscode.ViewColumn.Two, {
        // Enable scripts in the webview
        enableScripts: true,
        // Restrict the webview to only loading content from our extension's `static` directory.
        localResourceRoots: [
            vscode.Uri.file(path.join(extensionPath, 'static')),
            // IMPORTANT: Otherwise our generated HTML cannot fetch() this document's content
            vscode.Uri.file(docDir)
        ]
    });
    const scriptNonce = getNonce();
    const cssNonce = getNonce();
    const wctx = {
        asWebviewUri: uri => panel.webview.asWebviewUri(uri),
        getCspSource: () => panel.webview.cspSource,
        getScriptNonce: () => scriptNonce,
        getStylesheetNonce: () => cssNonce
    };
    content.attachWebViewContext(wctx);
    const html = content.provideTextDocumentContent(previewUri);
    content.detachWebViewContext();
    panel.webview.html = html;
}
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const extensionPath = context.extensionPath;
    const provider = new PreviewDocumentContentProvider(extensionPath);
    const registration = vscode.workspace.registerTextDocumentContentProvider(SCHEME, provider);
    const previewCommand = vscode.commands.registerCommand(PREVIEW_COMMAND_ID, () => {
        const editor = vscode.window.activeTextEditor;
        // Probable cause: File is too big. VSCode won't even hand us just the URI of the document (which is
        // what we really are after). Nothing we can do here.
        //
        // TODO: Of course if VSCode ever introduces an API that gives us the URI of the active document we may
        // be able to revisit this
        if (!editor) {
            vscode.window.showErrorMessage("This file is too big to be previewed");
            return;
        }
        const doc = editor.document;
        const previewUri = makePreviewUri(doc);
        provider.clearPreviewProjection(previewUri);
        provider.triggerVirtualDocumentChange(previewUri);
        loadWebView(provider, previewUri, doc.fileName, extensionPath);
    });
    const previewWithProjCommand = vscode.commands.registerCommand(PREVIEW_PROJ_COMMAND_ID, () => {
        const editor = vscode.window.activeTextEditor;
        // Probable cause: File is too big. VSCode won't even hand us just the URI of the document (which is
        // what we really are after). Nothing we can do here.
        //
        // TODO: Of course if VSCode ever introduces an API that gives us the URI of the active document we may
        // be able to revisit this
        if (!editor) {
            vscode.window.showErrorMessage("This file is too big to be previewed");
            return;
        }
        const opts = {
            canPickMany: false,
            //prompt: "Enter the EPSG code for your projection",
            placeHolder: "EPSG:XXXX"
        };
        const config = vscode.workspace.getConfiguration("map.preview");
        const codes = [
            "EPSG:4326",
            "EPSG:3857",
            ...config.projections
                .filter(prj => prj.epsgCode != 4326 && prj.epsgCode != 3857)
                .map(prj => `EPSG:${prj.epsgCode}`)
        ].map((epsg) => ({
            label: `Preview in projection (${epsg})`,
            projection: epsg
        }));
        vscode.window.showQuickPick(codes, opts).then(val => {
            if (val) {
                const doc = editor.document;
                const previewUri = makePreviewUri(doc);
                provider.setPreviewProjection(previewUri, val.projection);
                provider.triggerVirtualDocumentChange(previewUri);
                loadWebView(provider, previewUri, doc.fileName, extensionPath);
            }
        });
    });
    context.subscriptions.push(previewCommand, registration);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map