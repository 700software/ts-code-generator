"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../../definitions");
describe("BaseTypeDefinition", function () {
    function getNewDef() {
        return new definitions_1.TypeDefinition();
    }
    describe("#getIntersectionType()", function () {
        var def = getNewDef();
        def.intersectionTypes.push({ text: "" }, { text: "test" });
        it("should get the correct type", function () {
            assert.equal(def.getIntersectionType(function (c) { return c.text === "test"; }), def.intersectionTypes[1]);
        });
    });
    describe("#getUnionType()", function () {
        var def = getNewDef();
        def.unionTypes.push({ text: "" }, { text: "test" });
        it("should get the correct type", function () {
            assert.equal(def.getUnionType(function (c) { return c.text === "test"; }), def.unionTypes[1]);
        });
    });
    describe("#getDefinition()", function () {
        var def = getNewDef();
        def.definitions.push({ name: "def1" }, { name: "def2" });
        it("should get the correct definition", function () {
            assert.equal(def.getDefinition(function (d) { return d.name === "def2"; }), def.definitions[1]);
        });
    });
    describe("#getProperty()", function () {
        var def = getNewDef();
        def.properties.push({ name: "prop1" }, { name: "prop2" });
        it("should get the correct property", function () {
            assert.equal(def.getProperty(function (d) { return d.name === "prop2"; }), def.properties[1]);
        });
    });
    describe("#getTypeArgument()", function () {
        var def = getNewDef();
        def.typeArguments.push({ text: "text1" }, { text: "text2" });
        it("should get the correct type argument", function () {
            assert.equal(def.getTypeArgument(function (d) { return d.text === "text2"; }), def.typeArguments[1]);
        });
    });
});

//# sourceMappingURL=baseTypeDefinitionTests.js.map
