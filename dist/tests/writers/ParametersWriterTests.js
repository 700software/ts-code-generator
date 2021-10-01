"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("ParametersWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ParametersWriter(writer, mocks.getParameterWriter(writer, def.parameters), mocks.getParameterWithDestructuringWriter(writer, def.parameters), mocks.getTypeWriter(writer, def.parameters.map(function (p) { return p.type; })));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        it("should write out the parameter", function () {
            var def = new definitions_1.ClassMethodDefinition();
            def.addParameter({
                name: "myParam",
                type: "string"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("({parameter:0})");
        });
        it("should write out the parameters", function () {
            var def = new definitions_1.ClassMethodDefinition();
            def.addParameter({
                name: "myParam",
                type: "string"
            });
            def.addParameter({
                name: "myParam2",
                type: "string"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("({parameter:0}, {parameter:0})");
        });
        it("should write out the this type", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setThisType("string");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("(this: {type:string:any})");
        });
        it("should write out the this type and parameter", function () {
            var def = new definitions_1.FunctionDefinition();
            def.setThisType("string");
            def.addParameter({
                name: "myParam",
                type: "string"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("(this: {type:string:any}, {parameter:0})");
        });
        it("should write out a destructuring parameter", function () {
            var def = new definitions_1.ClassMethodDefinition();
            def.addParameter({
                name: "myParam",
                type: "string"
            });
            def.addParameter({
                destructuringProperties: [{
                        name: "myProp",
                        type: "string"
                    }]
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("({parameter:0}, {destructuring-param:0})");
        });
    });
});

//# sourceMappingURL=ParametersWriterTests.js.map
