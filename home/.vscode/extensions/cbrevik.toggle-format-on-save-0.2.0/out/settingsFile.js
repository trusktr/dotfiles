"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./environment");
exports.getSettingsPath = () => {
    switch (environment_1.getEnvironment()) {
        case environment_1.EnvironmentType.Linux:
            return process.env.HOME + "/.config/Code/User/settings.json";
        case environment_1.EnvironmentType.Mac:
            return (process.env.HOME +
                "/Library/Application Support/Code/User/settings.json");
        case environment_1.EnvironmentType.Windows:
            return process.env.APPDATA + "\\Code\\User\\settings.json";
    }
};
exports.getSettings = (settingsJson) => {
    // there is a comment in the settings.json file.  remove it.
    return JSON.parse(settingsJson);
};
//# sourceMappingURL=settingsFile.js.map