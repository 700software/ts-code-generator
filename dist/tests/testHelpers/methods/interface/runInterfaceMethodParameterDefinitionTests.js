"use strict";
var ensureNotNull_1 = require("./../../ensureNotNull");
var base_1 = require("./../base");
function runInterfaceMethodParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseParameterDefinitionTests(definition, structure);
        });
    });
}
exports.runInterfaceMethodParameterDefinitionTests = runInterfaceMethodParameterDefinitionTests;

//# sourceMappingURL=runInterfaceMethodParameterDefinitionTests.js.map
