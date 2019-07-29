"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environmentType_1 = require("./environmentType");
// https://code.visualstudio.com/docs/customization/userandworkspace
// http://stackoverflow.com/a/26227660/697126 - get user data
class SettingsFile {
    constructor(enviromentDectection) {
        this.CUSTOMSETTINGKEY = "softwrap.customsetting";
        this.environment = enviromentDectection();
    }
    GetPath() {
        switch (this.environment) {
            case environmentType_1.EnvironmentType.Linux:
                return process.env.HOME + "/.config/Code/User/settings.json";
            case environmentType_1.EnvironmentType.Mac:
                return (process.env.HOME +
                    "/Library/Application Support/Code/User/settings.json");
            case environmentType_1.EnvironmentType.Windows:
                return process.env.APPDATA + "\\Code\\User\\settings.json";
        }
    }
    SetValue(settingName, jsonString) {
        // there is a comment in the settings.json file.  remove it.
        var usersettings = JSON.parse(jsonString.replace(/\/\/.*/, ""));
        if (settingName in usersettings) {
            this.ChangeValue(usersettings, settingName);
        }
        else {
            // the default setting is 300 so if not already set then add it.
            usersettings[settingName] = 0;
        }
        return JSON.stringify(usersettings, null, 4);
    }
    ChangeValue(usersettings, settingName) {
        var wrappingcolumn = usersettings[settingName];
        if (wrappingcolumn > 0) {
            usersettings[this.CUSTOMSETTINGKEY] = usersettings[settingName];
            usersettings[settingName] = 0;
        }
        else {
            if (this.CUSTOMSETTINGKEY in usersettings) {
                usersettings[settingName] = usersettings[this.CUSTOMSETTINGKEY];
            }
            else {
                // back to default
                delete usersettings[settingName];
            }
            delete usersettings[this.CUSTOMSETTINGKEY];
        }
    }
}
exports.SettingsFile = SettingsFile;
//# sourceMappingURL=SettingsFileLocator.js.map