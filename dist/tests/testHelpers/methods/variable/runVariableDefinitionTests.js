"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../../definitions");
var base_1 = require("./../base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runVariableDefinitionTests(definition, structure) {
    describe("variable " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            if (structure.type == null) {
                structure.type = { text: "any" };
            }
            structure.declarationType = structure.declarationType || definitions_1.VariableDeclarationType.Let;
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runNamedDefinitionTests(definition, structure);
            base_1.runExportableDefinitionTests(definition, structure);
            base_1.runTypedDefinitionTests(definition, structure);
            base_1.runAmbientableDefinitionTests(definition, structure);
            base_1.runDefaultExpressionedDefinitionTests(definition, structure);
            base_1.runOrderableDefinitionTests(definition, structure);
            base_1.runDocumentationedDefinitionTests(definition, structure);
            it("should have declaration type " + structure.declarationType, function () {
                assert.equal(definition.declarationType, structure.declarationType);
            });
        });
    });
}
exports.runVariableDefinitionTests = runVariableDefinitionTests;

//# sourceMappingURL=runVariableDefinitionTests.js.map
