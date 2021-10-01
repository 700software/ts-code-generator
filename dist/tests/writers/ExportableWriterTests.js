"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
describe("ExportableWriter", function () {
    var MockExportableDefinition = (function (_super) {
        __extends(MockExportableDefinition, _super);
        function MockExportableDefinition() {
            _super.apply(this, arguments);
        }
        return MockExportableDefinition;
    }(definitions_1.ExportableDefinition));
    function getWriteResult(def, writeFlags) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ExportableWriter(writer);
        defWriter.writeExportKeyword(def, writeFlags);
        return writer.toString();
    }
    describe("writeExportKeyword", function () {
        it("should not write anything for something not exported", function () {
            var def = new MockExportableDefinition();
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.None)).to.equal("");
        });
        it("should not write anything for a default export", function () {
            var def = new MockExportableDefinition();
            def.isDefaultExportOfFile = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.None)).to.equal("");
        });
        it("should write export for a named export that's also a default export", function () {
            var def = new MockExportableDefinition();
            def.isNamedExportOfFile = true;
            def.isDefaultExportOfFile = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.None)).to.equal("export ");
        });
        it("should write export for a named export", function () {
            var def = new MockExportableDefinition();
            def.isNamedExportOfFile = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.None)).to.equal("export ");
        });
        it("should not write for an exported ambient definition", function () {
            var def = new MockExportableDefinition();
            def.isNamedExportOfFile = true;
            def.isAmbient = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.None)).to.equal("");
        });
        it("should write for an exported type alias", function () {
            var def = new definitions_1.TypeAliasDefinition();
            def.isNamedExportOfFile = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.None)).to.equal("export ");
        });
        it("should not write for a type alias when is in ambient context", function () {
            var def = new definitions_1.TypeAliasDefinition();
            def.isNamedExportOfFile = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.IsInAmbientContext)).to.equal("");
        });
        it("should write for an exported interface", function () {
            var def = new definitions_1.InterfaceDefinition();
            def.isNamedExportOfFile = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.None)).to.equal("export ");
        });
        it("should not write for a interface when is in ambient context", function () {
            var def = new definitions_1.InterfaceDefinition();
            def.isNamedExportOfFile = true;
            chai_1.expect(getWriteResult(def, WriteFlags_1.WriteFlags.IsInAmbientContext)).to.equal("");
        });
    });
});

//# sourceMappingURL=ExportableWriterTests.js.map
