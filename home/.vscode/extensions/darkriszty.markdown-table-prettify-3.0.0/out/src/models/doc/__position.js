"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
class Position {
    constructor(_line, _character) {
        this._line = _line;
        this._character = _character;
    }
    get line() {
        return this._line;
    }
    get character() {
        return this._character;
    }
}
exports.Position = Position;
//# sourceMappingURL=__position.js.map