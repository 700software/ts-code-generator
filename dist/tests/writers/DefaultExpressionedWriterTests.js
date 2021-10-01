"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("DefaultExpressionedWriter", function () {
    var MockDefinition = (function () {
        function MockDefinition(expressionText) {
            if (expressionText != null) {
                this.defaultExpression = new definitions_1.ExpressionDefinition();
                this.defaultExpression.text = expressionText;
            }
        }
        MockDefinition.prototype.setDefaultExpression = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            return this;
        };
        return MockDefinition;
    }());
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.DefaultExpressionedWriter(writer, mocks.getExpressionWriter(writer, [def.defaultExpression]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("writeWithEqualsSign", function () {
        function doWriteTest(def, flags, expectedText) {
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeWithEqualsSign(def, flags);
            chai_1.expect(writer.toString()).to.equal(expectedText);
        }
        it("should write the default expression if the default expression contains non whitespace text and the HideExpressions flag is not on", function () {
            var def = new MockDefinition("expr");
            doWriteTest(def, WriteFlags_1.WriteFlags.None, " = {expression:expr}");
        });
        it("should not write the default expression if it contains non whitespace text and the HideExpressions flag is on", function () {
            var def = new MockDefinition("expr");
            doWriteTest(def, WriteFlags_1.WriteFlags.HideExpressions, "");
        });
        it("should write nothing if the default expression contains non whitespace text", function () {
            var def = new MockDefinition("   \t   ");
            doWriteTest(def, WriteFlags_1.WriteFlags.None, "");
        });
        it("should write nothing if the default expression is null", function () {
            var def = new MockDefinition(null);
            doWriteTest(def, WriteFlags_1.WriteFlags.None, "");
        });
    });
});

//# sourceMappingURL=DefaultExpressionedWriterTests.js.map
