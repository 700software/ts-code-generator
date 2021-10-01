"use strict";
var base_1 = require("./base");
var runClassStaticMethodParameterDefinitionTests_1 = require("./runClassStaticMethodParameterDefinitionTests");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassStaticMethodDefinitionTests(definition, structure) {
    describe("static method " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseClassMethodDefinitionTests(runClassStaticMethodParameterDefinitionTests_1.runClassStaticMethodParameterDefinitionTests, definition, structure);
        });
    });
}
exports.runClassStaticMethodDefinitionTests = runClassStaticMethodDefinitionTests;

//# sourceMappingURL=runClassStaticMethodDefinitionTests.js.map
