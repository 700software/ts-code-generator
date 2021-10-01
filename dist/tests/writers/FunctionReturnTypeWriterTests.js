"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("FunctionReturnTypeWriter", function () {
    function createObjects(def, willWrites) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.FunctionReturnTypeWriter(writer, mocks.getFunctionBodyWriter(writer, [def], willWrites), mocks.getTypeWriter(writer, [def.returnType]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        it("should write out the type when function body writer's will write is false", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setReturnType("string");
            var _a = createObjects(def, [false]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(": {type:string:any}");
        });
        it("should not write out the type when function body writer's will write is true", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setReturnType("string");
            var _a = createObjects(def, [true]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("");
        });
        it("should write out the type when function body writer's will write is true, but it has an overload signature", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setReturnType("string");
            def.addOverloadSignature({});
            var _a = createObjects(def, [true]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(": {type:string:any}");
        });
        it("should write out the user defined type guard when set and has a parameter", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setUserDefinedTypeGuard({
                parameterName: "name",
                type: "BaseDefinition"
            });
            var _a = createObjects(def, [true]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(": name is BaseDefinition");
        });
        it("should write out the user defined type guard when set and has a parameter and will write is false", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setUserDefinedTypeGuard({
                parameterName: "name",
                type: "BaseDefinition"
            });
            var _a = createObjects(def, [false]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(": name is BaseDefinition");
        });
        it("should write out the user defined type guard with this when no parameter name is specified", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setUserDefinedTypeGuard({
                parameterName: "",
                type: "BaseDefinition"
            });
            def.userDefinedTypeGuard.parameterName = null;
            var _a = createObjects(def, [true]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(": this is BaseDefinition");
        });
    });
});

//# sourceMappingURL=FunctionReturnTypeWriterTests.js.map
