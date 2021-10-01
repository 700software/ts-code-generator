"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("EnumWriter", function () {
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var def = new definitions_1.EnumDefinition();
        var defWriter = new writers_1.EnumWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def]), mocks.getExportableWriter(writer, def), mocks.getAmbientableWriter(writer, def), mocks.getEnumMemberWriter(writer));
        return { writer: writer, defWriter: defWriter, def: def };
    }
    describe("write", function () {
        var prefix = "{start}{doc-comment}{export-keyword:0}{declare-keyword}";
        var suffix = "\n{end}";
        it("should write out the enum with no members", function () {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter, def = _a.def;
            def.name = "Name";
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "enum Name {\n}" + suffix);
        });
        it("should write out the enum that's const", function () {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter, def = _a.def;
            def.name = "Name";
            def.isConst = true;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "const enum Name {\n}" + suffix);
        });
        it("should write out an enum member", function () {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter, def = _a.def;
            def.name = "Name";
            def.addMember({ name: "member", value: 1 });
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "enum Name {\n    {enum-member:member}\n}" + suffix);
        });
        it("should write out enum members", function () {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter, def = _a.def;
            def.name = "Name";
            def.addMember({ name: "member1", value: 1 });
            def.addMember({ name: "member2", value: 5 });
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "enum Name {\n    {enum-member:member1},\n    {enum-member:member2}\n}" + suffix);
        });
    });
});

//# sourceMappingURL=EnumWriterTests.js.map
