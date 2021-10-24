"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeLimitChecker = void 0;
class SizeLimitChecker {
    constructor(_loggers, _maxTextLength) {
        this._loggers = _loggers;
        this._maxTextLength = _maxTextLength;
    }
    get maxTextLength() {
        return this._maxTextLength;
    }
    isWithinAllowedSizeLimit(text) {
        const whithinLimit = text.length <= this._maxTextLength;
        this.logWhenTooBig(whithinLimit);
        return whithinLimit;
    }
    logWhenTooBig(whithinLimit) {
        if (!whithinLimit) {
            this._loggers.forEach(_ => _.logInfo(`Skipped markdown table prettifying due to text size limit. Configure this in the extension settings (current limit: ${this._maxTextLength} chars).`));
        }
    }
}
exports.SizeLimitChecker = SizeLimitChecker;
//# sourceMappingURL=sizeLimitCheker.js.map