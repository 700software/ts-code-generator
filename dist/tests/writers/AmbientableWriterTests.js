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
describe("AmbientableWriter", function () {
    var MockAmbientableDefinition = (function (_super) {
        __extends(MockAmbientableDefinition, _super);
        function MockAmbientableDefinition() {
            _super.apply(this, arguments);
        }
        return MockAmbientableDefinition;
    }(definitions_1.AmbientableDefinition));
    function getWriteResult(hasDeclareKeyword) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.AmbientableWriter(writer);
        var def = new MockAmbientableDefinition();
        def.hasDeclareKeyword = hasDeclareKeyword;
        defWriter.writeDeclareKeyword(def);
        return writer.toString();
    }
    describe("writeDeclareKeyword", function () {
        it("should write when hasDeclareKeyword", function () {
            chai_1.expect(getWriteResult(true)).to.equal("declare ");
        });
        it("should not write anything when not hasDeclareKeyword", function () {
            chai_1.expect(getWriteResult(false)).to.equal("");
        });
    });
});

//# sourceMappingURL=AmbientableWriterTests.js.map
