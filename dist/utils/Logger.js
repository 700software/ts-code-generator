"use strict";
var Logger = (function () {
    /* istanbul ignore next */ function Logger() {
    }
    Logger.getIsEnabled = function () {
        return this.isEnabled;
    };
    Logger.enable = function () {
        this.setEnabled(true);
    };
    Logger.disable = function () {
        this.setEnabled(false);
    };
    Logger.setEnabled = function (isEnabled) {
        this.isEnabled = isEnabled;
    };
    Logger.setLogFunction = function (logFunction) {
        this.logFunction = logFunction;
    };
    Logger.setWarnFunction = function (warnFunction) {
        this.warnFunction = warnFunction;
    };
    Logger.setErrorFunction = function (errorFunction) {
        this.errorFunction = errorFunction;
    };
    Logger.log = function (message) {
        this.logWithFunction(message, this.logFunction);
    };
    Logger.warn = function (message) {
        this.logWithFunction(message, this.warnFunction);
    };
    Logger.error = function (message) {
        this.logWithFunction(message, this.errorFunction);
    };
    Logger.logWithFunction = function (message, func) {
        if (this.isEnabled)
            func("[ts-type-info]: " + message);
    };
    Logger.isEnabled = false;
    Logger.logFunction = console.log;
    Logger.warnFunction = console.warn;
    Logger.errorFunction = console.error;
    return Logger;
}());
exports.Logger = Logger;

//# sourceMappingURL=Logger.js.map
