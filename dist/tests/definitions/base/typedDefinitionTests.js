"use strict";
var definitions_1 = require("./../../../definitions");
var createFunctions_1 = require("./../../../createFunctions");
var testHelpers_1 = require("./../../testHelpers");
describe("TypedDefinition", function () {
    describe("#setType()", function () {
        describe("as null", function () {
            var v = new definitions_1.VariableDefinition();
            v.setType(null);
            testHelpers_1.runTypedDefinitionTests(v, { type: { text: "any" } });
        });
        describe("as object with null name", function () {
            var v = new definitions_1.VariableDefinition();
            v.setType({ name: null });
            testHelpers_1.runTypedDefinitionTests(v, { type: { text: "any" } });
        });
        describe("with text", function () {
            var v = new definitions_1.VariableDefinition();
            v.setType("string");
            testHelpers_1.runTypedDefinitionTests(v, { type: { text: "string" } });
        });
        describe("with definition", function () {
            var v = new definitions_1.VariableDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            v.setType(c);
            testHelpers_1.runTypedDefinitionTests(v, { type: { text: "MyClass" } });
        });
        describe("with definition and one type argument", function () {
            var v = new definitions_1.VariableDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            v.setType(c, ["string"]);
            testHelpers_1.runTypedDefinitionTests(v, { type: { text: "MyClass<string>" } });
        });
        describe("with definition and multiple type arguments", function () {
            var v = new definitions_1.VariableDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            v.setType(c, ["string", "number"]);
            testHelpers_1.runTypedDefinitionTests(v, { type: { text: "MyClass<string, number>" } });
        });
    });
});

//# sourceMappingURL=typedDefinitionTests.js.map
