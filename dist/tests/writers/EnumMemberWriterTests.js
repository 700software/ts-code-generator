"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("EnumMemberWriter", function () {
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var def = new definitions_1.EnumMemberDefinition();
        var defWriter = new writers_1.EnumMemberWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def]));
        return { writer: writer, defWriter: defWriter, def: def };
    }
    describe("write", function () {
        it("should write out the enum member", function () {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter, def = _a.def;
            def.name = "Name";
            def.value = 1;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal("{start}{doc-comment}Name = 1{end}");
        });
    });
});

//# sourceMappingURL=EnumMemberWriterTests.js.map
