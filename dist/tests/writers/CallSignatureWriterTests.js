"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("CallSignatureWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.CallSignatureWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getTypeParametersWriter(writer, def.typeParameters), mocks.getTypeWriter(writer, [def.returnType]), mocks.getParametersWriter(writer, [def]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write out the call signature", function () {
            var def = new definitions_1.CallSignatureDefinition();
            def.addTypeParameter({ name: "T" });
            def.addParameter({ name: "param" });
            def.setReturnType("string");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "{type-parameters}({parameters:0}): {type:string:any}" + suffix);
        });
    });
});

//# sourceMappingURL=CallSignatureWriterTests.js.map
