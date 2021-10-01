"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("BaseParameterDefinition", function () {
    describe("#getDestructuringProperty()", function () {
        var param = new definitions_1.FunctionParameterDefinition();
        param.addDestructuringProperty({
            name: "prop1",
            type: "number"
        });
        param.addDestructuringProperty({
            name: "prop2",
            type: "string"
        });
        it("should match the right definition by name", function () {
            assert.equal(param.getDestructuringProperty("prop2"), param.destructuringProperties[1]);
        });
        it("should match the right definition by function", function () {
            assert.equal(param.getDestructuringProperty(function (p) { return p.type.text === "string"; }), param.destructuringProperties[1]);
        });
    });
    describe("#addDestructuringProperty()", function () {
        var param = new definitions_1.FunctionParameterDefinition();
        var returnedDef = param.addDestructuringProperty({
            defaultExpression: "5",
            isOptional: true,
            name: "prop1",
            type: "number",
            onAfterWrite: function (writer) { return writer.write(""); },
            onBeforeWrite: function (writer) { return writer.write(""); }
        });
        param.addDestructuringProperty({
            name: "prop2",
            type: "string"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, param.destructuringProperties[0]);
        });
        testHelpers_1.runObjectPropertyDefinitionTests(param.destructuringProperties[0], {
            defaultExpression: { text: "5" },
            isOptional: true,
            name: "prop1",
            type: { text: "number" },
            hasOnAfterWrite: true,
            hasOnBeforeWrite: true
        });
        testHelpers_1.runObjectPropertyDefinitionTests(param.destructuringProperties[1], {
            name: "prop2",
            type: { text: "string" }
        });
    });
});

//# sourceMappingURL=baseParameterDefinitionTests.js.map
