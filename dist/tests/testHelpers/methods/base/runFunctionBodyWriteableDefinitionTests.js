"use strict";
var assert = require("assert");
function runFunctionBodyWriteableDefinitionTests(definition, structure) {
    it("should " + (structure.hasOnWriteFunctionBody ? "have" : "not have") + " an onWriteFunctionBody method", function () {
        assert.equal(typeof definition.onWriteFunctionBody === "function", structure.hasOnWriteFunctionBody || false);
    });
}
exports.runFunctionBodyWriteableDefinitionTests = runFunctionBodyWriteableDefinitionTests;

//# sourceMappingURL=runFunctionBodyWriteableDefinitionTests.js.map
