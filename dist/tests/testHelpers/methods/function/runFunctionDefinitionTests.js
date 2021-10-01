"use strict";
var base_1 = require("./../base");
var ensureNotNull_1 = require("./../../ensureNotNull");
var runFunctionParameterDefinitionTests_1 = require("./runFunctionParameterDefinitionTests");
function runFunctionDefinitionTests(definition, structure) {
    describe("function " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseFunctionDefinitionTests(runFunctionParameterDefinitionTests_1.runFunctionParameterDefinitionTests, definition, structure);
            base_1.runAmbientableDefinitionTests(definition, structure);
            base_1.runAsyncableDefinitionTests(definition, structure);
            base_1.runExportableDefinitionTests(definition, structure);
            base_1.runFunctionBodyWriteableDefinitionTests(definition, structure);
            base_1.runOrderableDefinitionTests(definition, structure);
        });
    });
}
exports.runFunctionDefinitionTests = runFunctionDefinitionTests;

//# sourceMappingURL=runFunctionDefinitionTests.js.map
