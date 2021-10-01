"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("ParameterWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ParameterWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDecoratorsWriter(writer, [def]), mocks.getTypeWithDefaultExpressionWriter(writer, [def]), mocks.getClassConstructorParameterScopeWriter(writer, [def.scope]));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write out the parameter", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.name = "Name";
            def.setType("string");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "{decorators:0:space}Name{type-with-default:0:any}" + suffix);
        });
        it("should write out rest parameter", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.name = "Name";
            def.setType("string");
            def.isRestParameter = true;
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "...Name{type-with-default:0:any[]}" + suffix);
        });
        it("should write out optional when optional", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.name = "Name";
            def.isOptional = true;
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "{decorators:0:space}Name?{type-with-default:0:any}" + suffix);
        });
        it("should not write out optional when optional and is a rest parameter", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.name = "Name";
            def.isRestParameter = true;
            def.isOptional = true;
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "...Name{type-with-default:0:any[]}" + suffix);
        });
        it("should not write out optional when there is a default expression", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.name = "Name";
            def.isOptional = true;
            def.setDefaultExpression("3");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "{decorators:0:space}Name{type-with-default:0:any}" + suffix);
        });
        it("should write out optional when there is a default expression, but the write flags have hide expressions", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.name = "Name";
            def.isOptional = true;
            def.setDefaultExpression("3");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.HideExpressions);
            chai_1.expect(writer.toString()).to.equal(prefix + "{decorators:1:space}Name?{type-with-default:1:any}" + suffix);
        });
        it("should write out readonly and scope for class constructor parameters", function () {
            var def = new definitions_1.ClassConstructorParameterDefinition();
            def.name = "Name";
            def.isReadonly = true;
            def.scope = definitions_1.ClassConstructorParameterScope.Private;
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "{decorators:0:space}{class-constructor-parameter-scope}readonly Name{type-with-default:0:any}" + suffix);
        });
        it("should not write scope for class constructor parameters when " + WriteFlags_1.WriteFlags.HideScopeOnParameters + " is set", function () {
            var def = new definitions_1.ClassConstructorParameterDefinition();
            def.name = "Name";
            def.scope = definitions_1.ClassConstructorParameterScope.Private;
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.HideScopeOnParameters);
            chai_1.expect(writer.toString()).to.equal(prefix + "{decorators:16:space}Name{type-with-default:16:any}" + suffix);
        });
        it("should write interface method parameters", function () {
            var def = new definitions_1.InterfaceMethodParameterDefinition();
            def.name = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name{type-with-default:0:any}" + suffix);
        });
        it("should write function parameters", function () {
            var def = new definitions_1.FunctionParameterDefinition();
            def.name = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name{type-with-default:0:any}" + suffix);
        });
        it("should write call signature parameters", function () {
            var def = new definitions_1.CallSignatureParameterDefinition();
            def.name = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name{type-with-default:0:any}" + suffix);
        });
        it("should write type function parameters", function () {
            var def = new definitions_1.TypeFunctionParameterDefinition();
            def.name = "Name";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "Name{type-with-default:0:any}" + suffix);
        });
    });
});

//# sourceMappingURL=ParameterWriterTests.js.map
