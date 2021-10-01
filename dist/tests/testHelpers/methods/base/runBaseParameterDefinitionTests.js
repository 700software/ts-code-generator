"use strict";
var assert = require("assert");
var runObjectPropertyDefinitionTests_1 = require("./../general/runObjectPropertyDefinitionTests");
var runBaseDefinitionTests_1 = require("./runBaseDefinitionTests");
var runNamedDefinitionTests_1 = require("./runNamedDefinitionTests");
var runOptionalDefinitionTests_1 = require("./runOptionalDefinitionTests");
var runTypedDefinitionTests_1 = require("./runTypedDefinitionTests");
var runDefaultExpressionedDefinitionTests_1 = require("./runDefaultExpressionedDefinitionTests");
function runBaseParameterDefinitionTests(definition, structure) {
    runBaseDefinitionTests_1.runBaseDefinitionTests(definition, structure);
    runNamedDefinitionTests_1.runNamedDefinitionTests(definition, structure);
    runOptionalDefinitionTests_1.runOptionalDefinitionTests(definition, structure);
    runTypedDefinitionTests_1.runTypedDefinitionTests(definition, structure);
    runDefaultExpressionedDefinitionTests_1.runDefaultExpressionedDefinitionTests(definition, structure);
    it("should " + (structure.isRestParameter ? "be" : "not be") + " a rest parameter", function () {
        assert.equal(definition.isRestParameter, typeof structure.isRestParameter === "boolean" ? structure.isRestParameter : false);
    });
    it("should have the same number of destructuringProperties", function () {
        assert.equal(definition.destructuringProperties.length, (structure.destructuringProperties || []).length);
    });
    (structure.destructuringProperties || []).forEach(function (p, i) {
        runObjectPropertyDefinitionTests_1.runObjectPropertyDefinitionTests(definition.destructuringProperties[i], p);
    });
}
exports.runBaseParameterDefinitionTests = runBaseParameterDefinitionTests;

//# sourceMappingURL=runBaseParameterDefinitionTests.js.map
