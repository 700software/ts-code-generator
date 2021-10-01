"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
describe("VariableDeclarationTypeWriter", function () {
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.VariableDeclarationTypeWriter(writer);
        return { writer: writer, defWriter: defWriter };
    }
    describe("writeDeclarationType", function () {
        function doWriteTest(declarationType, expectedText) {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeDeclarationType(declarationType);
            chai_1.expect(writer.toString()).to.equal(expectedText);
        }
        it("should write var for var", function () {
            doWriteTest(definitions_1.VariableDeclarationType.Var, "var");
        });
        it("should write let for let", function () {
            doWriteTest(definitions_1.VariableDeclarationType.Let, "let");
        });
        it("should write const for const", function () {
            doWriteTest(definitions_1.VariableDeclarationType.Const, "const");
        });
        it("should write var for invalid input", function () {
            doWriteTest(-1, "var");
        });
    });
});

//# sourceMappingURL=VariableDeclarationTypeWriterTests.js.map
