"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("NamedImportPartWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.NamedImportPartWriter(writer, mocks.getBaseDefinitionWriter(writer, def));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write out the named import part", function () {
            var def = new definitions_1.NamedImportPartDefinition();
            def.name = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name" + suffix);
        });
        it("should write out the named import part with the alias", function () {
            var def = new definitions_1.NamedImportPartDefinition();
            def.name = "Name";
            def.alias = "Alias";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name as Alias" + suffix);
        });
        it("should write out the named import part without the alias when they are equal", function () {
            var def = new definitions_1.NamedImportPartDefinition();
            def.name = "Name";
            def.alias = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name" + suffix);
        });
    });
});

//# sourceMappingURL=NamedImportPartWriterTests.js.map
