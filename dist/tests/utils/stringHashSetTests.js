"use strict";
var utils_1 = require("./../../utils");
var assert = require("assert");
describe("StringHashSet", function () {
    it("should not have something that wasn't added", function () {
        var hashSet = new utils_1.StringHashSet();
        hashSet.add("myKey");
        assert.equal(hashSet.contains("myOtherKey"), false);
    });
    it("should have something that was added", function () {
        var hashSet = new utils_1.StringHashSet();
        hashSet.add("myOtherKey");
        hashSet.add("myKey");
        assert.equal(hashSet.contains("myOtherKey"), true);
    });
});

//# sourceMappingURL=stringHashSetTests.js.map
