"use strict";
var base_1 = require("./base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassMethodParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseClassMethodParameterDefinitionTests(definition, structure);
        });
    });
}
exports.runClassMethodParameterDefinitionTests = runClassMethodParameterDefinitionTests;

//# sourceMappingURL=runClassMethodParameterDefinitionTests.js.map
