"use strict";
var expression_1 = require("./../expression");
function runDefaultExpressionedDefinitionTests(definition, structure) {
    describe("defaultExpression", function () {
        expression_1.runExpressionDefinitionTests(definition.defaultExpression, structure.defaultExpression);
    });
}
exports.runDefaultExpressionedDefinitionTests = runDefaultExpressionedDefinitionTests;

//# sourceMappingURL=runDefaultExpressionedDefinitionTests.js.map
