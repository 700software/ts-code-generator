"use strict";
var assert = require("assert");
var general_1 = require("./../general");
var runBaseDefinitionTests_1 = require("./runBaseDefinitionTests");
var runNamedDefinitionTests_1 = require("./runNamedDefinitionTests");
var runReturnTypedDefinitionTests_1 = require("./runReturnTypedDefinitionTests");
var runParameteredDefinitionTests_1 = require("./runParameteredDefinitionTests");
var runThisTypedDefinitionTests_1 = require("./runThisTypedDefinitionTests");
var runOverloadSignaturedDefinitionTests_1 = require("./runOverloadSignaturedDefinitionTests");
var runDocumentationedDefinitionTests_1 = require("./runDocumentationedDefinitionTests");
function runBaseFunctionDefinitionTests(runParameterDefinitionTests, definition, structure) {
    runBaseDefinitionTests_1.runBaseDefinitionTests(definition, structure);
    runNamedDefinitionTests_1.runNamedDefinitionTests(definition, structure);
    runReturnTypedDefinitionTests_1.runReturnTypedDefinitionTests(definition, structure);
    runParameteredDefinitionTests_1.runParameteredDefinitionTests(runParameterDefinitionTests, definition, structure);
    general_1.runUserDefinedTypeGuardTests(definition.userDefinedTypeGuard, structure.userDefinedTypeGuard);
    runThisTypedDefinitionTests_1.runThisTypedDefinitionTests(definition, structure);
    runOverloadSignaturedDefinitionTests_1.runOverloadSignaturedDefinitionTests(definition, structure);
    runDocumentationedDefinitionTests_1.runDocumentationedDefinitionTests(definition, structure);
    it((structure.isGenerator ? "should" : "should not") + " be a generator function", function () {
        assert.equal(definition.isGenerator, structure.isGenerator || false);
    });
}
exports.runBaseFunctionDefinitionTests = runBaseFunctionDefinitionTests;

//# sourceMappingURL=runBaseFunctionDefinitionTests.js.map
