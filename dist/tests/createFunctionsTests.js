"use strict";
var createFunctions = require("./../createFunctions");
var testHelpers = require("./testHelpers");
describe("createFunctions", function () {
    describe("createCallSignature()", function () {
        testHelpers.runCallSignatureDefinitionTests(createFunctions.createCallSignature(), {});
        testHelpers.runCallSignatureDefinitionTests(createFunctions.createCallSignature({}), {});
    });
    describe("createCallSignatureParameter()", function () {
        testHelpers.runCallSignatureParameterDefinitionTests(createFunctions.createCallSignatureParameter({ name: "name" }), { name: "name" });
    });
    describe("createClass()", function () {
        testHelpers.runClassDefinitionTests(createFunctions.createClass({ name: "name" }), { name: "name" });
    });
    describe("createClassConstructor()", function () {
        testHelpers.runClassConstructorDefinitionTests(createFunctions.createClassConstructor(), {});
        testHelpers.runClassConstructorDefinitionTests(createFunctions.createClassConstructor({}), {});
    });
    describe("createClassConstructorParameter()", function () {
        testHelpers.runClassConstructorParameterDefinitionTests(createFunctions.createClassConstructorParameter({ name: "name" }), { name: "name" });
    });
    describe("createClassMethod()", function () {
        testHelpers.runClassMethodDefinitionTests(createFunctions.createClassMethod({ name: "name" }), { name: "name" });
    });
    describe("createClassMethodParameter()", function () {
        testHelpers.runClassMethodParameterDefinitionTests(createFunctions.createClassMethodParameter({ name: "name" }), { name: "name" });
    });
    describe("createClassProperty()", function () {
        testHelpers.runClassPropertyDefinitionTests(createFunctions.createClassProperty({ name: "name" }), { name: "name" });
    });
    describe("createClassStaticMethod()", function () {
        testHelpers.runClassStaticMethodDefinitionTests(createFunctions.createClassStaticMethod({ name: "name" }), { name: "name" });
    });
    describe("createClassStaticMethodParameter()", function () {
        testHelpers.runClassStaticMethodParameterDefinitionTests(createFunctions.createClassStaticMethodParameter({ name: "name" }), { name: "name" });
    });
    describe("createClassStaticProperty()", function () {
        testHelpers.runClassStaticPropertyDefinitionTests(createFunctions.createClassStaticProperty({ name: "name" }), { name: "name" });
    });
    describe("createDecorator()", function () {
        testHelpers.runDecoratorDefinitionTests(createFunctions.createDecorator({ name: "name" }), { name: "name" });
    });
    describe("createEnum()", function () {
        testHelpers.runEnumDefinitionTests(createFunctions.createEnum({ name: "name" }), { name: "name" });
    });
    describe("createEnumMember()", function () {
        testHelpers.runEnumMemberDefinitionTests(createFunctions.createEnumMember({ name: "name", value: 0 }), { name: "name", value: 0 });
    });
    describe("createFile()", function () {
        describe("has options", function () {
            var file = createFunctions.createFile({
                fileName: "test.ts",
                defaultExportExpression: "5",
                imports: [{ moduleSpecifier: "./test", starImportName: "test" }],
                reExports: [{ moduleSpecifier: "./test2" }],
                variables: [{ name: "myVar" }]
            });
            testHelpers.runFileDefinitionTests(file, {
                fileName: "test.ts",
                defaultExportExpression: { text: "5" },
                imports: [{ moduleSpecifier: "./test", starImportName: "test" }],
                reExports: [{ moduleSpecifier: "./test2" }],
                variables: [{ name: "myVar" }]
            });
        });
        describe("has no options", function () {
            var file = createFunctions.createFile();
            testHelpers.runFileDefinitionTests(file, {});
        });
    });
    describe("createFunction()", function () {
        testHelpers.runFunctionDefinitionTests(createFunctions.createFunction({ name: "name" }), { name: "name" });
    });
    describe("createFunctionParameter()", function () {
        testHelpers.runFunctionParameterDefinitionTests(createFunctions.createFunctionParameter({ name: "name" }), { name: "name" });
    });
    describe("createImport()", function () {
        testHelpers.runImportDefinitionTests(createFunctions.createImport({ moduleSpecifier: "test" }), { moduleSpecifier: "test" });
    });
    describe("createIndexSignature()", function () {
        testHelpers.runIndexSignatureDefinitionTests(createFunctions.createIndexSignature({ keyName: "t", keyType: "string", returnType: "any" }), { keyName: "t", keyType: { text: "string" }, returnType: { text: "any" } });
    });
    describe("createInterface()", function () {
        testHelpers.runInterfaceDefinitionTests(createFunctions.createInterface({ name: "name" }), { name: "name" });
    });
    describe("createInterfaceMethod()", function () {
        testHelpers.runInterfaceMethodDefinitionTests(createFunctions.createInterfaceMethod({ name: "name" }), { name: "name" });
    });
    describe("createInterfaceMethodParameterStructure()", function () {
        testHelpers.runInterfaceMethodParameterDefinitionTests(createFunctions.createInterfaceMethodParameter({ name: "name" }), { name: "name" });
    });
    describe("createInterfaceProperty()", function () {
        testHelpers.runInterfacePropertyDefinitionTests(createFunctions.createInterfaceProperty({ name: "name" }), { name: "name" });
    });
    describe("createNamespace()", function () {
        testHelpers.runNamespaceDefinitionTests(createFunctions.createNamespace({ name: "name" }), { name: "name" });
    });
    describe("createReExport()", function () {
        testHelpers.runReExportDefinitionTests(createFunctions.createReExport({ moduleSpecifier: "name" }), { moduleSpecifier: "name" });
    });
    describe("createTypeAlias()", function () {
        testHelpers.runTypeAliasDefinitionTests(createFunctions.createTypeAlias({ name: "name", type: "string" }), { name: "name", type: { text: "string" } });
    });
    describe("createVariable()", function () {
        testHelpers.runVariableDefinitionTests(createFunctions.createVariable({ name: "name" }), { name: "name" });
    });
});

//# sourceMappingURL=createFunctionsTests.js.map
