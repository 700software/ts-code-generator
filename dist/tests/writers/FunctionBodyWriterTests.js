"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
describe("FunctionBodyWriter", function () {
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.FunctionBodyWriter(writer);
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        it("should write out the function body when it's defined", function () {
            var def = new definitions_1.FunctionDefinition();
            def.onWriteFunctionBody = function (writer) { return writer.write("body"); };
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("{\n    body\n}\n");
        });
        it("should write out the function body when it's not defined", function () {
            var def = new definitions_1.FunctionDefinition();
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("{\n}\n");
        });
        it("should not write out the function body if it's ambient", function () {
            var def = new definitions_1.FunctionDefinition();
            def.isAmbient = true;
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(";");
        });
        it("should not write out the function body if it's abstract", function () {
            var def = new definitions_1.ClassMethodDefinition();
            def.isAbstract = true;
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(";");
        });
        it("should not write out the function body if " + "HideFunctionBodies" + " is set", function () {
            var def = new definitions_1.FunctionDefinition();
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.HideFunctionBodies);
            chai_1.expect(writer.toString()).to.equal(";");
        });
        it("should not write out the function body if it is an " + "InterfaceMethodDefinition", function () {
            var def = new definitions_1.InterfaceMethodDefinition();
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(";");
        });
    });
});

//# sourceMappingURL=FunctionBodyWriterTests.js.map
