"use strict";
var expression_1 = require("./../expression");
function runReturnTypedDefinitionTests(definition, structure) {
    describe("return type", function () {
        structure.returnType = structure.returnType || { text: "void" };
        expression_1.runTypeDefinitionTests(definition.returnType, structure.returnType);
    });
}
exports.runReturnTypedDefinitionTests = runReturnTypedDefinitionTests;

//# sourceMappingURL=runReturnTypedDefinitionTests.js.map
