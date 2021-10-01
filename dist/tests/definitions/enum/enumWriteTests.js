"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
describe("EnumDefinition", function () {
    var file = createFunctions_1.createFile({
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
    describe("#write()", function () {
        it("should contain the enum written out with documentation comment", function () {
            var expected = "/**\n * Some description\n */\nenum MyEnum {\n    /**\n     * Some enum member description\n     */\n    enumMember1 = 1,\n    enumMember2 = 2\n}\n";
            assert.equal(file.enums[0].write(), expected);
        });
        it("should contain the declared const enum written out", function () {
            var expected = "declare const enum MyDeclareConstEnum {\n}\n";
            assert.equal(file.enums[1].write(), expected);
        });
        it("should contain the exported const enum written out", function () {
            var expected = "export const enum MyExportedConstEnum {\n}\n";
            assert.equal(file.enums[2].write(), expected);
        });
    });
});

//# sourceMappingURL=enumWriteTests.js.map
