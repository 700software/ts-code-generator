"use strict";
var base_1 = require("./../base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runTypeAliasDefinitionTests(definition, structure) {
    describe("type expression " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            structure.isAmbient = structure.isAmbient == null ? true : structure.isAmbient;
            if (structure.type == null) {
                structure.type = { text: "string" }; // default always to expect a string (for simplicity)
            }
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runNamedDefinitionTests(definition, structure);
            base_1.runExportableDefinitionTests(definition, structure);
            base_1.runTypedDefinitionTests(definition, structure);
            base_1.runAmbientableDefinitionTests(definition, structure);
            base_1.runTypeParameteredDefinitionTests(definition, structure);
            base_1.runOrderableDefinitionTests(definition, structure);
            base_1.runDocumentationedDefinitionTests(definition, structure);
        });
    });
}
exports.runTypeAliasDefinitionTests = runTypeAliasDefinitionTests;

//# sourceMappingURL=runTypeAliasDefinitionTests.js.map
