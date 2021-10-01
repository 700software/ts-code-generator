"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("TypeAliasWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.TypeAliasWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def]), mocks.getExportableWriter(writer, def), mocks.getAmbientableWriter(writer, def), mocks.getTypeWriter(writer, [def.type]), mocks.getTypeParametersWriter(writer, def.typeParameters || []));
        return { writer: writer, defWriter: defWriter, def: def };
    }
    describe("write", function () {
        var prefix = "{start}{doc-comment}{export-keyword:0}{declare-keyword}type ";
        var suffix = ";{end}";
        it("should write out the type alias", function () {
            var def = new definitions_1.TypeAliasDefinition();
            def.name = "Name";
            def.setType("string");
            def.addTypeParameter({ name: "T" });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name{type-parameters} = {type:string:any}" + suffix);
        });
    });
});

//# sourceMappingURL=TypeAliasWriterTests.js.map
