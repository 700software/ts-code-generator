"use strict";
var assert = require("assert");
function runReadonlyableDefinitionTests(definition, structure) {
    it("should " + (structure.isReadonly ? "be" : "not be") + " readonly", function () {
        assert.equal(definition.isReadonly, structure.isReadonly || false);
    });
}
exports.runReadonlyableDefinitionTests = runReadonlyableDefinitionTests;

//# sourceMappingURL=runReadonlyableDefinitionTests.js.map
