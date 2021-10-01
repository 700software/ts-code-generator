"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../../definitions");
var base_1 = require("./../base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassConstructorParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            structure.scope = structure.scope || definitions_1.ClassConstructorParameterScope.None;
            base_1.runBaseParameterDefinitionTests(definition, structure);
            it("should have a scope of " + structure.scope, function () {
                assert.equal(definition.scope, structure.scope);
            });
        });
    });
}
exports.runClassConstructorParameterDefinitionTests = runClassConstructorParameterDefinitionTests;

//# sourceMappingURL=runClassConstructorParameterDefinitionTests.js.map
