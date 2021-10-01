"use strict";
var expression_1 = require("./../expression");
function runTypedDefinitionTests(definition, structure) {
    expression_1.runTypeDefinitionTests(definition.type, structure.type || { text: "any" });
}
exports.runTypedDefinitionTests = runTypedDefinitionTests;

//# sourceMappingURL=runTypedDefinitionTests.js.map
