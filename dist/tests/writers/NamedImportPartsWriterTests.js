"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var createFunctions_1 = require("./../../createFunctions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("NamedImportPartsWriter", function () {
    function createObjects(defs) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.NamedImportPartsWriter(writer, mocks.getNamedImportPartWriter.apply(mocks, [writer].concat(defs)));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        it("should write nothing if there are no named imports", function () {
            var defs = [];
            var _a = createObjects(defs), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(defs);
            chai_1.expect(writer.toString()).to.equal("");
        });
        it("should write out the one named import part surrounded in braces", function () {
            var defs = [createFunctions_1.createNamedImportPart({ name: "1" })];
            var _a = createObjects(defs), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(defs);
            chai_1.expect(writer.toString()).to.equal("{{named-import-part:1}}");
        });
        it("should write out the multiple named import parts surrounded in braces, separated by commas", function () {
            var defs = [createFunctions_1.createNamedImportPart({ name: "1" }), createFunctions_1.createNamedImportPart({ name: "2" })];
            var _a = createObjects(defs), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(defs);
            chai_1.expect(writer.toString()).to.equal("{{named-import-part:1}, {named-import-part:2}}");
        });
    });
});

//# sourceMappingURL=NamedImportPartsWriterTests.js.map
