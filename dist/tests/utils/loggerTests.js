"use strict";
var assert = require("assert");
var utils_1 = require("./../../utils");
describe("logger", function () {
    var logedMsg;
    var warnedMsg;
    var erroredMsg;
    var wasEnabled = utils_1.Logger.getIsEnabled();
    before(function () {
        utils_1.Logger.setLogFunction(function (msg) { return logedMsg = msg; });
        utils_1.Logger.setWarnFunction(function (msg) { return warnedMsg = msg; });
        utils_1.Logger.setErrorFunction(function (msg) { return erroredMsg = msg; });
    });
    after(function () {
        // reset
        utils_1.Logger.setEnabled(wasEnabled);
        utils_1.Logger.setLogFunction(console.log);
        utils_1.Logger.setWarnFunction(console.warn);
        utils_1.Logger.setErrorFunction(console.error);
    });
    beforeEach(function () {
        logedMsg = null;
        warnedMsg = null;
        erroredMsg = null;
    });
    describe("logging", function () {
        beforeEach(function () {
            utils_1.Logger.enable();
        });
        describe("log", function () {
            it("should log what was passed in", function () {
                utils_1.Logger.log("message");
                assert.equal(logedMsg, "[ts-type-info]: message");
            });
            it("should not warn", function () {
                utils_1.Logger.log("message");
                assert.equal(warnedMsg, null);
            });
            it("should not error", function () {
                utils_1.Logger.log("message");
                assert.equal(erroredMsg, null);
            });
        });
        describe("warn", function () {
            it("should not log", function () {
                utils_1.Logger.warn("message");
                assert.equal(logedMsg, null);
            });
            it("should warn what was passed in", function () {
                utils_1.Logger.warn("message");
                assert.equal(warnedMsg, "[ts-type-info]: message");
            });
            it("should not error", function () {
                utils_1.Logger.log("message");
                assert.equal(erroredMsg, null);
            });
        });
        describe("error", function () {
            it("should not log", function () {
                utils_1.Logger.error("message");
                assert.equal(logedMsg, null);
            });
            it("should not warn", function () {
                utils_1.Logger.log("message");
                assert.equal(warnedMsg, null);
            });
            it("should error what was passed in", function () {
                utils_1.Logger.error("message");
                assert.equal(erroredMsg, "[ts-type-info]: message");
            });
        });
    });
    describe("disabled logging", function () {
        beforeEach(function () {
            utils_1.Logger.disable();
        });
        describe("log warn error", function () {
            it("should not log", function () {
                utils_1.Logger.log("message");
                utils_1.Logger.warn("message");
                utils_1.Logger.error("message");
                assert.equal(logedMsg, null);
            });
            it("should not warn", function () {
                utils_1.Logger.log("message");
                utils_1.Logger.warn("message");
                utils_1.Logger.error("message");
                assert.equal(warnedMsg, null);
            });
            it("should not error", function () {
                utils_1.Logger.log("message");
                utils_1.Logger.warn("message");
                utils_1.Logger.error("message");
                assert.equal(erroredMsg, null);
            });
        });
    });
});

//# sourceMappingURL=loggerTests.js.map
