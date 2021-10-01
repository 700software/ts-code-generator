"use strict";
var base_1 = require("./base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassStaticMethodParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseClassMethodParameterDefinitionTests(definition, structure);
        });
    });
}
exports.runClassStaticMethodParameterDefinitionTests = runClassStaticMethodParameterDefinitionTests;

//# sourceMappingURL=runClassStaticMethodParameterDefinitionTests.js.map
