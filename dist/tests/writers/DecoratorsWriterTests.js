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
var mocks = require("./mocks");
describe("DecoratorsWriter", function () {
    var MockDecoratableDefinition = (function (_super) {
        __extends(MockDecoratableDefinition, _super);
        function MockDecoratableDefinition() {
            _super.apply(this, arguments);
        }
        return MockDecoratableDefinition;
    }(definitions_1.DecoratableDefinition));
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.DecoratorsWriter(writer, mocks.getDecoratorWriter(writer));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        it("should write out the decorator", function () {
            var def = new MockDecoratableDefinition();
            def.addDecorator({
                name: "t"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("{decorator:t:0}\n");
        });
        it("should write out the decorators separated by newlines", function () {
            var def = new MockDecoratableDefinition();
            def.addDecorator({
                name: "t"
            });
            def.addDecorator({
                name: "u"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("{decorator:t:0}\n{decorator:u:0}\n");
        });
    });
});

//# sourceMappingURL=DecoratorsWriterTests.js.map
