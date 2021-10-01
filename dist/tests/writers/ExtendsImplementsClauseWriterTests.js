"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
describe("ExtendsImplementsClauseWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ExtendsImplementsClauseWriter(writer);
        return { writer: writer, defWriter: defWriter };
    }
    describe("writeExtends", function () {
        it("should write out the extends clause", function () {
            var def = new definitions_1.ClassDefinition();
            def.addExtends("Test");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeExtends(def);
            chai_1.expect(writer.toString()).to.equal(" extends Test");
        });
        it("should write out the extends clause when there are multiple", function () {
            var def = new definitions_1.ClassDefinition();
            def.addExtends("Test");
            def.addExtends("Test2");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeExtends(def);
            chai_1.expect(writer.toString()).to.equal(" extends Test, Test2");
        });
        it("should write out array types in the form Array<T>", function () {
            var def = new definitions_1.ClassDefinition();
            def.addExtends("string[]");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeExtends(def);
            chai_1.expect(writer.toString()).to.equal(" extends Array<string>");
        });
    });
    describe("writeExtends", function () {
        it("should write out the implements clause", function () {
            var def = new definitions_1.ClassDefinition();
            def.addImplements("Test");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeImplements(def);
            chai_1.expect(writer.toString()).to.equal(" implements Test");
        });
        it("should write out the implements clause when there are multiple", function () {
            var def = new definitions_1.ClassDefinition();
            def.addImplements("Test");
            def.addImplements("Test2");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeImplements(def);
            chai_1.expect(writer.toString()).to.equal(" implements Test, Test2");
        });
        it("should write out array types in the form Array<T>", function () {
            var def = new definitions_1.ClassDefinition();
            def.addImplements("string[]");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.writeImplements(def);
            chai_1.expect(writer.toString()).to.equal(" implements Array<string>");
        });
    });
});

//# sourceMappingURL=ExtendsImplementsClauseWriterTests.js.map
