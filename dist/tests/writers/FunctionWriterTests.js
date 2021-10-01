"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var createFunctions_1 = require("./../../createFunctions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("FunctionWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.FunctionWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, def.overloadSignatures.concat([def])), mocks.getDecoratorsWriter(writer, [def]), mocks.getExportableWriter(writer, def), mocks.getAmbientableWriter(writer, def), mocks.getAsyncableWriter(writer, def), mocks.getScopeWriter(writer, [def.scope]), mocks.getCallSignatureWriter(writer, def.overloadSignatures), mocks.getTypeParametersWriter(writer, def.typeParameters), mocks.getParametersWriter(writer, [def]), mocks.getFunctionBodyWriter(writer, [def], [false]), mocks.getFunctionReturnTypeWriter(writer, [def]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        describe("FunctionDefinition", function () {
            var callSignatureStart = function (writeFlags) { return ("{doc-comment}{export-keyword:" + writeFlags + "}{declare-keyword}{async-keyword}"); };
            var functionStart = function (writeFlags) { return ("{doc-comment}{decorators:" + writeFlags + ":newline}{export-keyword:" + writeFlags + "}{declare-keyword}{async-keyword}"); };
            var functionEnd = function (writeFlags) { return ("{type-parameters}({parameters:" + writeFlags + "}){function-return-type}{function-body};"); };
            it("should write out the function", function () {
                var def = createFunctions_1.createFunction({
                    name: "Name"
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = "" + prefix + functionStart(0) + "function Name" + functionEnd(0) + suffix;
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out the function with * when generator", function () {
                var def = createFunctions_1.createFunction({
                    name: "Name",
                    isGenerator: true
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = "" + prefix + functionStart(0) + "function* Name" + functionEnd(0) + suffix;
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out the function with overload signatures", function () {
                var def = createFunctions_1.createFunction({
                    name: "Name",
                    overloadSignatures: [{}, {}]
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = prefix +
                    (callSignatureStart(0) + "function Name{call-signature:0};\n") +
                    (callSignatureStart(0) + "function Name{call-signature:0};\n") +
                    (functionStart(0) + "function Name" + functionEnd(0) + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out the function without the implementation when there are more than one overload signatures and " + WriteFlags_1.WriteFlags.HideFunctionImplementations + " is set", function () {
                var def = createFunctions_1.createFunction({
                    name: "Name",
                    overloadSignatures: [{}]
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.HideFunctionImplementations);
                var expected = "" + prefix + callSignatureStart(64) + "function Name{call-signature:64};\n" + suffix;
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out the function with the implementation when there are zero overload signatures and " + WriteFlags_1.WriteFlags.HideFunctionImplementations + " is set", function () {
                var def = createFunctions_1.createFunction({
                    name: "Name"
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.HideFunctionImplementations);
                var expected = "" + prefix + functionStart(64) + "function Name" + functionEnd(64) + suffix;
                chai_1.expect(writer.toString()).to.equal(expected);
            });
        });
        describe("ClassMethodDefinition", function () {
            it("should write out the method", function () {
                var def = createFunctions_1.createClassMethod({
                    name: "Name"
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = (prefix + "{doc-comment}{decorators:0:newline}{scope}{async-keyword}Name{type-parameters}({parameters:0})") +
                    ("{function-return-type}{function-body};" + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out the abstract method with abstract keyword", function () {
                var def = createFunctions_1.createClassMethod({
                    name: "Name",
                    isAbstract: true
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = (prefix + "{doc-comment}{decorators:0:newline}{scope}abstract {async-keyword}Name{type-parameters}({parameters:0})") +
                    ("{function-return-type}{function-body};" + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
        });
        describe("ClassStaticMethodDefinition", function () {
            it("should write out the static method with static keyword", function () {
                var def = createFunctions_1.createClassStaticMethod({
                    name: "Name"
                });
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = (prefix + "{doc-comment}{decorators:0:newline}{scope}static {async-keyword}Name{type-parameters}({parameters:0})") +
                    ("{function-return-type}{function-body};" + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
        });
    });
});

//# sourceMappingURL=FunctionWriterTests.js.map
