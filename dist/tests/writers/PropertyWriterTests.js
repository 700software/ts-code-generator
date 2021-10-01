"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("PropertyWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.PropertyWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def, def]), mocks.getDecoratorsWriter(writer, [def, def]), mocks.getTypeWriter(writer, [def.type]), mocks.getScopeWriter(writer, [def.scope]), mocks.getTypeWithDefaultExpressionWriter(writer, [def]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        var propertyPrefix = "{doc-comment}{decorators:0:newline}";
        describe("normal properties", function () {
            it("should write out a property", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}Name{type-with-default-optional-check:0:any};" + suffix);
            });
            it("should write out abstract, readonly, and optional", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.isAbstract = true;
                def.isReadonly = true;
                def.isOptional = true;
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}abstract readonly Name?{type-with-default-optional-check:0:any};" + suffix);
            });
            it("should write out a static property", function () {
                var def = new definitions_1.ClassStaticPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}static Name{type-with-default-optional-check:0:any};" + suffix);
            });
            it("should write out the type for " + "InterfacePropertyDefinition" + "s", function () {
                var def = new definitions_1.InterfacePropertyDefinition();
                def.name = "Name";
                def.setType("string");
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "Name: {type:string:any};" + suffix);
            });
        });
        describe("get accessors", function () {
            it("should write out a normal property if no get body is set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.GetAccessor;
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}Name{type-with-default-optional-check:0:any};" + suffix);
            });
            it("should write out a get accessor if a body is set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.GetAccessor;
                def.isReadonly = true; // should not write out readonly for accessors
                def.onWriteGetBody = function (writer) { return writer.write("body"); };
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}get Name(): {type:string:any} {\n    body\n}\n" + suffix);
            });
            it("should not write out an abstract get accessor if abstract", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.isAbstract = true;
                def.kind = definitions_1.ClassPropertyKind.GetAccessor;
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}abstract get Name(): {type:string:any};" + suffix);
            });
        });
        describe("set accessors", function () {
            it("should write out a normal property if no set body is set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.SetAccessor;
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}Name{type-with-default-optional-check:0:any};" + suffix);
            });
            it("should write out a set accessor if a body is set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.SetAccessor;
                def.isReadonly = true; // should not write out readonly for accessors
                def.onWriteSetBody = function (writer) { return writer.write("body"); };
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}set Name(value: {type:string:any}) {\n    body\n}\n" + suffix);
            });
            it("should not write out an abstract set accessor if abstract", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.isAbstract = true;
                def.kind = definitions_1.ClassPropertyKind.SetAccessor;
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}abstract set Name(value: {type:string:any});" + suffix);
            });
        });
        describe("get and set accessors", function () {
            it("should write out a normal property if no get or set body is set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.GetSetAccessor;
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                chai_1.expect(writer.toString()).to.equal("" + prefix + propertyPrefix + "{scope}Name{type-with-default-optional-check:0:any};" + suffix);
            });
            it("should write out the accessors if abstract", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.isAbstract = true;
                def.kind = definitions_1.ClassPropertyKind.GetSetAccessor;
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = ("" + prefix + propertyPrefix + "{scope}abstract get Name(): {type:string:any};\n") +
                    ("{scope}abstract set Name(value: {type:string:any});" + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out an accessor if only set accessor body is set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.GetSetAccessor;
                def.onWriteSetBody = function (writer) { return writer.write("body"); };
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = ("" + prefix + propertyPrefix + "{scope}get Name(): {type:string:any} {\n}\n\n") +
                    ("{scope}set Name(value: {type:string:any}) {\n    body\n}\n" + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out an accessor if only get accessor body is set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.GetSetAccessor;
                def.onWriteGetBody = function (writer) { return writer.write("body"); };
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = ("" + prefix + propertyPrefix + "{scope}get Name(): {type:string:any} {\n    body\n}\n\n") +
                    ("{scope}set Name(value: {type:string:any}) {\n}\n" + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
            it("should write out an accessor if both get accessor bodies are set", function () {
                var def = new definitions_1.ClassPropertyDefinition();
                def.name = "Name";
                def.setType("string");
                def.kind = definitions_1.ClassPropertyKind.GetSetAccessor;
                def.onWriteGetBody = function (writer) { return writer.write("get body"); };
                def.onWriteSetBody = function (writer) { return writer.write("set body"); };
                var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
                defWriter.write(def, WriteFlags_1.WriteFlags.None);
                var expected = ("" + prefix + propertyPrefix + "{scope}get Name(): {type:string:any} {\n    get body\n}\n\n") +
                    ("{scope}set Name(value: {type:string:any}) {\n    set body\n}\n" + suffix);
                chai_1.expect(writer.toString()).to.equal(expected);
            });
        });
    });
});

//# sourceMappingURL=PropertyWriterTests.js.map
