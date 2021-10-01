"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
describe("ScopeWriter", function () {
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ScopeWriter(writer);
        return { writer: writer, defWriter: defWriter };
    }
    describe("writeScope", function () {
        function doWriteTest(scope, expectedText) {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeScope(scope);
            chai_1.expect(writer.toString()).to.equal(expectedText);
        }
        it("should write private for private", function () {
            doWriteTest(definitions_1.Scope.Private, "private ");
        });
        it("should write protected for protected", function () {
            doWriteTest(definitions_1.Scope.Protected, "protected ");
        });
        it("should write nothing for public", function () {
            doWriteTest(definitions_1.Scope.Public, "");
        });
        it("should write nothing for invalid input", function () {
            doWriteTest(-1, "");
        });
        it("should write nothing for null", function () {
            doWriteTest(null, "");
        });
    });
});

//# sourceMappingURL=ScopeWriterTests.js.map
