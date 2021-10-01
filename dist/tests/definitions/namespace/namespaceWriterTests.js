"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
describe("NamespaceDefinition", function () {
    var myFile = createFunctions_1.createFile({
        namespaces: [{
                name: "MyNamespace",
                documentationComment: "/**\n * Some description\n */",
                typeAliases: [{
                        name: "myType",
                        type: "string"
                    }, {
                        name: "mySecondType",
                        type: "string | number"
                    }],
                namespaces: [{ name: "MyNamespace" }],
                interfaces: [{ name: "MyInterface" }],
                classes: [{ name: "MyClass" }],
                enums: [{ name: "MyEnum" }],
                functions: [{ name: "myFunction" }],
                variables: [{ name: "myVar" }, { name: "mySecondVar" }]
            }, {
                name: "MyNamespace2"
            }]
    });
    describe("#write()", function () {
        describe("MyNamespace", function () {
            it("should contain everything written out", function () {
                var expected = "/**\n * Some description\n */\nnamespace MyNamespace {\n    type myType = string;\n    type mySecondType = string | number;\n\n    interface MyInterface {\n    }\n\n    enum MyEnum {\n    }\n\n    class MyClass {\n    }\n\n    namespace MyNamespace {\n    }\n\n    function myFunction() {\n    }\n\n    let myVar: any;\n    let mySecondVar: any;\n}\n";
                assert.equal(myFile.namespaces[0].write(), expected);
            });
        });
        describe("MyNamespace2", function () {
            it("should contain everything written out", function () {
                var expected = "namespace MyNamespace2 {\n}\n";
                assert.equal(myFile.namespaces[1].write(), expected);
            });
        });
    });
});

//# sourceMappingURL=namespaceWriterTests.js.map
