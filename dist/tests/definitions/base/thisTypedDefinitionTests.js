"use strict";
var definitions_1 = require("./../../../definitions");
var createFunctions_1 = require("./../../../createFunctions");
var testHelpers_1 = require("./../../testHelpers");
describe("ThisTypedDefinition", function () {
    describe("setThisType()", function () {
        describe("as null", function () {
            var f = new definitions_1.FunctionDefinition();
            f.setThisType(null);
            testHelpers_1.runThisTypedDefinitionTests(f, { thisType: { text: "any" } });
        });
        describe("as object with null name", function () {
            var f = new definitions_1.FunctionDefinition();
            f.setThisType({ name: null });
            testHelpers_1.runThisTypedDefinitionTests(f, { thisType: { text: "any" } });
        });
        describe("with text", function () {
            var f = new definitions_1.FunctionDefinition();
            f.setThisType("string");
            testHelpers_1.runThisTypedDefinitionTests(f, { thisType: { text: "string" } });
        });
        describe("with definition", function () {
            var f = new definitions_1.FunctionDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            f.setThisType(c);
            testHelpers_1.runThisTypedDefinitionTests(f, { thisType: { text: "MyClass" } });
        });
        describe("with definition and one type argument", function () {
            var f = new definitions_1.FunctionDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            f.setThisType(c, ["string"]);
            testHelpers_1.runThisTypedDefinitionTests(f, { thisType: { text: "MyClass<string>" } });
        });
        describe("with definition and multiple type arguments", function () {
            var f = new definitions_1.FunctionDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            f.setThisType(c, ["string", "number"]);
            testHelpers_1.runThisTypedDefinitionTests(f, { thisType: { text: "MyClass<string, number>" } });
        });
    });
});

//# sourceMappingURL=thisTypedDefinitionTests.js.map
