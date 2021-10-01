"use strict";
var assert = require("assert");
function runAsyncableDefinitionTests(definition, structure) {
    it("should " + (structure.isAsync ? "be" : "not be") + " async", function () {
        assert.equal(definition.isAsync, structure.isAsync || false);
    });
}
exports.runAsyncableDefinitionTests = runAsyncableDefinitionTests;

//# sourceMappingURL=runAsyncableDefinitionTests.js.map
