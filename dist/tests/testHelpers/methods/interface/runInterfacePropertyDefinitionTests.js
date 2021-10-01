"use strict";
var base_1 = require("./../base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runInterfacePropertyDefinitionTests(definition, structure) {
    describe("property " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBasePropertyDefinitionTests(definition, structure);
            base_1.runDocumentationedDefinitionTests(definition, structure);
        });
    });
}
exports.runInterfacePropertyDefinitionTests = runInterfacePropertyDefinitionTests;

//# sourceMappingURL=runInterfacePropertyDefinitionTests.js.map
