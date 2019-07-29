"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const settings = require("../src/SettingsFileLocator");
const environmentType_1 = require("../src/environmentType");
suite("settingsLocator", () => {
    var originalHome;
    var originalAppData;
    suiteSetup(() => {
        originalHome = process.env.HOME;
        originalAppData = process.env.APPDATA;
    });
    suiteTeardown(() => {
        SetHome(originalHome);
        SetAppData(originalAppData);
    });
    test("if mac then is mac path", () => {
        var settingslocator = new settings.SettingsFile(() => {
            return environmentType_1.EnvironmentType.Mac;
        });
        SetHome("/Users/user");
        assert.equal(settingslocator.GetPath(), "/Users/user/Library/Application Support/Code/Usersettings.json");
    });
    test("if windows then is windows path", () => {
        var settingslocator = new settings.SettingsFile(() => {
            return environmentType_1.EnvironmentType.Windows;
        });
        //windows uses the appdata settings not the home
        SetAppData("C:\\Users\\User\\AppData\\Roaming");
        SetHome("");
        assert.equal(settingslocator.GetPath(), "C:\\Users\\User\\AppData\\Roaming\\Code\\User\\settings.json");
    });
    test("if linux then is linux path", () => {
        var settingslocator = new settings.SettingsFile(() => {
            return environmentType_1.EnvironmentType.Linux;
        });
        SetHome("/var/local");
        assert.equal(settingslocator.GetPath(), "/var/local/.config/Code/User/settings.json");
    });
});
function SetHome(home) {
    Object.defineProperty(process.env, "HOME", {
        value: home
    });
}
function SetAppData(location) {
    Object.defineProperty(process.env, "APPDATA", {
        value: location
    });
}
//# sourceMappingURL=extension.test.js.map