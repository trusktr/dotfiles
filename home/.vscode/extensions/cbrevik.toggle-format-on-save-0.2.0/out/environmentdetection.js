"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environmentType_1 = require("./environmentType");
exports.getEnvironment = () => {
    if (process.platform === "win32") {
        return environmentType_1.EnvironmentType.Windows;
    }
    if (process.platform === "darwin") {
        return environmentType_1.EnvironmentType.Mac;
    }
    if (process.platform === "linux") {
        return environmentType_1.EnvironmentType.Linux;
    }
    throw new RangeError("Environment was not detected properly.");
};
//# sourceMappingURL=environmentdetection.js.map