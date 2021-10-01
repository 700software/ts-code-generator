import * as assert from "assert";
import {createFile} from "./../../../createFunctions";

describe("EnumDefinition", () => {
    const file = createFile({
        enums: [{
            name: "MyEnum",
            documentationComment: "/**\n * Some description\n */",
            members: [{
                name: "enumMember1",
                value: 1,
                documentationComment: "/**\n * Some enum member description\n */"
            }, {
                name: "enumMember2",
                value: 2
            }]
        }, {
            name: "MyDeclareConstEnum",
            isConst: true,
            hasDeclareKeyword: true
        }, {
            name: "MyExportedConstEnum",
            isConst: true,
            isExported: true
        }]
    });

    describe("#write()", () => {
        it("should contain the enum written out with documentation comment", () => {
            const expected =
`/**
 * Some description
 */
enum MyEnum {
    /**
     * Some enum member description
     */
    enumMember1 = 1,
    enumMember2 = 2
}
`;
            assert.equal(file.enums[0].write(), expected);
        });

        it("should contain the declared const enum written out", () => {
            const expected =
`declare const enum MyDeclareConstEnum {
}
`;
            assert.equal(file.enums[1].write(), expected);
        });

        it("should contain the exported const enum written out", () => {
            const expected =
`export const enum MyExportedConstEnum {
}
`;
            assert.equal(file.enums[2].write(), expected);
        });
    });
});
