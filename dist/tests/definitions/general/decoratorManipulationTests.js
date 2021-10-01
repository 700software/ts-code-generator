"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("DecoratorDefinition", function () {
    describe("#addArgument()", function () {
        var d = new definitions_1.DecoratorDefinition();
        var returnedDef = d.addArgument("\"test\"");
        d.addArgument("12");
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, d.arguments[0]);
        });
        testHelpers_1.runExpressionDefinitionTests(d.arguments[0], {
            text: "\"test\""
        });
        testHelpers_1.runExpressionDefinitionTests(d.arguments[1], {
            text: "12"
        });
    });
});

//# sourceMappingURL=decoratorManipulationTests.js.map
