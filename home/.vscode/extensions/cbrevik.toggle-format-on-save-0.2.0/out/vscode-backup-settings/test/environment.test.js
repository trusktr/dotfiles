"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const env = require("../src/environmentdetection");
const environmentType_1 = require("../src/environmentType");
suite("when platform", () => {
    var originalPlatform;
    suiteSetup(() => {
        originalPlatform = process.platform;
    });
    suiteTeardown(() => {
        SetPlatform(originalPlatform);
    });
    test("is darwin then Enviroment is Mac", () => {
        SetPlatform("darwin");
        assert.equal(environmentType_1.EnvironmentType.Mac, env.EnvironmentDetection());
    });
    test("is win32 then environment is windows", () => {
        SetPlatform("win32");
        assert.equal(environmentType_1.EnvironmentType.Windows, env.EnvironmentDetection());
    });
    test("is linux then environment is linux", () => {
        SetPlatform("linux");
        assert.equal(environmentType_1.EnvironmentType.Linux, env.EnvironmentDetection());
    });
});
function SetPlatform(platform) {
    Object.defineProperty(process, "platform", {
        value: platform
    });
}
//# sourceMappingURL=environment.test.js.map