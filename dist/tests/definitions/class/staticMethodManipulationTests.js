"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("ClassStaticMethod", function () {
    describe("#addParameter()", function () {
        var m = new definitions_1.ClassStaticMethodDefinition();
        var returnedDef = m.addParameter({
            name: "myParameter",
            type: "string[]",
            defaultExpression: "[\"test\"]",
            isOptional: true,
            isRestParameter: true,
            decorators: [{
                    name: "decorator"
                }]
        });
        m.addParameter({
            name: "mySecondParameter"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, m.parameters[0]);
        });
        testHelpers_1.runClassStaticMethodParameterDefinitionTests(m.parameters[0], {
            name: "myParameter",
            type: { text: "string[]", isArrayType: true, arrayElementType: { text: "string" } },
            defaultExpression: { text: "[\"test\"]" },
            isOptional: true,
            isRestParameter: true,
            decorators: [{
                    name: "decorator"
                }]
        });
        testHelpers_1.runClassStaticMethodParameterDefinitionTests(m.parameters[1], {
            name: "mySecondParameter"
        });
    });
});

//# sourceMappingURL=staticMethodManipulationTests.js.map
