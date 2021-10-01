"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("VariableWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.VariableWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def]), mocks.getExportableWriter(writer, def), mocks.getAmbientableWriter(writer, def), mocks.getTypeWithDefaultExpressionWriter(writer, [def]), mocks.getVariableDeclarationWriter(writer, def.declarationType));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}{doc-comment}{export-keyword:0}{declare-keyword}{var-declaration-type}";
        var suffix = ";{end}";
        it("should write out the variable", function () {
            var def = new definitions_1.VariableDefinition();
            def.name = "Name";
            def.setType("string");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + " Name{type-with-default:0:any}" + suffix);
        });
    });
});

//# sourceMappingURL=VariableWriterTests.js.map
