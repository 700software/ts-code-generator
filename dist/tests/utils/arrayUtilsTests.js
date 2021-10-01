"use strict";
var chai_1 = require("chai");
var utils_1 = require("./../../utils");
describe("ArrayUtils", function () {
    describe("#" + "isNullOrEmpty" + "()", function () {
        it("should return true when null", function () {
            chai_1.expect(utils_1.ArrayUtils.isNullOrEmpty(null)).to.equal(true);
        });
        it("should return true when undefined", function () {
            chai_1.expect(utils_1.ArrayUtils.isNullOrEmpty(undefined)).to.equal(true);
        });
        it("should return true when empty", function () {
            chai_1.expect(utils_1.ArrayUtils.isNullOrEmpty([])).to.equal(true);
        });
        it("should return false when not empty", function () {
            chai_1.expect(utils_1.ArrayUtils.isNullOrEmpty([1])).to.equal(false);
        });
    });
    describe("#" + "firstOrDefault" + "()", function () {
        it("should return null when the array is empty", function () {
            chai_1.expect(utils_1.ArrayUtils.firstOrDefault([], function (item) { return item === 0; })).to.equal(null);
        });
        it("should return null when the item can't be found", function () {
            chai_1.expect(utils_1.ArrayUtils.firstOrDefault([1, 2, 3], function (item) { return item === 0; })).to.equal(null);
        });
        it("should return the item when it can be found", function () {
            chai_1.expect(utils_1.ArrayUtils.firstOrDefault([1, 2, 3], function (item) { return item === 3; })).to.equal(3);
        });
    });
    describe("#" + "getUniqueItems" + "()", function () {
        it("should return all the unique items in the array", function () {
            chai_1.expect(utils_1.ArrayUtils.getUniqueItems([1, 2, 3, 3, 2, 1])).to.eql([1, 2, 3]);
        });
    });
});

//# sourceMappingURL=arrayUtilsTests.js.map
