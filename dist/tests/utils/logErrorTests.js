"use strict";
var assert = require("assert");
var utils_1 = require("./../../utils");
describe("logError", function () {
    var wasLoggerEnabled = utils_1.Logger.getIsEnabled();
    var message;
    var logFunc = function (loggedMessage) { return message = loggedMessage; };
    before(function () {
        utils_1.Logger.setWarnFunction(logFunc);
        utils_1.Logger.enable();
    });
    after(function () {
        utils_1.Logger.setLogFunction(logFunc);
        utils_1.Logger.setEnabled(wasLoggerEnabled);
    });
    it("should log the name", function () {
        utils_1.logError("MySymbolName", { message: "Message", stack: "Stack" });
        assert.equal(message, getMessage("Failed getting info from \"MySymbolName\".\n\nDetail: Message\n\nStack: Stack"));
    });
    it("should log that the name was null", function () {
        utils_1.logError(null, { message: "Message", stack: "Stack" });
        assert.equal(message, getMessage("Unknown error. Object was null.\n\nDetail: Message\n\nStack: Stack"));
    });
});
function getMessage(msg) {
    return "[ts-type-info]: \n" + getLine() + msg + "\n" + getLine() + "\n";
}
function getLine() {
    return "-----------------------------------------\n";
}

//# sourceMappingURL=logErrorTests.js.map
