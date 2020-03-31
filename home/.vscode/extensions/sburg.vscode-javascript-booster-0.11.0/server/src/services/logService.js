"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectionService_1 = require("./connectionService");
class LogService {
    output(message) {
        const connection = connectionService_1.default.connection();
        if (connection) {
            connection.console.log(`${new Date().toISOString()}: ${message}`);
        }
        else {
            // tslint:disable-next-line:no-console
            console.log(`${new Date().toISOString()}: ${message}`);
        }
    }
    outputError(message) {
        return this.output(`[error] ${message}`);
    }
}
exports.default = new LogService();
//# sourceMappingURL=logService.js.map