import * as assert from "assert";
import {createFile} from "./../../../createFunctions";

describe("NamespaceDefinition", () => {
    const myFile = createFile({
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

    describe("#write()", () => {
        describe("MyNamespace", () => {
            it("should contain everything written out", () => {
                const expected =
`/**
 * Some description
 */
namespace MyNamespace {
    type myType = string;
    type mySecondType = string | number;

    interface MyInterface {
    }

    enum MyEnum {
    }

    class MyClass {
    }

    namespace MyNamespace {
    }

    function myFunction() {
    }

    let myVar: any;
    let mySecondVar: any;
}
`;
                assert.equal(myFile.namespaces[0].write(), expected);
            });
        });

        describe("MyNamespace2", () => {
            it("should contain everything written out", () => {
                const expected =
`namespace MyNamespace2 {
}
`;
                assert.equal(myFile.namespaces[1].write(), expected);
            });
        });
    });
});
