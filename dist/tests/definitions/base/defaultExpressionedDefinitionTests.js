"use strict";
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("DefaultExpressionedDefinition", function () {
    describe("setDefaultExpression", function () {
        var v = new definitions_1.VariableDefinition();
        v.setDefaultExpression("5");
        testHelpers_1.runDefaultExpressionedDefinitionTests(v, { defaultExpression: { text: "5" } });
    });
});

//# sourceMappingURL=defaultExpressionedDefinitionTests.js.map
