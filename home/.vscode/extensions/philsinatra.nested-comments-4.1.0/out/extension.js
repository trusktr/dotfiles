"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "Nested Comments" is now active!');
    let nestComments = new NestComments();
    let disposable = vscode.commands.registerCommand('extension.nestComments', () => {
        nestComments.updateNestedComments();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function toggleComment(text, prefix, suffix, nestedPrefix, nestedSuffix) {
    if (text.trimStart().startsWith(prefix) && text.trimEnd().endsWith(suffix)) {
        text = text.replaceAll(prefix, '');
        text = text.replaceAll(suffix, '');
        text = text.replaceAll(nestedPrefix, prefix);
        text = text.replaceAll(nestedSuffix, suffix);
    }
    else {
        text = text.replaceAll(prefix, nestedPrefix);
        text = text.replaceAll(suffix, nestedSuffix);
        text = `${prefix}${text}${suffix}`;
    }
    return text;
}
class NestComments {
    updateNestedComments() {
        let editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        const doc = editor.document;
        const supported = [
            'asp',
            'cfm',
            'css',
            'htm',
            'html',
            'javascript',
            'javascriptreact',
            'typescript',
            'typescriptreact',
            'md',
            'njk',
            'php',
            'blade',
            'twig',
            'svelte',
            'svg',
            'tpl',
            'vue',
            'xml',
            'xsl',
            'xslt'
        ];
        if (supported.indexOf(doc.languageId) === -1) {
            vscode.window.showInformationMessage(`${doc.languageId} file format not supported!`);
            return;
        }
        else {
            return editor.edit(editBuilder => {
                editor.selections.map(selection => {
                    const allText = editor.document.getText();
                    const selText = editor.document.getText(selection);
                    let language = this.getLanguageAtCursor(doc, selection.start);
                    let modText = '';
                    switch (language) {
                        case 'javascript':
                        case 'typescript':
                        case 'css':
                            modText = toggleComment(selText, '/*', '*/', '/~', '~/');
                            break;
                        case 'javascriptreact':
                        case 'typescriptreact':
                            modText = toggleComment(selText, '{/*', '*/}', '/~', '~/');
                            break;
                        case 'tpl':
                        case 'twig':
                            modText = toggleComment(selText, '{#', '#}', '{~#', '#~}');
                            break;
                        case 'blade':
                            modText = toggleComment(selText, '{{--', '--}}', '{{~~', '~~}}');
                            break;
                        case 'html':
                        default:
                            modText = toggleComment(selText, '<!--', '-->', '<!~~', '~~>');
                            break;
                    }
                    editBuilder.replace(selection, modText);
                });
            });
        }
    }
    getLanguageAtCursor(document, position) {
        const allText = document.getText();
        const offset = document.offsetAt(position);
        // Check for <style> tag
        const styleMatch = allText.match(/<style[^>]*>[\s\S]*?<\/style>/gi);
        if (styleMatch) {
            for (const match of styleMatch) {
                const startIndex = allText.indexOf(match);
                const endIndex = startIndex + match.length;
                if (offset >= startIndex && offset <= endIndex) {
                    return 'css';
                }
            }
        }
        // Check for <script> tag
        const scriptMatch = allText.match(/<script[^>]*>[\s\S]*?<\/script>/gi);
        if (scriptMatch) {
            for (const match of scriptMatch) {
                const startIndex = allText.indexOf(match);
                const endIndex = startIndex + match.length;
                if (offset >= startIndex && offset <= endIndex) {
                    return 'javascript';
                }
            }
        }
        // Default to the document's language ID
        return document.languageId;
    }
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map