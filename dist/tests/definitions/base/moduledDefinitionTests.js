"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
var definitions_1 = require("./../../../definitions");
var testHelpers = require("./../../testHelpers");
describe("ModuledDefinitionTests", function () {
    describe("#addClass()", function () {
        var n = new definitions_1.NamespaceDefinition();
        var returnedDef = n.addClass({
            name: "class1",
            constructorDef: { parameters: [{ name: "param1" }] },
            decorators: [{ name: "dec1" }],
            extendsTypes: ["class2"],
            implementsTypes: ["interface1"],
            hasDeclareKeyword: true,
            isAbstract: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            methods: [{ name: "method1" }],
            properties: [{ name: "prop1" }],
            staticMethods: [{ name: "staticMethod1" }],
            staticProperties: [{ name: "staticProp1" }],
            typeParameters: [{ name: "T" }],
            documentationComment: "text"
        });
        n.addClass({
            name: "class2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, n.classes[0]);
        });
        testHelpers.runClassDefinitionTests(n.classes[0], {
            name: "class1",
            order: 0,
            constructorDef: { parameters: [{ name: "param1" }] },
            decorators: [{ name: "dec1" }],
            extendsTypes: [{ text: "class2" }],
            implementsTypes: [{ text: "interface1" }],
            hasDeclareKeyword: true,
            isAbstract: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            methods: [{ name: "method1" }],
            properties: [{ name: "prop1" }],
            staticMethods: [{ name: "staticMethod1" }],
            staticProperties: [{ name: "staticProp1" }],
            typeParameters: [{ name: "T" }],
            documentationComment: "text"
        });
        testHelpers.runClassDefinitionTests(n.classes[1], {
            name: "class2",
            order: 1
        });
    });
    describe("#addEnum()", function () {
        var n = new definitions_1.NamespaceDefinition();
        var returnedDef = n.addEnum({
            name: "enum1",
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            isConst: true,
            members: [{ name: "member1", value: 1 }, { name: "member2", value: 2 }],
            documentationComment: "text"
        });
        n.addEnum({
            name: "enum2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, n.enums[0]);
        });
        testHelpers.runEnumDefinitionTests(n.enums[0], {
            name: "enum1",
            order: 0,
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            isConst: true,
            members: [{ name: "member1", value: 1 }, { name: "member2", value: 2 }],
            documentationComment: "text"
        });
        testHelpers.runEnumDefinitionTests(n.enums[1], {
            name: "enum2",
            order: 1
        });
    });
    describe("addFunction", function () {
        var n = new definitions_1.NamespaceDefinition();
        var returnedDef = n.addFunction({
            name: "function1",
            hasDeclareKeyword: true,
            isAmbient: true,
            isAsync: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isGenerator: true,
            isNamedExportOfFile: true,
            parameters: [{ name: "this", type: "string" }, { name: "param1" }, { name: "param2" }],
            returnType: "string",
            typeParameters: [{ name: "T" }, { name: "U" }],
            overloadSignatures: [{
                    parameters: [{ name: "param1" }]
                }],
            onWriteFunctionBody: function (writer) { return writer.write(""); },
            documentationComment: "text"
        });
        n.addFunction({
            name: "function2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, n.functions[0]);
        });
        testHelpers.runFunctionDefinitionTests(n.functions[0], {
            name: "function1",
            order: 0,
            hasDeclareKeyword: true,
            isAmbient: true,
            isAsync: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isGenerator: true,
            isNamedExportOfFile: true,
            thisType: { text: "string" },
            parameters: [{ name: "param1" }, { name: "param2" }],
            returnType: { text: "string" },
            typeParameters: [{ name: "T" }, { name: "U" }],
            overloadSignatures: [{
                    parameters: [{ name: "param1" }],
                    minArgumentCount: 1
                }],
            hasOnWriteFunctionBody: true,
            documentationComment: "text"
        });
        testHelpers.runFunctionDefinitionTests(n.functions[1], {
            name: "function2",
            order: 1
        });
    });
    describe("#addInterface()", function () {
        var n = new definitions_1.NamespaceDefinition();
        var returnedDef = n.addInterface({
            name: "Interface1",
            extendsTypes: ["Extend"],
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            methods: [{
                    name: "method1"
                }],
            callSignatures: [{
                    parameters: [{ name: "param1" }]
                }],
            newSignatures: [{
                    parameters: [{ name: "param1" }]
                }],
            properties: [{
                    name: "prop1"
                }],
            typeParameters: [{
                    name: "typeParam"
                }],
            documentationComment: "text"
        });
        n.addInterface({
            name: "Interface2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, n.interfaces[0]);
        });
        testHelpers.runInterfaceDefinitionTests(n.interfaces[0], {
            name: "Interface1",
            order: 0,
            extendsTypes: [{ text: "Extend" }],
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            methods: [{
                    name: "method1"
                }],
            callSignatures: [{
                    parameters: [{ name: "param1" }],
                    minArgumentCount: 1
                }],
            newSignatures: [{
                    parameters: [{ name: "param1" }],
                    minArgumentCount: 1
                }],
            properties: [{
                    name: "prop1"
                }],
            typeParameters: [{
                    name: "typeParam"
                }],
            documentationComment: "text"
        });
        testHelpers.runInterfaceDefinitionTests(n.interfaces[1], {
            name: "Interface2",
            order: 1
        });
    });
    describe("#addNamespace()", function () {
        var n = new definitions_1.NamespaceDefinition();
        var returnedDef = n.addNamespace({
            name: "namespace1",
            declarationType: definitions_1.NamespaceDeclarationType.Module,
            classes: [{ name: "class1" }],
            enums: [{ name: "enum1" }],
            functions: [{ name: "function1" }],
            hasDeclareKeyword: true,
            interfaces: [{ name: "interface1" }],
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            namespaces: [{ name: "namespace1" }],
            typeAliases: [{ name: "typeAlias1", type: "string" }],
            variables: [{ name: "variable1" }],
            documentationComment: "text"
        });
        n.addNamespace({
            name: "namespace2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, n.namespaces[0]);
        });
        testHelpers.runNamespaceDefinitionTests(n.namespaces[0], {
            name: "namespace1",
            order: 0,
            declarationType: definitions_1.NamespaceDeclarationType.Module,
            classes: [{ name: "class1" }],
            enums: [{ name: "enum1" }],
            functions: [{ name: "function1" }],
            hasDeclareKeyword: true,
            interfaces: [{ name: "interface1" }],
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            namespaces: [{ name: "namespace1", declarationType: definitions_1.NamespaceDeclarationType.Namespace }],
            typeAliases: [{ name: "typeAlias1", type: { text: "string" } }],
            variables: [{ name: "variable1", declarationType: definitions_1.VariableDeclarationType.Let }],
            documentationComment: "text"
        });
        testHelpers.runNamespaceDefinitionTests(n.namespaces[1], {
            name: "namespace2",
            order: 1,
            declarationType: definitions_1.NamespaceDeclarationType.Namespace // should default to namespace
        });
    });
    describe("#addTypeAlias()", function () {
        var n = new definitions_1.NamespaceDefinition();
        var returnedDef = n.addTypeAlias({
            name: "typeAlias1",
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            type: "string",
            typeParameters: [{ name: "T" }],
            documentationComment: "text"
        });
        n.addTypeAlias({
            name: "typeAlias2",
            type: "string"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, n.typeAliases[0]);
        });
        testHelpers.runTypeAliasDefinitionTests(n.typeAliases[0], {
            name: "typeAlias1",
            order: 0,
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            type: { text: "string" },
            typeParameters: [{ name: "T" }],
            documentationComment: "text"
        });
        testHelpers.runTypeAliasDefinitionTests(n.typeAliases[1], {
            name: "typeAlias2",
            order: 1,
            type: { text: "string" }
        });
    });
    describe("#addVariable()", function () {
        var n = new definitions_1.NamespaceDefinition();
        var returnedDef = n.addVariable({
            name: "myVar1",
            declarationType: definitions_1.VariableDeclarationType.Const,
            defaultExpression: "5",
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            type: "number",
            documentationComment: "text"
        });
        n.addVariable({
            name: "myVar2"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, n.variables[0]);
        });
        testHelpers.runVariableDefinitionTests(n.variables[0], {
            name: "myVar1",
            order: 0,
            declarationType: definitions_1.VariableDeclarationType.Const,
            defaultExpression: { text: "5" },
            hasDeclareKeyword: true,
            isAmbient: true,
            isDefaultExportOfFile: true,
            isExported: true,
            isNamedExportOfFile: true,
            type: { text: "number" },
            documentationComment: "text"
        });
        testHelpers.runVariableDefinitionTests(n.variables[1], {
            name: "myVar2",
            order: 1,
            declarationType: definitions_1.VariableDeclarationType.Let // should default to let
        });
    });
    describe("#getClass()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addClass({ name: "name1" });
        n.addClass({ name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getClass("name2"), { name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getClass(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getEnum()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addEnum({ name: "name1" });
        n.addEnum({ name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getEnum("name2"), { name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getEnum(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getFunction()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addFunction({ name: "name1" });
        n.addFunction({ name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getFunction("name2"), { name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getFunction(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getInterface()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addInterface({ name: "name1" });
        n.addInterface({ name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getInterface("name2"), { name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getInterface(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getNamespace()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addNamespace({ name: "name1" });
        n.addNamespace({ name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getNamespace("name2"), { name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getNamespace(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getTypeAlias()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addTypeAlias({ name: "name1", type: "string" });
        n.addTypeAlias({ name: "name2", type: "string" });
        testHelpers.runNamedDefinitionTests(n.getTypeAlias("name2"), { name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getTypeAlias(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#getVariable()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addVariable({ name: "name1" });
        n.addVariable({ name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getVariable("name2"), { name: "name2" });
        testHelpers.runNamedDefinitionTests(n.getVariable(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
    describe("#directlyContains()", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addClass({ name: "c" });
        n.addEnum({ name: "e" });
        n.addFunction({ name: "f" });
        n.addInterface({ name: "i" });
        n.addNamespace({ name: "n" });
        n.addTypeAlias({ name: "t", type: "string" });
        n.addVariable({ name: "v" });
        it("should contain the class", function () {
            assert.equal(n.directlyContains(n.classes[0]), true);
        });
        it("should contain the enum", function () {
            assert.equal(n.directlyContains(n.enums[0]), true);
        });
        it("should contain the function", function () {
            assert.equal(n.directlyContains(n.functions[0]), true);
        });
        it("should contain the interface", function () {
            assert.equal(n.directlyContains(n.interfaces[0]), true);
        });
        it("should contain the namespace", function () {
            assert.equal(n.directlyContains(n.namespaces[0]), true);
        });
        it("should contain the type alias", function () {
            assert.equal(n.directlyContains(n.typeAliases[0]), true);
        });
        it("should contain the variable", function () {
            assert.equal(n.directlyContains(n.variables[0]), true);
        });
        it("should not contain a definition not in the module", function () {
            assert.equal(n.directlyContains(createFunctions_1.createVariable({ name: "t" })), false);
        });
    });
    describe("#getNamespacesToDefinition()", function () {
        var def = new definitions_1.NamespaceDefinition();
        def.addVariable({ name: "v" });
        def.addNamespace({
            name: "n1"
        });
        def.addNamespace({
            name: "n2",
            namespaces: [{
                    name: "n3",
                    variables: [{ name: "v1" }, { name: "v2" }]
                }]
        });
        describe("getting the namesapces to a variable directly in the namespace", function () {
            var namespaces = def.getNamespacesToDefinition(def.variables[0]);
            it("the array should have the correct length", function () {
                assert.equal(namespaces.length, 0);
            });
        });
        describe("getting the namesapces to a variable in a namespace within a namespace", function () {
            var namespaces = def.getNamespacesToDefinition(def.namespaces[1].namespaces[0].variables[1]);
            it("the array should have the correct length", function () {
                assert.equal(namespaces.length, 2);
            });
            it("should have the first namespace as the first item in the array", function () {
                assert.equal(namespaces[0], def.namespaces[1]);
            });
            it("should have the second namespace as the second item in the array", function () {
                assert.equal(namespaces[1], def.namespaces[1].namespaces[0]);
            });
        });
        describe("getting the namespaces to a variable not existing in any namespace", function () {
            var path = def.getNamespacesToDefinition(createFunctions_1.createVariable({ name: "v" }));
            it("path should be null", function () {
                assert.equal(path, null);
            });
        });
    });
    describe("#getExports()", function () {
        var def = createFunctions_1.createNamespace({
            name: "MyNamespace",
            namespaces: [{ name: "" }, { name: "", isExported: true }, { name: "", isExported: true, isDefaultExportOfFile: true }],
            classes: [{ name: "" }, { name: "", isExported: true }],
            interfaces: [{ name: "" }, { name: "", isExported: true }],
            enums: [{ name: "" }, { name: "", isExported: true }],
            functions: [{ name: "" }, { name: "", isExported: true }],
            variables: [{ name: "" }, { name: "", isExported: true }],
            typeAliases: [{ name: "", type: "" }, { name: "", type: "", isExported: true }]
        });
        describe("it should have 7 exports", function () {
            assert.equal(def.getExports().length, 7);
        });
    });
    describe("#getMembers()", function () {
        var def = createFunctions_1.createNamespace({
            name: "MyNamespace",
            namespaces: [{ name: "" }],
            classes: [{ name: "" }],
            interfaces: [{ name: "" }],
            enums: [{ name: "" }],
            functions: [{ name: "" }],
            variables: [{ name: "" }],
            typeAliases: [{ name: "", type: "" }]
        });
        describe("it should have 7 members", function () {
            assert.equal(def.getMembers().length, 7);
        });
    });
    describe("#setOrderOfMember()", function () {
        describe("changing the order", function () {
            var def = createFunctions_1.createNamespace({
                name: "MyNamespace"
            });
            def.addNamespace({ name: "n" });
            def.addClass({ name: "c" });
            def.addInterface({ name: "i" });
            def.addEnum({ name: "e" });
            def.addFunction({ name: "f" });
            def.addVariable({ name: "v" });
            def.addTypeAlias({ name: "t", type: "string" });
            def.setOrderOfMember(1, def.typeAliases[0]);
            testHelpers.runNamespaceDefinitionTests(def, {
                name: "MyNamespace",
                namespaces: [{ name: "n", order: 0 }],
                classes: [{ name: "c", order: 2 }],
                interfaces: [{ name: "i", order: 3 }],
                enums: [{ name: "e", order: 4 }],
                functions: [{ name: "f", order: 5 }],
                variables: [{ name: "v", order: 6 }],
                typeAliases: [{ name: "t", order: 1, type: { text: "string" } }]
            });
        });
        describe("specifying an order less than 0", function () {
            var def = createFunctions_1.createNamespace({
                name: "MyNamespace"
            });
            def.addNamespace({ name: "n" });
            def.addClass({ name: "c" });
            def.setOrderOfMember(-1, def.classes[0]);
            testHelpers.runNamespaceDefinitionTests(def, {
                name: "MyNamespace",
                namespaces: [{ name: "n", order: 1 }],
                classes: [{ name: "c", order: 0 }]
            });
        });
        describe("providing a member that doesn't exist", function () {
            it("should throw an error", function () {
                var def = createFunctions_1.createNamespace({ name: "" });
                def.addNamespace({ name: "n" });
                assert.throws(function () {
                    def.setOrderOfMember(0, createFunctions_1.createNamespace({ name: "n" }));
                }, Error, "The member 'n' does not exist in this module.");
            });
        });
    });
});

//# sourceMappingURL=moduledDefinitionTests.js.map
