"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType[EnvironmentType["Mac"] = 0] = "Mac";
    EnvironmentType[EnvironmentType["Linux"] = 1] = "Linux";
    EnvironmentType[EnvironmentType["Windows"] = 2] = "Windows";
})(EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {}));
exports.getEnvironment = () => {
    if (process.platform === "win32") {
        return EnvironmentType.Windows;
    }
    if (process.platform === "darwin") {
        return EnvironmentType.Mac;
    }
    if (process.platform === "linux") {
        return EnvironmentType.Linux;
    }
    throw new RangeError("Environment was not detected properly.");
};
//# sourceMappingURL=environment.js.map