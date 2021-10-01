"use strict";
var assert = require("assert");
function runAbstractableDefinitionTests(definition, structure) {
    it("should " + (structure.isAbstract ? "be" : "not be") + " abstract", function () {
        assert.equal(definition.isAbstract, structure.isAbstract || false);
    });
}
exports.runAbstractableDefinitionTests = runAbstractableDefinitionTests;

//# sourceMappingURL=runAbstractableDefinitionTests.js.map
