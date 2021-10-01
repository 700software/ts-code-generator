"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var createFunctions_1 = require("./../../createFunctions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("TypeParametersWriter", function () {
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.TypeParametersWriter(writer, mocks.getTypeParameterWriter(writer));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        it("should write out the one type parameter surrounded in angle brackets", function () {
            var defs = [createFunctions_1.createTypeParameter({ name: "1" })];
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(defs);
            chai_1.expect(writer.toString()).to.equal("<{type-parameter:1}>");
        });
        it("should write out the multiple type parameters surrounded in angle brackets, separated by commas", function () {
            var defs = [createFunctions_1.createTypeParameter({ name: "1" }), createFunctions_1.createTypeParameter({ name: "2" })];
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(defs);
            chai_1.expect(writer.toString()).to.equal("<{type-parameter:1}, {type-parameter:2}>");
        });
    });
});

//# sourceMappingURL=TypeParametersWriterTests.js.map
