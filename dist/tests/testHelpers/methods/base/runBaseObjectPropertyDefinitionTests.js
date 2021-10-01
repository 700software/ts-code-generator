"use strict";
var runBasePropertyDefinitionTests_1 = require("./runBasePropertyDefinitionTests");
var runDefaultExpressionedDefinitionTests_1 = require("./runDefaultExpressionedDefinitionTests");
function runBaseObjectPropertyDefinitionTests(definition, structure) {
    describe("property " + structure.name, function () {
        runBasePropertyDefinitionTests_1.runBasePropertyDefinitionTests(definition, structure);
        runDefaultExpressionedDefinitionTests_1.runDefaultExpressionedDefinitionTests(definition, structure);
    });
}
exports.runBaseObjectPropertyDefinitionTests = runBaseObjectPropertyDefinitionTests;

//# sourceMappingURL=runBaseObjectPropertyDefinitionTests.js.map
