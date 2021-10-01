"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var createFunctions_1 = require("./../../createFunctions");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("ClassConstructorWriter", function () {
    function createObjects(def, willWritesForFunctionBody) {
        if (willWritesForFunctionBody === void 0) { willWritesForFunctionBody = [false]; }
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ClassConstructorWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def, def, def]), mocks.getParametersWriter(writer, def.overloadSignatures.concat([def])), mocks.getFunctionBodyWriter(writer, [def], willWritesForFunctionBody), mocks.getScopeWriter(writer, [def.scope, def.scope, def.scope]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        var constructorStart = "{doc-comment}{scope}constructor";
        it("should write out the constructor", function () {
            var def = createFunctions_1.createClassConstructor({ scope: definitions_1.Scope.Private });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("" + prefix + constructorStart + "({parameters:0}){function-body};" + suffix);
        });
        it("should write out the constructor with overloads", function () {
            var def = createFunctions_1.createClassConstructor({ overloadSignatures: [{}, {}] });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            var expected = ("" + prefix) +
                (constructorStart + "({parameters:0});\n") +
                (constructorStart + "({parameters:0});\n") +
                (constructorStart + "({parameters:0}){function-body};") +
                ("" + suffix);
            chai_1.expect(writer.toString()).to.equal(expected);
        });
    });
    describe("shouldWriteConstructor", function () {
        it("should return false if there are no parameters, will not write the function body, and " + "HideFunctionBodies" + " is not set", function () {
            var def = createFunctions_1.createClassConstructor();
            var defWriter = createObjects(def, [false]).defWriter;
            chai_1.expect(defWriter.shouldWriteConstructor(def, WriteFlags_1.WriteFlags.None)).to.equal(false);
        });
        it("should return true if there are more than one parameter", function () {
            var def = createFunctions_1.createClassConstructor({ parameters: [{ name: "param" }] });
            var defWriter = createObjects(def).defWriter;
            chai_1.expect(defWriter.shouldWriteConstructor(def, WriteFlags_1.WriteFlags.None)).to.equal(true);
        });
        it("should return true if the function body will be written", function () {
            var def = createFunctions_1.createClassConstructor();
            var defWriter = createObjects(def, [true]).defWriter;
            chai_1.expect(defWriter.shouldWriteConstructor(def, WriteFlags_1.WriteFlags.None)).to.equal(true);
        });
        it("should return true if " + "HideFunctionBodies" + " is set", function () {
            var def = createFunctions_1.createClassConstructor();
            var defWriter = createObjects(def, [false]).defWriter;
            chai_1.expect(defWriter.shouldWriteConstructor(def, WriteFlags_1.WriteFlags.HideFunctionBodies)).to.equal(true);
        });
    });
});

//# sourceMappingURL=ClassConstructorWriterTests.js.map
