"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../../../definitions");
function runScopedDefinitionTests(definition, structure) {
    structure.scope = structure.scope != null ? structure.scope : definitions_1.Scope.Public;
    it("should have a scope " + structure.scope, function () {
        assert.equal(definition.scope, structure.scope);
    });
}
exports.runScopedDefinitionTests = runScopedDefinitionTests;

//# sourceMappingURL=runScopedDefinitionTests.js.map
