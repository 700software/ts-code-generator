"use strict";
var assert = require("assert");
function runBaseDefinitionTests(definition, structure) {
    it("should " + (structure.hasOnBeforeWrite ? "have" : "not have") + " an onBeforeWrite method", function () {
        assert.equal(typeof definition.onBeforeWrite === "function", structure.hasOnBeforeWrite || false);
    });
    it("should " + (structure.hasOnAfterWrite ? "have" : "not have") + " an onAfterWrite method", function () {
        assert.equal(typeof definition.onAfterWrite === "function", structure.hasOnAfterWrite || false);
    });
}
exports.runBaseDefinitionTests = runBaseDefinitionTests;

//# sourceMappingURL=runBaseDefinitionTests.js.map
