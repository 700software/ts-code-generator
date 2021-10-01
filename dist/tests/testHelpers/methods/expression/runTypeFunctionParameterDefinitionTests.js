"use strict";
var base_1 = require("./../base");
function runTypeFunctionParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        base_1.runBaseParameterDefinitionTests(definition, structure);
    });
}
exports.runTypeFunctionParameterDefinitionTests = runTypeFunctionParameterDefinitionTests;

//# sourceMappingURL=runTypeFunctionParameterDefinitionTests.js.map
