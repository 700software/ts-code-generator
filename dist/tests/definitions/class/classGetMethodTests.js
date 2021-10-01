"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("ClassDefinition", function () {
    describe("#getMethod()", function () {
        var c = new definitions_1.ClassDefinition();
        c.addMethod({ name: "name1" });
        c.addMethod({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getMethod("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getMethod(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getStaticMethod()", function () {
        var c = new definitions_1.ClassDefinition();
        c.addStaticMethod({ name: "name1" });
        c.addStaticMethod({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getStaticMethod("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getStaticMethod(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getProperty()", function () {
        var c = new definitions_1.ClassDefinition();
        c.addProperty({ name: "name1" });
        c.addProperty({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getProperty("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getProperty(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getStaticProperty()", function () {
        var c = new definitions_1.ClassDefinition();
        c.addStaticProperty({ name: "name1" });
        c.addStaticProperty({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getStaticProperty("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getStaticProperty(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getPropertiesAndConstructorParameters()", function () {
        describe("with constructor", function () {
            var c = new definitions_1.ClassDefinition();
            c.addProperty({ name: "name1" });
            c.addProperty({ name: "name2" });
            c.setConstructor({
                parameters: [{
                        name: "myFirst"
                    }, {
                        name: "mySecond",
                        scope: definitions_1.ClassConstructorParameterScope.Private
                    }]
            });
            var allProps = c.getPropertiesAndConstructorParameters();
            it("should be a length of 3", function () {
                assert.equal(allProps.length, 3);
            });
            it("should have the constructor parameter first", function () {
                assert.equal(allProps[0], c.constructorDef.parameters[1]);
            });
            it("should have the first property second", function () {
                assert.equal(allProps[1], c.properties[0]);
            });
            it("should have the second property last", function () {
                assert.equal(allProps[2], c.properties[1]);
            });
        });
        describe("without constructor", function () {
            var c = new definitions_1.ClassDefinition();
            c.addProperty({ name: "name1" });
            c.addProperty({ name: "name2" });
            var allProps = c.getPropertiesAndConstructorParameters();
            it("should be a length of 2", function () {
                assert.equal(allProps.length, 2);
            });
        });
    });
});

//# sourceMappingURL=classGetMethodTests.js.map
