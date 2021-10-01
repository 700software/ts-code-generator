"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var createFunctions_1 = require("./../../../createFunctions");
var testHelpers = require("./../../testHelpers");
describe("InterfaceDefinition", function () {
    describe("#addCallSignature()", function () {
        var i = new definitions_1.InterfaceDefinition();
        var returnedDef = i.addCallSignature({
            returnType: "string",
            parameters: [{ name: "myParam" }],
            typeParameters: [{ name: "T" }],
            documentationComment: "test"
        });
        i.addCallSignature({
            returnType: "number"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, i.callSignatures[0]);
        });
        testHelpers.runCallSignatureDefinitionTests(i.callSignatures[0], {
            returnType: { text: "string" },
            parameters: [{ name: "myParam" }],
            typeParameters: [{ name: "T" }],
            minArgumentCount: 1,
            documentationComment: "test"
        });
        testHelpers.runCallSignatureDefinitionTests(i.callSignatures[1], {
            returnType: { text: "number" }
        });
    });
    describe("#addExtends()", function () {
        describe("supplying a text", function () {
            var i = new definitions_1.InterfaceDefinition();
            var returnedDef = i.addExtends("test");
            i.addExtends("test2");
            it("the returned definition should be in the array", function () {
                assert.equal(returnedDef, i.extendsTypes[0]);
            });
            it("should have the correct number of extends expressions", function () {
                assert.equal(i.extendsTypes.length, 2);
            });
            it("should have the correct expression", function () {
                assert.equal(i.extendsTypes[0].text, "test");
            });
        });
        describe("supplying a definition without type arguments", function () {
            var baseInterface = createFunctions_1.createInterface({ name: "BaseInterface" });
            var i = new definitions_1.InterfaceDefinition();
            var returnedDef = i.addExtends(baseInterface);
            it("the returned definition should be in the array", function () {
                assert.equal(returnedDef, i.extendsTypes[0]);
            });
            it("should have the correct expression", function () {
                assert.equal(i.extendsTypes[0].text, "BaseInterface");
            });
        });
        describe("supplying a definition with type arguments", function () {
            var baseClass = createFunctions_1.createClass({ name: "BaseClass" });
            var i = new definitions_1.InterfaceDefinition();
            describe("one type argument", function () {
                var returnedDef = i.addExtends(baseClass, ["string"]);
                it("the returned definition should be in the array", function () {
                    assert.equal(returnedDef, i.extendsTypes[0]);
                });
                it("should have the correct expression", function () {
                    assert.equal(i.extendsTypes[0].text, "BaseClass<string>");
                });
            });
            describe("multiple type arguments", function () {
                i.addExtends(baseClass, ["string", "number"]);
                it("should have the correct expression", function () {
                    assert.equal(i.extendsTypes[1].text, "BaseClass<string, number>");
                });
            });
        });
    });
    describe("#addIndexSignature()", function () {
        var i = new definitions_1.InterfaceDefinition();
        var returnedDef = i.addIndexSignature({
            keyName: "num",
            keyType: "number",
            returnType: "Date",
            isReadonly: true
        });
        i.addIndexSignature({
            keyName: "str",
            returnType: "number"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, i.indexSignatures[0]);
        });
        testHelpers.runIndexSignatureDefinitionTests(i.indexSignatures[0], {
            keyName: "num",
            keyType: { text: "number" },
            returnType: { text: "Date" },
            isReadonly: true
        });
        testHelpers.runIndexSignatureDefinitionTests(i.indexSignatures[1], {
            keyName: "str",
            keyType: { text: "string" },
            returnType: { text: "number" }
        });
    });
    describe("#addMethod()", function () {
        var i = new definitions_1.InterfaceDefinition();
        var returnedDef = i.addMethod({
            name: "myMethod1",
            typeParameters: [{ name: "T" }],
            returnType: "string",
            parameters: [{ name: "myParam" }]
        });
        i.addMethod({
            name: "myMethod2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, i.methods[0]);
        });
        testHelpers.runInterfaceMethodDefinitionTests(i.methods[0], {
            name: "myMethod1",
            typeParameters: [{ name: "T" }],
            returnType: { text: "string" },
            parameters: [{ name: "myParam" }]
        });
        testHelpers.runInterfaceMethodDefinitionTests(i.methods[1], {
            name: "myMethod2"
        });
    });
    describe("#addProperty()", function () {
        var i = new definitions_1.InterfaceDefinition();
        var returnedDef = i.addProperty({
            isOptional: true,
            name: "myProperty1",
            type: "string",
            documentationComment: "text"
        });
        i.addProperty({
            name: "myProperty2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, i.properties[0]);
        });
        testHelpers.runInterfacePropertyDefinitionTests(i.properties[0], {
            isOptional: true,
            name: "myProperty1",
            type: { text: "string" },
            documentationComment: "text"
        });
        testHelpers.runInterfacePropertyDefinitionTests(i.properties[1], {
            name: "myProperty2"
        });
    });
    describe("#addNewSignature()", function () {
        var i = new definitions_1.InterfaceDefinition();
        var returnedDef = i.addNewSignature({
            returnType: "string",
            parameters: [{ name: "myParam" }],
            typeParameters: [{ name: "T" }]
        });
        i.addNewSignature({
            returnType: "number"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, i.newSignatures[0]);
        });
        testHelpers.runCallSignatureDefinitionTests(i.newSignatures[0], {
            returnType: { text: "string" },
            parameters: [{ name: "myParam" }],
            typeParameters: [{ name: "T" }],
            minArgumentCount: 1
        });
        testHelpers.runCallSignatureDefinitionTests(i.newSignatures[1], {
            returnType: { text: "number" }
        });
    });
});

//# sourceMappingURL=interfaceManipulationTests.js.map
