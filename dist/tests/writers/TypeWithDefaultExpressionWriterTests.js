"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("TypeWithDefaultExpressionWriter", function () {
    var MockDefinition = (function () {
        function MockDefinition(typeText, isOptional) {
            if (isOptional === void 0) { isOptional = false; }
            this.isOptional = isOptional;
            this.type = new definitions_1.TypeDefinition();
            this.type.text = typeText;
        }
        MockDefinition.prototype.setType = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            return this;
        };
        MockDefinition.prototype.setDefaultExpression = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            return this;
        };
        return MockDefinition;
    }());
    function createObjects(def, shouldWriteDefaultExpression) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.TypeWithDefaultExpressionWriter(writer, mocks.getTypeWriter(writer, [def.type]), mocks.getDefaultExpressionedWriter(writer, [def], [shouldWriteDefaultExpression]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        function doWriteTest(def, flags, shouldWriteDefaultExpression, expectedText) {
            var _a = createObjects(def, shouldWriteDefaultExpression), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, flags, "any");
            chai_1.expect(writer.toString()).to.equal(expectedText);
        }
        it("should write the default expression if it should be written", function () {
            var def = new MockDefinition("str");
            doWriteTest(def, WriteFlags_1.WriteFlags.None, true, " = {default-expression:0}");
        });
        it("should write the type if the default expression should not be written", function () {
            var def = new MockDefinition("str");
            doWriteTest(def, WriteFlags_1.WriteFlags.HideExpressions, false, ": {type:str:any}");
        });
    });
    describe("writeWithOptionalCheck", function () {
        function doWriteWithOptionalTest(def, flags, shouldWriteDefaultExpression, expectedText) {
            var _a = createObjects(def, shouldWriteDefaultExpression), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeWithOptionalCheck(def, flags, "any");
            chai_1.expect(writer.toString()).to.equal(expectedText);
        }
        it("should write the type and default expression if the definition is optional and the default expression should be written", function () {
            var def = new MockDefinition("str", true);
            doWriteWithOptionalTest(def, WriteFlags_1.WriteFlags.None, true, ": {type:str:any} = {default-expression:0}");
        });
        it("should write the default expression if the definition is not optional and the default expression should be written", function () {
            var def = new MockDefinition("str", false);
            doWriteWithOptionalTest(def, WriteFlags_1.WriteFlags.None, true, " = {default-expression:0}");
        });
        it("should only write the type if the default expression should not be written", function () {
            var def = new MockDefinition("str", false);
            doWriteWithOptionalTest(def, WriteFlags_1.WriteFlags.HideExpressions, false, ": {type:str:any}");
        });
    });
});

//# sourceMappingURL=TypeWithDefaultExpressionWriterTests.js.map
