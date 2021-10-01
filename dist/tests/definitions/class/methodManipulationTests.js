"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("ClassMethod", function () {
    describe("#addParameter()", function () {
        var c = new definitions_1.ClassMethodDefinition();
        var returnedDef = c.addParameter({
            name: "myParameter",
            type: "string[]",
            defaultExpression: "[\"test\"]",
            isOptional: true,
            isRestParameter: true,
            decorators: [{
                    name: "decorator"
                }]
        });
        c.addParameter({
            name: "mySecondParameter"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, c.parameters[0]);
        });
        testHelpers_1.runClassMethodParameterDefinitionTests(c.parameters[0], {
            name: "myParameter",
            type: { text: "string[]", isArrayType: true, arrayElementType: { text: "string" } },
            defaultExpression: { text: "[\"test\"]" },
            isOptional: true,
            isRestParameter: true,
            decorators: [{
                    name: "decorator"
                }]
        });
        testHelpers_1.runClassMethodParameterDefinitionTests(c.parameters[1], {
            name: "mySecondParameter"
        });
    });
});

//# sourceMappingURL=methodManipulationTests.js.map
