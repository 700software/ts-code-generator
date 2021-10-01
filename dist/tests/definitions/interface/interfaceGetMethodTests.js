"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("InterfaceDefinition", function () {
    describe("getCallSignature", function () {
        var i = new definitions_1.InterfaceDefinition();
        i.addCallSignature({ returnType: "string" });
        i.addCallSignature({ returnType: "number" });
        it("should equal the second definition", function () {
            assert.equal(i.getCallSignature(function (n) { return n.returnType.text === "number"; }), i.callSignatures[1]);
        });
    });
    describe("getIndexSignature", function () {
        var i = new definitions_1.InterfaceDefinition();
        i.addIndexSignature({ keyName: "str", returnType: "string" });
        i.addIndexSignature({ keyName: "num", returnType: "number" });
        it("should equal the second definition", function () {
            assert.equal(i.getIndexSignature(function (n) { return n.returnType.text === "number"; }), i.indexSignatures[1]);
        });
    });
    describe("getMethod", function () {
        var i = new definitions_1.InterfaceDefinition();
        i.addMethod({ name: "name1" });
        i.addMethod({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(i.getMethod("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(i.getMethod(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("getNewSignature", function () {
        var i = new definitions_1.InterfaceDefinition();
        i.addNewSignature({ returnType: "string" });
        i.addNewSignature({ returnType: "number" });
        it("should equal the second definition", function () {
            assert.equal(i.getNewSignature(function (n) { return n.returnType.text === "number"; }), i.newSignatures[1]);
        });
    });
    describe("getProperty", function () {
        var i = new definitions_1.InterfaceDefinition();
        i.addProperty({ name: "name1" });
        i.addProperty({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(i.getProperty("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(i.getProperty(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
});

//# sourceMappingURL=interfaceGetMethodTests.js.map
