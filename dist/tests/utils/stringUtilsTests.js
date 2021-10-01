"use strict";
var utils_1 = require("./../../utils");
var assert = require("assert");
describe("StringUtils", function () {
    describe("#ensureEndsWithNewline()", function () {
        it("should add a newline for an empty string", function () {
            assert.equal(utils_1.StringUtils.ensureEndsWithNewline(""), "\n");
        });
        it("should add a newline for a non-empty string", function () {
            assert.equal(utils_1.StringUtils.ensureEndsWithNewline("text"), "text\n");
        });
        it("should not add a newline for a string that ends in a newline", function () {
            assert.equal(utils_1.StringUtils.ensureEndsWithNewline("text\n"), "text\n");
        });
    });
});

//# sourceMappingURL=stringUtilsTests.js.map
