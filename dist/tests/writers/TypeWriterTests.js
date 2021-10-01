"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
describe("TypeWriter", function () {
    function getObjects() {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.TypeWriter(writer);
        return { writer: writer, defWriter: defWriter };
    }
    function doTests(methodName, expectedPrefix) {
        it("should write the type", function () {
            var _a = getObjects(), writer = _a.writer, defWriter = _a.defWriter;
            var def = new definitions_1.TypeDefinition();
            def.text = "string";
            defWriter[methodName](def, "any");
            chai_1.expect(writer.toString()).to.equal(expectedPrefix + "string");
        });
        it("should write the fallback type when the definition is null", function () {
            var _a = getObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter[methodName](null, "any");
            chai_1.expect(writer.toString()).to.equal(expectedPrefix + "any");
        });
        it("should write the fallback type when the definition text is null", function () {
            var _a = getObjects(), writer = _a.writer, defWriter = _a.defWriter;
            var def = new definitions_1.TypeDefinition();
            def.text = null;
            defWriter[methodName](def, "any");
            chai_1.expect(writer.toString()).to.equal(expectedPrefix + "any");
        });
        it("should write the fallback type when the definition text is empty", function () {
            var _a = getObjects(), writer = _a.writer, defWriter = _a.defWriter;
            var def = new definitions_1.TypeDefinition();
            def.text = "";
            defWriter[methodName](def, "any");
            chai_1.expect(writer.toString()).to.equal(expectedPrefix + "any");
        });
        it("should write the fallback type when the definition text is whitespace", function () {
            var _a = getObjects(), writer = _a.writer, defWriter = _a.defWriter;
            var def = new definitions_1.TypeDefinition();
            def.text = "  \t  ";
            defWriter[methodName](def, "any");
            chai_1.expect(writer.toString()).to.equal(expectedPrefix + "any");
        });
    }
    describe("writeWithColon", function () {
        doTests("writeWithColon", ": ");
    });
    describe("writeWithEqualsSign", function () {
        doTests("writeWithEqualsSign", " = ");
    });
    describe("write", function () {
        doTests("write", "");
    });
});

//# sourceMappingURL=TypeWriterTests.js.map
