"use strict";
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("ReturnTypedDefinition", function () {
    describe("setReturnTypedExpression", function () {
        var func = new definitions_1.FunctionDefinition();
        func.setReturnType("5");
        testHelpers_1.runTypeDefinitionTests(func.returnType, { text: "5" });
    });
});

//# sourceMappingURL=returnTypedDefinitionTests.js.map
