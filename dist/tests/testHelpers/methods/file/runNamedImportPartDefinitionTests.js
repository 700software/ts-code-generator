"use strict";
var assert = require("assert");
var ensureNotNull_1 = require("./../../ensureNotNull");
var expression_1 = require("./../expression");
var base_1 = require("./../base");
function runNamedImportPartDefinitionTests(definition, structure) {
    if (structure == null) {
        it("should be null", function () {
            assert.equal(definition, null);
        });
    }
    else {
        ensureNotNull_1.ensureNotNull(definition, function () {
            structure.definitions = structure.definitions || [];
            it("should have name " + structure.name, function () {
                assert.equal(definition.name, structure.name);
            });
            it("should have alias " + structure.alias, function () {
                assert.equal(definition.alias, structure.alias);
            });
            base_1.runBaseDefinitionTests(definition, structure);
            describe("definitions", function () {
                it("should have the expected number of definitions", function () {
                    assert.equal(definition.definitions.length, structure.definitions.length);
                });
                structure.definitions.forEach(function (structureDefinition, j) {
                    var definitionDefinition = definition.definitions[j];
                    ensureNotNull_1.ensureNotNull(definitionDefinition, function () {
                        it("should have the name " + structureDefinition.name, function () {
                            assert.equal(definitionDefinition.name, structureDefinition.name);
                        });
                        if (structureDefinition.type != null) {
                            it("should have a matching type", function () {
                                assert.equal(definitionDefinition instanceof structureDefinition.type, true);
                            });
                        }
                    });
                });
            });
            describe("expression", function () {
                expression_1.runExpressionDefinitionTests(definition.expression, structure.expression);
            });
        });
    }
}
exports.runNamedImportPartDefinitionTests = runNamedImportPartDefinitionTests;

//# sourceMappingURL=runNamedImportPartDefinitionTests.js.map
