"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("IndexSignatureWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.IndexSignatureWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getTypeWriter(writer, [def.keyType, def.returnType]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write out the index signature", function () {
            var def = new definitions_1.IndexSignatureDefinition();
            def.keyName = "keyName";
            def.setKeyType("string");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "[keyName: {type:string:any}]: {type:any};" + suffix);
        });
        it("should write out the index signature with readonly keyword", function () {
            var def = new definitions_1.IndexSignatureDefinition();
            def.isReadonly = true;
            def.keyName = "keyName";
            def.setKeyType("string");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "readonly [keyName: {type:string:any}]: {type:any};" + suffix);
        });
    });
});

//# sourceMappingURL=IndexSignatureWriterTests.js.map
