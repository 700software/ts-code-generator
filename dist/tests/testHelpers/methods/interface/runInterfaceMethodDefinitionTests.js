"use strict";
var base_1 = require("./../base");
var runInterfaceMethodParameterDefinitionTests_1 = require("./runInterfaceMethodParameterDefinitionTests");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runInterfaceMethodDefinitionTests(definition, structure) {
    describe("method " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseFunctionDefinitionTests(runInterfaceMethodParameterDefinitionTests_1.runInterfaceMethodParameterDefinitionTests, definition, structure);
        });
    });
}
exports.runInterfaceMethodDefinitionTests = runInterfaceMethodDefinitionTests;

//# sourceMappingURL=runInterfaceMethodDefinitionTests.js.map
