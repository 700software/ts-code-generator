"use strict";
var base_1 = require("./../../base");
var runScopedDefinitionTests_1 = require("./runScopedDefinitionTests");
function runBaseClassPropertyDefinitionTests(definition, structure) {
    base_1.runBaseObjectPropertyDefinitionTests(definition, structure);
    runScopedDefinitionTests_1.runScopedDefinitionTests(definition, structure);
    base_1.runDocumentationedDefinitionTests(definition, structure);
}
exports.runBaseClassPropertyDefinitionTests = runBaseClassPropertyDefinitionTests;

//# sourceMappingURL=runBaseClassPropertyDefinitionTests.js.map
