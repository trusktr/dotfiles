"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDocumentRangePrettyfier = void 0;
const vscode = require("vscode");
const document_1 = require("../models/doc/document");
const range_1 = require("../models/doc/range");
class TableDocumentRangePrettyfier {
    constructor(_singleTablePrettyfier) {
        this._singleTablePrettyfier = _singleTablePrettyfier;
    }
    provideDocumentRangeFormattingEdits(document, range, options, token) {
        const formattedTable = this._singleTablePrettyfier.prettifyTable(new document_1.Document(document.getText()), new range_1.Range(range.start.line, range.end.line));
        return [new vscode.TextEdit(range, formattedTable)];
    }
}
exports.TableDocumentRangePrettyfier = TableDocumentRangePrettyfier;
//# sourceMappingURL=tableDocumentRangePrettyfier.js.map