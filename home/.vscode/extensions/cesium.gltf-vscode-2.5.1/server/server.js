"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
const vscode_uri_1 = require("vscode-uri");
const Url = require("url");
const path = require("path");
const fs = require("fs");
const jsonMap = require("json-source-map");
const gltfValidator = require("gltf-validator");
// Create a connection for the server. The connection uses Node's IPC as a transport
let connection = (0, vscode_languageserver_1.createConnection)(new vscode_languageserver_1.IPCMessageReader(process), new vscode_languageserver_1.IPCMessageWriter(process));
// Create a simple text document manager. The text document manager
// supports full document sync only
let documents = new vscode_languageserver_1.TextDocuments();
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);
const everySingleTab = new RegExp('\\t', 'g');
let documentsToHandle = new Map();
let debounceTimer;
/**
 * Attempt to parse a JSON document into a map of JSON pointers.
 * Catch and report any parsing errors encountered.
 *
 * @param textDocument The document to parse
 * @param gltfText The text of the document
 * @return A map of JSON pointers to document text locations, or `undefined`
 */
function tryGetJsonMap(textDocument, gltfText) {
    try {
        // NOTE: jsonMap.parse() makes a bad assumption that every `\t` char is
        // four columns, and it's not configurable. But we need character offset,
        // not column index, so here we replace every `\t` with a single space.
        // The resulting "columns" are actually chars-within-line counts.
        return jsonMap.parse(gltfText.replace(everySingleTab, ' '));
    }
    catch (ex) {
        console.warn('Error parsing glTF JSON document: ' + textDocument.uri);
    }
    return undefined;
}
/**
 * Evaluate whether a given document URI should be passed to the glTF Validator
 * for further processing.
 *
 * @param textDocument The document to evaluate
 * @return True if the URI appears to be a local `.gltf` file.
 */
function isLocalGltf(textDocument) {
    const lowerUri = textDocument.uri.toLowerCase();
    return (lowerUri.startsWith('file:///') && lowerUri.endsWith('.gltf'));
}
// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities.
connection.onInitialize(() => {
    return {
        capabilities: {
            // Tell the client that the server works in FULL text document sync mode
            textDocumentSync: documents.syncKind,
            // Tell the client we provide hovers
            hoverProvider: true,
            // Tell the client we provide definitions
            definitionProvider: true,
        }
    };
});
let currentSettings;
//
// This is sent on server activation, and again for every configuration change.
//
connection.onDidChangeConfiguration((change) => {
    currentSettings = change.settings.glTF;
    if (currentSettings.Validation.enable) {
        // Schedule revalidation of all open text documents using the new settings.
        documents.all().forEach(scheduleParsing);
    }
    else {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceTimer = undefined;
        }
        documents.all().forEach(clearTextDocument);
    }
});
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    if (currentSettings.Validation.enable) {
        scheduleParsing(change.document);
    }
});
// Turn off validation of closed documents.
documents.onDidClose(change => {
    if (currentSettings.Validation.enable) {
        unscheduleParsing(change.document);
    }
    // A text document was closed we clear the diagnostics
    connection.sendDiagnostics({ uri: change.document.uri, diagnostics: [] });
});
/**
 * Schedule a document for glTF parsing after the debounce timeout.
 *
 * @param textDocument The document to schedule validator for.
 */
function scheduleParsing(textDocument) {
    if (isLocalGltf(textDocument)) {
        documentsToHandle.set(textDocument, { jsonMap: null, parseable: true });
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceTimer = undefined;
        }
        debounceTimer = setTimeout(() => {
            documentsToHandle.forEach(parseTextDocument);
        }, currentSettings.Validation.debounce);
    }
}
/**
 * Remove a glTF document from scheduled validation, possibly because
 * the document has closed or is no longer available to validate.
 *
 * @param textDocument The document to un-schedule
 */
function unscheduleParsing(textDocument) {
    documentsToHandle.delete(textDocument);
}
/**
 * Clear any previous validation output messages from a particular document,
 * likely because glTF validation has been disabled.
 *
 * @param textDocument The document to clear
 */
function clearTextDocument(textDocument) {
    unscheduleParsing(textDocument);
    if (isLocalGltf(textDocument)) {
        const diagnostics = [];
        connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    }
}
/**
 * Immediately launch the glTF Validator on a .gltf JSON document.
 *
 * @param textDocument The document to validate
 */
