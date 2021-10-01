"use strict";
var base_1 = require("./../../base");
var runScopedDefinitionTests_1 = require("./runScopedDefinitionTests");
function runBaseClassMethodDefinitionTests(runParameterDefinitionTests, definition, structure) {
    base_1.runBaseFunctionDefinitionTests(runParameterDefinitionTests, definition, structure);
    base_1.runAsyncableDefinitionTests(definition, structure);
    runScopedDefinitionTests_1.runScopedDefinitionTests(definition, structure);
    base_1.runFunctionBodyWriteableDefinitionTests(definition, structure);
}
exports.runBaseClassMethodDefinitionTests = runBaseClassMethodDefinitionTests;

//# sourceMappingURL=runBaseClassMethodDefinitionTests.js.map
