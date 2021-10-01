"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var createFunctions_1 = require("./../../createFunctions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("DecoratorWriter", function () {
    function getObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.DecoratorWriter(writer, mocks.getBaseDefinitionWriter(writer, def));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write the decorator", function () {
            var def = createFunctions_1.createDecorator({ name: "decorator" });
            var _a = getObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "@decorator" + suffix);
        });
        it("should write the decorator with one argument", function () {
            var def = createFunctions_1.createDecorator({
                name: "decorator",
                arguments: ["5"]
            });
            var _a = getObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "@decorator(5)" + suffix);
        });
        it("should write the decorator with multiple arguments", function () {
            var def = createFunctions_1.createDecorator({
                name: "decorator",
                arguments: ["5", "6"]
            });
            var _a = getObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "@decorator(5, 6)" + suffix);
        });
        it("should not write the decorator if the " + "HideFunctionImplementations" + " flag is set", function () {
            var def = createFunctions_1.createDecorator({ name: "decorator" });
            var _a = getObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.HideFunctionImplementations);
            chai_1.expect(writer.toString()).to.equal("");
        });
    });
});

//# sourceMappingURL=DecoratorWriterTests.js.map
