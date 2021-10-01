"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var expression_1 = require("./../expression");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runTypeParameterDefinitionTests(definition, structure) {
    describe("type parameter " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runNamedDefinitionTests(definition, structure);
            describe("constraint", function () {
                if (structure.constraintType == null) {
                    it("should not have a constraintType", function () {
                        assert.equal(definition.constraintType, null);
                    });
                }
                else {
                    expression_1.runTypeDefinitionTests(definition.constraintType, structure.constraintType);
                }
            });
        });
    });
}
exports.runTypeParameterDefinitionTests = runTypeParameterDefinitionTests;

//# sourceMappingURL=runTypeParameterDefinitionTests.js.map
