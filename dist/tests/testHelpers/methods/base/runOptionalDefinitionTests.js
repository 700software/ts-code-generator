"use strict";
var assert = require("assert");
function runOptionalDefinitionTests(definition, structure) {
    it("should be " + (structure.isOptional ? "optional" : "not optional"), function () {
        assert.equal(definition.isOptional, structure.isOptional || false);
    });
}
exports.runOptionalDefinitionTests = runOptionalDefinitionTests;

//# sourceMappingURL=runOptionalDefinitionTests.js.map
