"use strict";
var assert = require("assert");
var general_1 = require("./../general");
function runDecoratableDefinitionTests(definition, structure) {
    describe("decorators", function () {
        structure.decorators = structure.decorators || [];
        it("should have " + structure.decorators.length + " parameters", function () {
            assert.equal(definition.decorators.length, structure.decorators.length);
        });
        structure.decorators.forEach(function (decoratorTestStructure, i) {
            general_1.runDecoratorDefinitionTests(definition.decorators[i], decoratorTestStructure);
        });
    });
}
exports.runDecoratableDefinitionTests = runDecoratableDefinitionTests;

//# sourceMappingURL=runDecoratableDefinitionTests.js.map
