"use strict";
var base_1 = require("./../base");
function runFunctionParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        base_1.runBaseParameterDefinitionTests(definition, structure);
    });
}
exports.runFunctionParameterDefinitionTests = runFunctionParameterDefinitionTests;

//# sourceMappingURL=runFunctionParameterDefinitionTests.js.map
