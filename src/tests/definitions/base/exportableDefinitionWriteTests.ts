import * as assert from "assert";
import {createFile} from "./../../../createFunctions";

describe("ExportableDefinition", () => {
    describe("named exports", () => {
        const myFile = createFile({
            namespaces: [{ name: "MyNamespace", isExported: true }],
            interfaces: [{ name: "MyInterface", isExported: true }],
            classes: [{ name: "MyClass", isExported: true }],
            enums: [{ name: "MyEnum", isExported: true }],
            functions: [{ name: "myFunction", isExported: true }]
        });

        describe("write()", () => {
            it("should contain the file written out with export keywords", () => {
                const expected =
`export interface MyInterface {
}

export enum MyEnum {
}

export class MyClass {
}

export namespace MyNamespace {
}

export function myFunction() {
}
`;
                assert.equal(myFile.write(), expected);
            });
        });
    });

    describe("default export statements", () => {
        it("should write export default for a namespace", () => {
            const file = createFile({
                namespaces: [{ name: "MyNamespace", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyNamespace"
            });
            const expected = `namespace MyNamespace {\n}\n\nexport default MyNamespace;\n`;
            assert.equal(file.write(), expected);
        });

        it("should write export default for an interface", () => {
            const file = createFile({
                interfaces: [{ name: "MyInterface", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyInterface"
            });
            const expected = `interface MyInterface {\n}\n\nexport default MyInterface;\n`;
            assert.equal(file.write(), expected);
        });

        it("should write export default for a class", () => {
            const file = createFile({
                classes: [{ name: "MyClass", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyClass"
            });
            const expected = `class MyClass {\n}\n\nexport default MyClass;\n`;
            assert.equal(file.write(), expected);
        });

        it("should write export default for an enum", () => {
            const file = createFile({
                enums: [{ name: "MyEnum", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyEnum"
            });
            const expected = `enum MyEnum {\n}\n\nexport default MyEnum;\n`;
            assert.equal(file.write(), expected);
        });

        it("should write export default for a function", () => {
            const file = createFile({
                functions: [{ name: "MyFunction", isDefaultExportOfFile: true }],
                defaultExportExpression: "MyFunction"
            });
            const expected = `function MyFunction() {\n}\n\nexport default MyFunction;\n`;
            assert.equal(file.write(), expected);
        });
    });
});
