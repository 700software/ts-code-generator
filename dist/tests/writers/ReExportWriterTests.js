"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("ReExportWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ReExportWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getNamedImportPartsWriter(writer, def.namedExports || []));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}export ";
        var suffix = ";{end}";
        it("should write out the re-export without named exports if none exist", function () {
            var def = new definitions_1.ReExportDefinition();
            def.moduleSpecifier = "test";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "* from \"test\"" + suffix);
        });
        it("should write out the re-export with named exports if they exist", function () {
            var def = new definitions_1.ReExportDefinition();
            def.moduleSpecifier = "test";
            def.addNamedExport({ name: "export" });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "{named-import-parts} from \"test\"" + suffix);
        });
    });
});

//# sourceMappingURL=ReExportWriterTests.js.map
