"use strict";
var base_1 = require("./base");
var base_2 = require("./../base");
var runClassMethodParameterDefinitionTests_1 = require("./runClassMethodParameterDefinitionTests");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassMethodDefinitionTests(definition, structure) {
    describe("method " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_2.runAbstractableDefinitionTests(definition, structure);
            base_1.runBaseClassMethodDefinitionTests(runClassMethodParameterDefinitionTests_1.runClassMethodParameterDefinitionTests, definition, structure);
        });
    });
}
exports.runClassMethodDefinitionTests = runClassMethodDefinitionTests;

//# sourceMappingURL=runClassMethodDefinitionTests.js.map
