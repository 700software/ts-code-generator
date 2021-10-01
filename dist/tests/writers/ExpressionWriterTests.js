"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
describe("ExpressionWriter", function () {
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ExpressionWriter(writer);
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        function doWriteTest(def, expectedText) {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(expectedText);
        }
        it("should write the text", function () {
            var def = new definitions_1.ExpressionDefinition();
            def.text = "text";
            doWriteTest(def, "text");
        });
        it("should not write the text if the definition is null", function () {
            doWriteTest(null, "");
        });
        it("should not write the text if the definition text is null", function () {
            var def = new definitions_1.ExpressionDefinition();
            doWriteTest(def, "");
        });
        it("should not write the text if the definition text is empty", function () {
            var def = new definitions_1.ExpressionDefinition();
            def.text = "";
            doWriteTest(def, "");
        });
        it("should not write the text if the definition text is whitespace", function () {
            var def = new definitions_1.ExpressionDefinition();
            def.text = "   \t   ";
            doWriteTest(def, "");
        });
    });
    describe("writeWithEqualsSign", function () {
        function doWriteWithEqualsSignTest(def, expectedText) {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeWithEqualsSign(def);
            chai_1.expect(writer.toString()).to.equal(expectedText);
        }
        it("should write the text", function () {
            var def = new definitions_1.ExpressionDefinition();
            def.text = "text";
            doWriteWithEqualsSignTest(def, " = text");
        });
        it("should not write the text if the definition is null", function () {
            doWriteWithEqualsSignTest(null, "");
        });
        it("should not write the text if the definition text is null", function () {
            var def = new definitions_1.ExpressionDefinition();
            doWriteWithEqualsSignTest(def, "");
        });
        it("should not write the text if the definition text is empty", function () {
            var def = new definitions_1.ExpressionDefinition();
            def.text = "";
            doWriteWithEqualsSignTest(def, "");
        });
        it("should not write the text if the definition text is whitespace", function () {
            var def = new definitions_1.ExpressionDefinition();
            def.text = "   \t   ";
            doWriteWithEqualsSignTest(def, "");
        });
    });
});

//# sourceMappingURL=ExpressionWriterTests.js.map
