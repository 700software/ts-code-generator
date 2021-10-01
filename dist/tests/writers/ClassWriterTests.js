"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var createFunctions_1 = require("./../../createFunctions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("ClassWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ClassWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def]), mocks.getDecoratorsWriter(writer, [def]), mocks.getExportableWriter(writer, def), mocks.getAmbientableWriter(writer, def), mocks.getTypeParametersWriter(writer, def.typeParameters), mocks.getPropertyWriter(writer, [true]), mocks.getFunctionWriter(writer), mocks.getClassConstructorWriter(writer, def.constructorDef), mocks.getExtendsImplementsClauseWriter(writer), mocks.getFunctionBodyWriter(writer, def.methods.concat(def.staticMethods), [true]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}{doc-comment}{decorators:0:newline}{export-keyword:0}{declare-keyword}";
        var suffix = "{end}";
        it("should write out the class", function () {
            var def = createFunctions_1.createClass({
                name: "Name"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            var expected = prefix + "class Name{type-parameters}{extends-clause:Name}{implements-clause:Name} {\n}\n" + suffix;
            chai_1.expect(writer.toString()).to.equal(expected);
        });
        it("should write out the abstract keyword when abstract", function () {
            var def = createFunctions_1.createClass({
                name: "Name",
                isAbstract: true
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            var expected = prefix + "abstract class Name{type-parameters}{extends-clause:Name}{implements-clause:Name} {\n}\n" + suffix;
            chai_1.expect(writer.toString()).to.equal(expected);
        });
    });
});

//# sourceMappingURL=ClassWriterTests.js.map
