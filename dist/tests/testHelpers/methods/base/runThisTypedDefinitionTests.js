"use strict";
var assert = require("assert");
var expression_1 = require("./../expression");
function runThisTypedDefinitionTests(definition, structure) {
    describe("thisType", function () {
        if (structure.thisType == null) {
            it("should be null", function () {
                assert.equal(definition.thisType, null);
            });
        }
        else {
            expression_1.runTypeDefinitionTests(definition.thisType, structure.thisType);
        }
    });
}
exports.runThisTypedDefinitionTests = runThisTypedDefinitionTests;

//# sourceMappingURL=runThisTypedDefinitionTests.js.map
