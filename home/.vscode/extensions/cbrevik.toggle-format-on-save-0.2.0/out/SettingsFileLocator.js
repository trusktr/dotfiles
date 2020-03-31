"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./environment");
class SettingsFile {
    GetPath() {
        switch (environment_1.getEnvironment()) {
            case environment_1.EnvironmentType.Linux:
                return process.env.HOME + "/.config/Code/User/settings.json";
            case environment_1.EnvironmentType.Mac:
                return (process.env.HOME +
                    "/Library/Application Support/Code/User/settings.json");
            case environment_1.EnvironmentType.Windows:
                return process.env.APPDATA + "\\Code\\User\\settings.json";
        }
    }
    SetValue(settingName, jsonString) {
        // there is a comment in the settings.json file.  remove it.
        var usersettings = JSON.parse(jsonString.replace(/\/\/.*/, ""));
        if (settingName in usersettings) {
            usersettings[settingName] = !!usersettings[settingName];
        }
        else {
            usersettings[settingName] = true;
        }
        return JSON.stringify(usersettings, null, 4);
    }
}
exports.SettingsFile = SettingsFile;
//# sourceMappingURL=SettingsFileLocator.js.map