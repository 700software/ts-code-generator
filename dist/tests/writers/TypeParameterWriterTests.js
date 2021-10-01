"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("TypeParameterWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.TypeParameterWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getTypeWriter(writer, [def.constraintType]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write out the type parameter", function () {
            var def = new definitions_1.TypeParameterDefinition();
            def.name = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name" + suffix);
        });
        it("should write out the type parameter with an extends type", function () {
            var def = new definitions_1.TypeParameterDefinition();
            def.setConstraintType("string");
            def.name = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name extends {type:string:any}" + suffix);
        });
    });
});

//# sourceMappingURL=TypeParameterWriterTests.js.map
