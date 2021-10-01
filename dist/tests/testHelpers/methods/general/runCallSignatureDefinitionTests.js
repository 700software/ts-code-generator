"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var runCallSignatureParameterDefinitionTests_1 = require("./runCallSignatureParameterDefinitionTests");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runCallSignatureDefinitionTests(definition, structure) {
    ensureNotNull_1.ensureNotNull(definition, function () {
        base_1.runBaseDefinitionTests(definition, structure);
        base_1.runTypeParameteredDefinitionTests(definition, structure);
        base_1.runParameteredDefinitionTests(runCallSignatureParameterDefinitionTests_1.runCallSignatureParameterDefinitionTests, definition, structure);
        base_1.runReturnTypedDefinitionTests(definition, structure);
        base_1.runDocumentationedDefinitionTests(definition, structure);
        it("should have the same minArgumentCount", function () {
            assert.equal(definition.getMinArgumentCount(), structure.minArgumentCount || 0);
        });
    });
}
exports.runCallSignatureDefinitionTests = runCallSignatureDefinitionTests;

//# sourceMappingURL=runCallSignatureDefinitionTests.js.map
