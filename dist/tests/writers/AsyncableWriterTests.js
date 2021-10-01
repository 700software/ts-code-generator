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
describe("AsyncableWriter", function () {
    var MockAsyncableDefinition = (function (_super) {
        __extends(MockAsyncableDefinition, _super);
        function MockAsyncableDefinition() {
            _super.apply(this, arguments);
        }
        return MockAsyncableDefinition;
    }(definitions_1.AsyncableDefinition));
    function getWriteResult(isAsync) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.AsyncableWriter(writer);
        var def = new MockAsyncableDefinition();
        def.isAsync = isAsync;
        defWriter.writeAsyncKeyword(def);
        return writer.toString();
    }
    describe("writeAsyncKeyword", function () {
        it("should write when is async", function () {
            chai_1.expect(getWriteResult(true)).to.equal("async ");
        });
        it("should not write anything when not async", function () {
            chai_1.expect(getWriteResult(false)).to.equal("");
        });
    });
});

//# sourceMappingURL=AsyncableWriterTests.js.map
