"use strict";
var assert = require("assert");
function runParameteredDefinitionTests(runParameterDefinitionTests, definition, structure) {
    describe("parameters", function () {
        structure.parameters = structure.parameters || [];
        it("should have " + structure.parameters.length + " parameter(s)", function () {
            assert.equal(definition.parameters.length, structure.parameters.length);
        });
        // todo: why do I need to do this madness?
        var parameters = structure.parameters;
        parameters.forEach(function (param, i) {
            runParameterDefinitionTests(definition.parameters[i], param);
        });
    });
}
exports.runParameteredDefinitionTests = runParameteredDefinitionTests;

//# sourceMappingURL=runParameteredDefinitionTests.js.map
