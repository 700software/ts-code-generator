"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var expression_1 = require("./../expression");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runDecoratorDefinitionTests(definition, structure) {
    describe("decorator " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            structure.arguments = structure.arguments || [];
            structure.isDecoratorFactory = structure.isDecoratorFactory || false;
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runNamedDefinitionTests(definition, structure);
            it("should have " + structure.arguments.length + " argument(s)", function () {
                assert.equal(definition.arguments.length, structure.arguments.length);
            });
            structure.arguments.forEach(function (argumentTestStructure, i) {
                describe("argument " + argumentTestStructure.text, function () {
                    expression_1.runExpressionDefinitionTests(definition.arguments[i], argumentTestStructure);
                });
            });
            it("should have the same " + "isDecoratorFactory" + " property", function () {
                assert.equal(definition.isDecoratorFactory, structure.isDecoratorFactory);
            });
        });
    });
}
exports.runDecoratorDefinitionTests = runDecoratorDefinitionTests;

//# sourceMappingURL=runDecoratorDefinitionTests.js.map
