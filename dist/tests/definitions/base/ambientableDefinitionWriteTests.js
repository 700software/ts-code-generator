"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
var definitions_1 = require("./../../../definitions");
describe("AmbientableDefinition", function () {
    var file = createFunctions_1.createFile();
    file.addNamespace({
        name: "MyNamespace",
        hasDeclareKeyword: true
    });
    file.addNamespace({
        name: "MyModule",
        hasDeclareKeyword: true,
        declarationType: definitions_1.NamespaceDeclarationType.Module
    });
    file.addNamespace({
        name: "MyOtherNamespace",
        hasDeclareKeyword: true,
        interfaces: [{ name: "myOtherInterface" }],
        functions: [{ name: "myOtherFunction", isAmbient: true }]
    });
    file.addInterface({
        name: "MyInterface",
        hasDeclareKeyword: true
    });
    file.addClass({
        name: "MyClass",
        hasDeclareKeyword: true
    });
    file.addEnum({
        name: "MyEnum",
        hasDeclareKeyword: true
    });
    file.addFunction({
        name: "myFunction",
        hasDeclareKeyword: true,
        isAmbient: true
    });
    describe("write()", function () {
        it("should contain the file written out with declare keywords", function () {
            var expected = "declare namespace MyNamespace {\n}\n\ndeclare module MyModule {\n}\n\ndeclare namespace MyOtherNamespace {\n    interface myOtherInterface {\n    }\n\n    function myOtherFunction(): void;\n}\n\ndeclare interface MyInterface {\n}\n\ndeclare class MyClass {\n}\n\ndeclare enum MyEnum {\n}\n\ndeclare function myFunction(): void;\n";
            assert.equal(file.write(), expected);
        });
    });
});

//# sourceMappingURL=ambientableDefinitionWriteTests.js.map
