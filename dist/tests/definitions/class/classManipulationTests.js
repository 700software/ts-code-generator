"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var createFunctions_1 = require("./../../../createFunctions");
var testHelpers = require("./../../testHelpers");
describe("ClassDefinition", function () {
    describe("#addExtends()", function () {
        describe("supplying a text", function () {
            var c = new definitions_1.ClassDefinition();
            var returnedDef = c.addExtends("test");
            c.addExtends("test2");
            it("the returned definition should be in the array", function () {
                assert.equal(returnedDef, c.extendsTypes[0]);
            });
            it("should have two extends expressions", function () {
                assert.equal(c.extendsTypes.length, 2);
            });
            it("should have the correct expression", function () {
                assert.equal(c.extendsTypes[0].text, "test");
            });
        });
        describe("supplying a definition without type arguments", function () {
            var baseClass = createFunctions_1.createClass({ name: "BaseClass" });
            var c = new definitions_1.ClassDefinition();
            var returnedDef = c.addExtends(baseClass);
            it("the returned definition should be in the array", function () {
                assert.equal(returnedDef, c.extendsTypes[0]);
            });
            it("should have the correct expression", function () {
                assert.equal(c.extendsTypes[0].text, "BaseClass");
            });
        });
        describe("supplying a definition with type arguments", function () {
            var baseClass = createFunctions_1.createClass({ name: "BaseClass" });
            var c = new definitions_1.ClassDefinition();
            describe("one type argument", function () {
                var returnedDef = c.addExtends(baseClass, ["string"]);
                it("the returned definition should be in the array", function () {
                    assert.equal(returnedDef, c.extendsTypes[0]);
                });
                it("should have the correct expression", function () {
                    assert.equal(c.extendsTypes[0].text, "BaseClass<string>");
                });
            });
            describe("multiple type arguments", function () {
                c.addExtends(baseClass, ["string", "number"]);
                it("should have the correct expression", function () {
                    assert.equal(c.extendsTypes[1].text, "BaseClass<string, number>");
                });
            });
        });
    });
    describe("#addImplements()", function () {
        describe("supplying a text", function () {
            var c = new definitions_1.ClassDefinition();
            var returnedDef = c.addImplements("test");
            c.addImplements("test2");
            it("the returned definition should be in the array", function () {
                assert.equal(returnedDef, c.implementsTypes[0]);
            });
            it("should have two implements expressions", function () {
                assert.equal(c.implementsTypes.length, 2);
            });
            it("should have the correct expression", function () {
                assert.equal(c.implementsTypes[0].text, "test");
            });
        });
        describe("supplying a definition without type arguments", function () {
            var baseClass = createFunctions_1.createClass({ name: "BaseClass" });
            var c = new definitions_1.ClassDefinition();
            var returnedDef = c.addImplements(baseClass);
            it("the returned definition should be in the array", function () {
                assert.equal(returnedDef, c.implementsTypes[0]);
            });
            it("should have the correct expression", function () {
                assert.equal(c.implementsTypes[0].text, "BaseClass");
            });
        });
        describe("supplying a definition with type arguments", function () {
            var baseInterface = createFunctions_1.createInterface({ name: "BaseInterface" });
            var c = new definitions_1.ClassDefinition();
            describe("one type argument", function () {
                var returnedDef = c.addImplements(baseInterface, ["string"]);
                it("the returned definition should be in the array", function () {
                    assert.equal(returnedDef, c.implementsTypes[0]);
                });
                it("should have the correct expression", function () {
                    assert.equal(c.implementsTypes[0].text, "BaseInterface<string>");
                });
            });
            describe("multiple type arguments", function () {
                c.addImplements(baseInterface, ["string", "number"]);
                it("should have the correct expression", function () {
                    assert.equal(c.implementsTypes[1].text, "BaseInterface<string, number>");
                });
            });
        });
    });
    describe("#addMethod()", function () {
        var c = new definitions_1.ClassDefinition();
        var returnedDef = c.addMethod({
            decorators: [{ name: "decorator" }],
            isAbstract: true,
            isAsync: true,
            returnType: "string",
            typeParameters: [{ name: "TypeParam", constraintType: "string" }],
            parameters: [{
                    name: "myParam",
                    decorators: [{ name: "paramDecorator", arguments: ["\"test\""] }],
                    defaultExpression: "5",
                    type: "number",
                    isOptional: true,
                    isRestParameter: true
                }],
            name: "myMethod",
            scope: definitions_1.Scope.Private,
            onWriteFunctionBody: function (writer) { return writer.write(""); },
            documentationComment: "text"
        });
        c.addMethod({
            name: "mySecondMethod"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, c.methods[0]);
        });
        testHelpers.runClassMethodDefinitionTests(c.methods[0], {
            decorators: [{ name: "decorator" }],
            isAbstract: true,
            isAsync: true,
            returnType: { text: "string" },
            typeParameters: [{ name: "TypeParam", constraintType: { text: "string" } }],
            parameters: [{
                    name: "myParam",
                    decorators: [{ name: "paramDecorator", arguments: [{ text: "\"test\"" }] }],
                    defaultExpression: { text: "5" },
                    type: { text: "number" },
                    isOptional: true,
                    isRestParameter: true
                }],
            name: "myMethod",
            scope: definitions_1.Scope.Private,
            hasOnWriteFunctionBody: true,
            documentationComment: "text"
        });
        testHelpers.runClassMethodDefinitionTests(c.methods[1], {
            name: "mySecondMethod"
        });
    });
    describe("#addProperty()", function () {
        var c = new definitions_1.ClassDefinition();
        var returnedDef = c.addProperty({
            isAbstract: true,
            decorators: [{ name: "decorator" }],
            defaultExpression: "4",
            kind: definitions_1.ClassPropertyKind.GetAccessor,
            isOptional: true,
            isReadonly: true,
            name: "myProperty",
            scope: definitions_1.Scope.Private,
            type: "string",
            onWriteGetBody: function (writer) { return writer.write(""); },
            onWriteSetBody: function (writer) { return writer.write(""); },
            documentationComment: "text"
        });
        c.addProperty({
            name: "mySecondProperty"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, c.properties[0]);
        });
        testHelpers.runClassPropertyDefinitionTests(c.properties[0], {
            isAbstract: true,
            decorators: [{ name: "decorator" }],
            defaultExpression: { text: "4" },
            kind: definitions_1.ClassPropertyKind.GetAccessor,
            isOptional: true,
            isReadonly: true,
            name: "myProperty",
            scope: definitions_1.Scope.Private,
            type: { text: "string" },
            hasOnWriteGetBody: true,
            hasOnWriteSetBody: true,
            documentationComment: "text"
        });
        testHelpers.runClassPropertyDefinitionTests(c.properties[1], {
            name: "mySecondProperty"
        });
    });
    describe("#addStaticMethod()", function () {
        var c = new definitions_1.ClassDefinition();
        var returnedDef = c.addStaticMethod({
            decorators: [{ name: "decorator" }],
            isAsync: true,
            returnType: "string",
            typeParameters: [{ name: "TypeParam", constraintType: "string" }],
            parameters: [{
                    name: "myParam",
                    decorators: [{ name: "paramDecorator", arguments: ["\"test\""] }],
                    defaultExpression: "5",
                    type: "number",
                    isOptional: true,
                    isRestParameter: true
                }],
            name: "myStaticMethod",
            scope: definitions_1.Scope.Private,
            documentationComment: "text"
        });
        c.addStaticMethod({
            name: "mySecondStaticMethod"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, c.staticMethods[0]);
        });
        testHelpers.runClassStaticMethodDefinitionTests(c.staticMethods[0], {
            decorators: [{ name: "decorator" }],
            isAsync: true,
            returnType: { text: "string" },
            typeParameters: [{ name: "TypeParam", constraintType: { text: "string" } }],
            parameters: [{
                    name: "myParam",
                    decorators: [{ name: "paramDecorator", arguments: [{ text: "\"test\"" }] }],
                    defaultExpression: { text: "5" },
                    type: { text: "number" },
                    isOptional: true,
                    isRestParameter: true
                }],
            name: "myStaticMethod",
            scope: definitions_1.Scope.Private,
            documentationComment: "text"
        });
        testHelpers.runClassStaticMethodDefinitionTests(c.staticMethods[1], {
            name: "mySecondStaticMethod"
        });
    });
    describe("#addStaticProperty()", function () {
        var c = new definitions_1.ClassDefinition();
        var returnedDef = c.addStaticProperty({
            decorators: [{ name: "decorator" }],
            defaultExpression: "4",
            isOptional: true,
            name: "myStaticProperty",
            scope: definitions_1.Scope.Private,
            type: "string",
            documentationComment: "text"
        });
        c.addStaticProperty({
            name: "mySecondStaticProperty"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, c.staticProperties[0]);
        });
        testHelpers.runClassStaticPropertyDefinitionTests(c.staticProperties[0], {
            decorators: [{ name: "decorator" }],
            defaultExpression: { text: "4" },
            isOptional: true,
            name: "myStaticProperty",
            scope: definitions_1.Scope.Private,
            type: { text: "string" },
            documentationComment: "text"
        });
        testHelpers.runClassStaticPropertyDefinitionTests(c.staticProperties[1], {
            name: "mySecondStaticProperty"
        });
    });
    describe("#setConstructor()", function () {
        var c = new definitions_1.ClassDefinition();
        c.setConstructor({
            scope: definitions_1.Scope.Private,
            parameters: [{ name: "param1" }, { name: "param2", scope: definitions_1.ClassConstructorParameterScope.Private }],
            onWriteFunctionBody: function (writer) { return writer.write(""); },
            documentationComment: "text"
        });
        describe("constructor", function () {
            testHelpers.runClassConstructorDefinitionTests(c.constructorDef, {
                scope: definitions_1.Scope.Private,
                parameters: [{ name: "param1" }, { name: "param2", scope: definitions_1.ClassConstructorParameterScope.Private }],
                hasOnWriteFunctionBody: true,
                documentationComment: "text"
            });
        });
    });
});

//# sourceMappingURL=classManipulationTests.js.map
