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
describe("BaseDefinitionWriter", function () {
    var MockBaseDefinition = (function (_super) {
        __extends(MockBaseDefinition, _super);
        function MockBaseDefinition() {
            _super.apply(this, arguments);
        }
        return MockBaseDefinition;
    }(definitions_1.BaseDefinition));
    function createObjects() {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.BaseDefinitionWriter(writer);
        var def = new MockBaseDefinition();
        return { writer: writer, defWriter: defWriter, def: def };
    }
    describe("writeWrap", function () {
        it("should do the onBeforeWrite action, then the callback, then the onAfterWrite action", function () {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter, def = _a.def;
            def.onBeforeWrite = function (w) { return w.write("start"); };
            def.onAfterWrite = function (w) { return w.write("end"); };
            defWriter.writeWrap(def, function () { return writer.write("middle"); });
            chai_1.expect(writer.toString()).to.equal("startmiddleend");
        });
        it("should not do onBeforeWrite or onAfterWrite if they are not specified", function () {
            var _a = createObjects(), writer = _a.writer, defWriter = _a.defWriter, def = _a.def;
            defWriter.writeWrap(def, function () { return writer.write("middle"); });
            chai_1.expect(writer.toString()).to.equal("middle");
        });
    });
});

//# sourceMappingURL=BaseDefinitionWriterTests.js.map
