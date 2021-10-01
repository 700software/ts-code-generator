"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var base_2 = require("./base");
var runClassConstructorParameterDefinitionTests_1 = require("./runClassConstructorParameterDefinitionTests");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassConstructorDefinitionTests(definition, structure) {
    if (structure == null) {
        it("should not have a constructor", function () {
            assert.equal(definition, null);
        });
    }
    else {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runParameteredDefinitionTests(runClassConstructorParameterDefinitionTests_1.runClassConstructorParameterDefinitionTests, definition, structure);
            base_1.runFunctionBodyWriteableDefinitionTests(definition, structure);
            base_2.runScopedDefinitionTests(definition, structure);
            base_1.runOverloadSignaturedDefinitionTests(definition, structure);
            base_1.runDocumentationedDefinitionTests(definition, structure);
        });
    }
}
exports.runClassConstructorDefinitionTests = runClassConstructorDefinitionTests;

//# sourceMappingURL=runClassConstructorDefinitionTests.js.map