function parseTextDocument(parseResult, textDocument) {
    if (parseResult.jsonMap || !parseResult.parseable) {
        // Apparently the validator already ran on this ParseResult, not fully de-bounced somehow.
        return;
    }
    const fileName = vscode_uri_1.URI.parse(textDocument.uri).fsPath;
    const baseName = path.basename(fileName);
    const gltfText = textDocument.getText();
    const folderName = path.resolve(fileName, '..');
    parseResult.jsonMap = tryGetJsonMap(textDocument, gltfText);
    if ((!parseResult.jsonMap) || (!parseResult.jsonMap.data)) {
        parseResult.parseable = false;
        let diagnostics = [getDiagnostic({
                message: 'Error parsing JSON document.',
                isFromLanguageServer: true
            }, { data: null, pointers: null })];
        connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
        return;
    }
    if ((!parseResult.jsonMap.data.asset) || (!parseResult.jsonMap.data.asset.version) || (parseResult.jsonMap.data.asset.version[0] === '1')) {
        let diagnostics = [getDiagnostic({
                message: 'Validation not available for glTF 1.0 files.',
                isFromLanguageServer: true,
                severity: 2
            }, jsonMap)];
        connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
        parseResult.parseable = false;
        return;
    }
    gltfValidator.validateString(gltfText, {
        uri: baseName,
        maxIssues: currentSettings.Validation.maxIssues,
        ignoredIssues: currentSettings.Validation.ignoredIssues,
        severityOverrides: currentSettings.Validation.severityOverrides,
        externalResourceFunction: (uri) => new Promise((resolve, reject) => {
            uri = path.resolve(folderName, decodeURIComponent(uri));
            fs.readFile(uri, (err, data) => {
                console.log("Loading external file: " + uri);
                if (err) {
                    console.warn("Error: " + err.toString());
                    reject(err.toString());
                    return;
                }
                resolve(data);
            });
        }),
    }).then((result) => {
        let diagnostics = [];
        if (result.issues && result.issues.messages) {
            const messages = result.issues.messages;
            const numMessages = messages.length;
            for (let i = 0; i < numMessages; ++i) {
                let info = messages[i];
                if (info.message) {
                    diagnostics.push(getDiagnostic(info, parseResult.jsonMap));
                }
            }
            if (result.issues.truncated) {
                diagnostics.push(getDiagnostic({
                    message: 'VALIDATION ABORTED: Too many messages produced.',
                    isFromLanguageServer: true
                }, parseResult.jsonMap));
            }
        }
        // Send the computed diagnostics to VSCode, clearing any old messages.
        connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
        if (diagnostics.length === 0) {
            console.log('Validation passed: ' + fileName);
        }
        else {
            console.log(diagnostics.length.toFixed() + ' validation messages for ' + fileName);
        }
    }, (result) => {
        // Validator's error
        console.warn('glTF Validator failed on: ' + fileName);
        console.warn(result);
        let diagnostics = [getDiagnostic({
                message: 'glTF Validator error: ' + result,
                isFromLanguageServer: true
            }, { data: null, pointers: null })];
        connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    });
}
/**
 * Convert an individual glTF Validator message to a Language Server Diagnostic.
 *
 * @param info An object containing a message from the glTF Validator's output messages
 * @param map A map of JSON pointers to document text locations
 * @return A `Diagnostic` to send back to the client
 */
