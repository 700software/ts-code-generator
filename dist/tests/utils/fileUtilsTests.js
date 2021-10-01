"use strict";
var assert = require("assert");
var utils_1 = require("./../../utils");
describe("FileUtils", function () {
    describe("#filePathMatches()", function () {
        it("should return false for a null path", function () {
            assert.equal(utils_1.FileUtils.filePathMatches(null, "test.ts"), false);
        });
        it("should return false for an empty path", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("", "test.ts"), false);
        });
        it("should return true when both are null", function () {
            assert.equal(utils_1.FileUtils.filePathMatches(null, null), true);
        });
        it("should return true when both are empty", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("", ""), true);
        });
        it("should return false for empty search", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/tests.ts", ""), false);
        });
        it("should return false for null search", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/tests.ts", null), false);
        });
        it("should return true for a file name only", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/test.ts", "test.ts"), true);
        });
        it("should return true for a file name and dir", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/test.ts", "dir/test.ts"), true);
        });
        it("should return true for a file name and dir with a slash at the front", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/test.ts", "/dir/test.ts"), true);
        });
        it("should return true for a full match", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/test.ts", "V:/dir/test.ts"), true);
        });
        it("should not error when the file path being searched for is longer", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/test.ts", "V:/dir/dir/test.ts"), false);
        });
        it("should return false when the directory name doesn't exactly match", function () {
            assert.equal(utils_1.FileUtils.filePathMatches("V:/dir/test.ts", "ir/test.ts"), false);
        });
    });
});

//# sourceMappingURL=fileUtilsTests.js.map
