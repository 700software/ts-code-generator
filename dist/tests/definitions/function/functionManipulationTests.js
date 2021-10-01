"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("FunctionDefinition", function () {
    describe("#addParameter()", function () {
        var c = new definitions_1.FunctionDefinition();
        var returnedDef = c.addParameter({
            name: "myParameter",
            type: "string[]",
            defaultExpression: "[\"test\"]",
            isOptional: true,
            isRestParameter: true
        });
        c.addParameter({
            name: "mySecondParameter"
        });
        c.addParameter({
            destructuringProperties: [{
                    name: "param1",
                    type: "string",
                    defaultExpression: "\"\"",
                    isOptional: true
                }, {
                    name: "param2"
                }]
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, c.parameters[0]);
        });
        testHelpers_1.runFunctionParameterDefinitionTests(c.parameters[0], {
            name: "myParameter",
            type: { text: "string[]", isArrayType: true, arrayElementType: { text: "string" } },
            defaultExpression: { text: "[\"test\"]" },
            isOptional: true,
            isRestParameter: true
        });
        testHelpers_1.runFunctionParameterDefinitionTests(c.parameters[1], {
            name: "mySecondParameter"
        });
        testHelpers_1.runFunctionParameterDefinitionTests(c.parameters[2], {
            name: null,
            destructuringProperties: [{
                    name: "param1",
                    type: { text: "string" },
                    defaultExpression: { text: "\"\"" },
                    isOptional: true
                }, {
                    name: "param2"
                }]
        });
    });
});

//# sourceMappingURL=functionManipulationTests.js.map
