"use strict";
var base_1 = require("./base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassStaticPropertyDefinitionTests(definition, structure) {
    describe("property " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseClassPropertyDefinitionTests(definition, structure);
        });
    });
}
exports.runClassStaticPropertyDefinitionTests = runClassStaticPropertyDefinitionTests;

//# sourceMappingURL=runClassStaticPropertyDefinitionTests.js.map
