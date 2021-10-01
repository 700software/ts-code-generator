"use strict";
var base_1 = require("./../base");
function runCallSignatureParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        base_1.runBaseParameterDefinitionTests(definition, structure);
    });
}
exports.runCallSignatureParameterDefinitionTests = runCallSignatureParameterDefinitionTests;

//# sourceMappingURL=runCallSignatureParameterDefinitionTests.js.map