function getDiagnostic(info, map) {
    let range = {
        start: { line: 0, character: 0 },
        end: { line: 0, character: Number.MAX_VALUE }
    };
    let severity = vscode_languageserver_1.DiagnosticSeverity.Error;
    switch (info.severity) {
        case 1:
            severity = vscode_languageserver_1.DiagnosticSeverity.Warning;
            break;
        case 2:
            severity = vscode_languageserver_1.DiagnosticSeverity.Information;
            break;
        case 3:
            severity = vscode_languageserver_1.DiagnosticSeverity.Hint;
            break;
        default:
            break;
    }
    if (info.pointer) {
        const pointerName = info.pointer;
        if (map.pointers.hasOwnProperty(pointerName)) {
            const pointer = map.pointers[pointerName];
            const start = pointer.key || pointer.value;
            range.start.line = start.line;
            range.start.character = start.column;
            const end = pointer.valueEnd;
            range.end.line = end.line;
            range.end.character = end.column;
        }
    }
    return {
        code: info.code,
        severity: severity,
        range,
        message: info.message,
        source: (info.isFromLanguageServer ? 'glTF Language Server' : 'glTF Validator')
    };
}
function positionContained(selection, rangeStart, rangeEnd) {
    return ((rangeStart.line === selection.line && rangeStart.character <= selection.character) || rangeStart.line < selection.line) &&
        ((rangeEnd.line === selection.line && rangeEnd.character >= selection.character) || rangeEnd.line > selection.line);
}
function getFromPath(glTF, path) {
    const pathSplit = path.split('/');
    const numPathSegments = pathSplit.length;
    let result = glTF;
    const firstValidIndex = 1; // Because the path has a leading slash.
    for (let i = firstValidIndex; i < numPathSegments; ++i) {
        result = result[pathSplit[i]];
    }
    return result;
}
function getPath(textDocumentPosition) {
    let hoverPos = textDocumentPosition.position;
    let document = documents.get(textDocumentPosition.textDocument.uri);
    let parseResult = documentsToHandle.get(document);
    if (!parseResult || !parseResult.parseable || !parseResult.jsonMap) {
        return null;
    }
    let jsonMap = parseResult.jsonMap;
    let lastPath;
    let lastStartPos;
    let lastEndPos;
    for (let path of Object.keys(jsonMap.pointers)) {
        let position = jsonMap.pointers[path];
        let startPos = document.positionAt(position.value.pos);
        let endPos = document.positionAt(position.valueEnd.pos);
        if (positionContained(hoverPos, startPos, endPos)) {
            lastPath = path;
            lastStartPos = startPos;
            lastEndPos = endPos;
        }
    }
    if (!lastPath) {
        return null;
    }
    return { path: lastPath, start: lastStartPos, end: lastEndPos, jsonMap: jsonMap };
}
connection.onDefinition((textDocumentPosition) => {
    let pathData = getPath(textDocumentPosition);
    if (!pathData) {
        return null;
    }
    let path = pathData.path;
    let document = documents.get(textDocumentPosition.textDocument.uri);
    const pathSplit = path.split('/');
    const numPathSegments = pathSplit.length;
    let result = pathData.jsonMap.data;
    function makeLocation(position, uri) {
        let range;
        if (!position) {
            range = vscode_languageserver_1.Range.create(0, 0, 0, 0);
        }
        else {
            range = vscode_languageserver_1.Range.create(document.positionAt(position.value.pos), document.positionAt(position.valueEnd.pos));
        }
        if (uri === undefined || uri === null) {
            uri = textDocumentPosition.textDocument.uri;
        }
        return vscode_languageserver_1.Location.create(uri, range);
    }
    function makeDataUri(doc, path) {
        return 'gltf-dataUri:' + path + '#' + encodeURIComponent(vscode_uri_1.URI.parse(doc.textDocument.uri).fsPath);
    }
    const firstValidIndex = 1; // Because the path has a leading slash.
    let inNodes = false;
    let inChannels = false;
    let inAccessors = false;
    let inDraco = false;
    let currentPath = '';
    let currentAnimationPath;
    for (let i = firstValidIndex; i < numPathSegments; ++i) {
        let previousPart = pathSplit[i - 1];
        let part = pathSplit[i];
        currentPath += '/' + part;
        result = result[part];
        if (typeof result !== 'object') {
            if (part === 'scene') {
                return makeLocation(pathData.jsonMap.pointers['/scenes/' + result]);
            }
            else if (part === 'mesh') {
                return makeLocation(pathData.jsonMap.pointers['/meshes/' + result]);
            }
            else if (part === 'skin') {
                return makeLocation(pathData.jsonMap.pointers['/skins/' + result]);
            }
            else if (part === 'material') {
                return makeLocation(pathData.jsonMap.pointers['/materials/' + result]);
            }
            else if (part === 'input' || part === 'output' || part === 'inverseBindMatrices') {
                return makeLocation(pathData.jsonMap.pointers['/accessors/' + result]);
            }
            else if (part === 'indices') {
                let primitivePath = currentPath.substr(0, currentPath.length - '/indices'.length);
                let primitive = getFromPath(pathData.jsonMap.data, primitivePath);
                if (primitive && primitive.extensions && primitive.extensions['KHR_draco_mesh_compression']) {
                    let indicesPath = primitivePath + '/extensions/KHR_draco_mesh_compression/attributes/indices';
                    let uri = makeDataUri(textDocumentPosition, indicesPath);
                    return makeLocation(undefined, uri);
                }
                return makeLocation(pathData.jsonMap.pointers['/accessors/' + result]);
            }
            else if (previousPart === 'attributes') {
                if (inDraco) {
                    let uri = makeDataUri(textDocumentPosition, currentPath);
                    return makeLocation(undefined, uri);
                }
                return makeLocation(pathData.jsonMap.pointers['/accessors/' + result]);
            }
            else if (part === 'node' || part === 'skeleton' || inNodes) {
                return makeLocation(pathData.jsonMap.pointers['/nodes/' + result]);
            }
            else if (part === 'bufferView') {
                return makeLocation(pathData.jsonMap.pointers['/bufferViews/' + result]);
            }
            else if (part === 'buffer') {
                return makeLocation(pathData.jsonMap.pointers['/buffers/' + result]);
            }
            else if (part === 'index') {
                return makeLocation(pathData.jsonMap.pointers['/textures/' + result]);
            }
            else if (part === 'sampler') {
                if (inChannels) {
                    return makeLocation(pathData.jsonMap.pointers[currentAnimationPath + '/samplers/' + result]);
                }
                return makeLocation(pathData.jsonMap.pointers['/samplers/' + result]);
            }
            else if (part === 'source') {
                return makeLocation(pathData.jsonMap.pointers['/images/' + result]);
            }
            else if (part === 'camera') {
                return makeLocation(pathData.jsonMap.pointers['/cameras/' + result]);
            }
            else if (part === 'fragmentShader' || part === 'vertexShader') {
                return makeLocation(pathData.jsonMap.pointers['/shaders/' + result]);
            }
            else if (part === 'pointer' && previousPart === 'KHR_animation_pointer' &&
                pathData.jsonMap.pointers.hasOwnProperty(result)) {
                return makeLocation(pathData.jsonMap.pointers[result]);
            }
        }
        else if (part === 'nodes' || part === 'children' || part === 'joints') {
            inNodes = true;
        }
        else if (part === 'channels') {
            inChannels = true;
            currentAnimationPath = currentPath.substring(0, currentPath.length - '/channels'.length);
        }
        else if (result.uri !== undefined && result.uri !== null) {
            if (!result.uri.startsWith('data:') && !currentPath.startsWith('/images/')) {
                return makeLocation(undefined, Url.resolve(textDocumentPosition.textDocument.uri, result.uri));
            }
            let uri = makeDataUri(textDocumentPosition, currentPath);
            return makeLocation(undefined, uri);
        }
        else if (part === 'accessors') {
            inAccessors = true;
        }
        else if (part === 'KHR_draco_mesh_compression') {
            inDraco = true;
        }
        else if (inAccessors && !path.includes('bufferView')) {
            let uri = makeDataUri(textDocumentPosition, currentPath);
            return makeLocation(undefined, uri);
        }
    }
    return null;
});
function linearToSRGB(red, green, blue) {
    const l2sRGB = (c) => (c <= 0.0031308) ? (c * 12.92) : (1.055 * Math.pow(c, 1 / 2.4) - 0.055);
    red = Math.round(l2sRGB(red) * 255);
    green = Math.round(l2sRGB(green) * 255);
    blue = Math.round(l2sRGB(blue) * 255);
    return ((red < 16) ? '0' : '') + red.toString(16) + ((green < 16) ? '0' : '') + green.toString(16) + ((blue < 16) ? '0' : '') + blue.toString(16);
}
const colorFactorNames = [
    'ColorFactor', // Note: This includes anything that ends with ...ColorFactor
    'diffuseFactor',
    'specularFactor',
    'emissiveFactor',
    'attenuationColor'
];
connection.onHover((textDocumentPosition) => {
    let pathData = getPath(textDocumentPosition);
    if (!pathData) {
        return null;
    }
    let path = pathData.path;
    if (path.startsWith('/images/')) {
        let splitPath = path.split('/');
        if (splitPath.length > 3) {
            path = splitPath.slice(0, 3).join('/');
        }
        let imageData = getFromPath(pathData.jsonMap.data, path);
        if (imageData && imageData.uri) {
            let contents = {
                kind: vscode_languageserver_1.MarkupKind.Markdown,
                value: 'Use "Go To Definition" (typically `F12`) to view images.'
            };
            return {
                contents: contents,
                range: vscode_languageserver_1.Range.create(pathData.start, pathData.end)
            };
        }
    }
    if (colorFactorNames.some(n => path.includes(n))) {
        if (!Number.isNaN(parseInt(path.charAt(path.length - 1)))) {
            path = path.substring(0, path.length - 2);
        }
        let colorData = getFromPath(pathData.jsonMap.data, path);
        if (Array.isArray(colorData) && colorData.length >= 3) {
            let hexColor = linearToSRGB(colorData[0], colorData[1], colorData[2]);
            let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>` +
                `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="45" viewBox="0 0 300 45">` +
                `<rect style="fill:#${hexColor}" width="100%" height="100%" x="0" y="0" />` +
                `</svg>`;
            let svgDataUri = 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64'); // This is inline btoa(svg).
            let contents = {
                kind: vscode_languageserver_1.MarkupKind.Markdown,
                value: `![#${hexColor}](${svgDataUri})  \nConverted linear to sRGB color: \`#${hexColor}\``
            };
            return {
                contents: contents,
                range: vscode_languageserver_1.Range.create(pathData.start, pathData.end)
            };
        }
    }
    return null;
});
// Listen on the connection
connection.listen();
//# sourceMappingURL=server.js.map