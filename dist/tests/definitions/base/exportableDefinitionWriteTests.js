"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
describe("ExportableDefinition", function () {
    describe("named exports", function () {
        var myFile = createFunctions_1.createFile({
            namespaces: [{ name: "MyNamespace", isExported: true }],
            interfaces: [{ name: "MyInterface", isExported: true }],
            classes: [{ name: "MyClass", isExported: true }],
            enums: [{ name: "MyEnum", isExported: true }],
            functions: [{ name: "myFunction", isExported: true }]
        });
        describe("write()", function () {
            it("should contain the file written out with export keywords", function () {
                var expected = "export interface MyInterface {\n}\n\nexport enum MyEnum {\n}\n\nexport class MyClass {\n}\n\nexport namespace MyNamespace {\n}\n\nexport function myFunction() {\n}\n";
                assert.equal(myFile.write(), expected);
            });
        });
    });
    describe("default export statements", function () {
        it("should write export default for a namespace", function () {
            var file = createFunctions_1.createFile({
                namespaces: [{ name: "MyNamespace", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyNamespace"
            });
            var expected = "namespace MyNamespace {\n}\n\nexport default MyNamespace;\n";
            assert.equal(file.write(), expected);
        });
        it("should write export default for an interface", function () {
            var file = createFunctions_1.createFile({
                interfaces: [{ name: "MyInterface", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyInterface"
            });
            var expected = "interface MyInterface {\n}\n\nexport default MyInterface;\n";
            assert.equal(file.write(), expected);
        });
        it("should write export default for a class", function () {
            var file = createFunctions_1.createFile({
                classes: [{ name: "MyClass", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyClass"
            });
            var expected = "class MyClass {\n}\n\nexport default MyClass;\n";
            assert.equal(file.write(), expected);
        });
        it("should write export default for an enum", function () {
            var file = createFunctions_1.createFile({
                enums: [{ name: "MyEnum", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyEnum"
            });
            var expected = "enum MyEnum {\n}\n\nexport default MyEnum;\n";
            assert.equal(file.write(), expected);
        });
        it("should write export default for a function", function () {
            var file = createFunctions_1.createFile({
                functions: [{ name: "MyFunction", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyFunction"
            });
            var expected = "function MyFunction() {\n}\n\nexport default MyFunction;\n";
            assert.equal(file.write(), expected);
        });
    });
});

//# sourceMappingURL=exportableDefinitionWriteTests.js.map
