"use strict";
var definitions_1 = require("./../../../definitions");
var createFunctions_1 = require("./../../../createFunctions");
var testHelpers_1 = require("./../../testHelpers");
describe("TypeParameterDefinition", function () {
    describe("#setConstraintType()", function () {
        describe("as null", function () {
            var v = new definitions_1.TypeParameterDefinition();
            v.name = "";
            v.setConstraintType(null);
            testHelpers_1.runTypeParameterDefinitionTests(v, { name: "", constraintType: { text: "any" } });
        });
        describe("as object with null name", function () {
            var v = new definitions_1.TypeParameterDefinition();
            v.name = "";
            v.setConstraintType({ name: null });
            testHelpers_1.runTypeParameterDefinitionTests(v, { name: "", constraintType: { text: "any" } });
        });
        describe("with text", function () {
            var v = new definitions_1.TypeParameterDefinition();
            v.name = "";
            v.setConstraintType("string");
            testHelpers_1.runTypeParameterDefinitionTests(v, { name: "", constraintType: { text: "string" } });
        });
        describe("with definition", function () {
            var v = new definitions_1.TypeParameterDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            v.name = "";
            v.setConstraintType(c);
            testHelpers_1.runTypeParameterDefinitionTests(v, { name: "", constraintType: { text: "MyClass" } });
        });
        describe("with definition and one type argument", function () {
            var v = new definitions_1.TypeParameterDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            v.name = "";
            v.setConstraintType(c, ["string"]);
            testHelpers_1.runTypeParameterDefinitionTests(v, { name: "", constraintType: { text: "MyClass<string>" } });
        });
        describe("with definition and multiple type arguments", function () {
            var v = new definitions_1.TypeParameterDefinition();
            var c = createFunctions_1.createClass({ name: "MyClass" });
            v.name = "";
            v.setConstraintType(c, ["string", "number"]);
            testHelpers_1.runTypeParameterDefinitionTests(v, { name: "", constraintType: { text: "MyClass<string, number>" } });
        });
    });
});

//# sourceMappingURL=typeParameterDefinitionTests.js.map
