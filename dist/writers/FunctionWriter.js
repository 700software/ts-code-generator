"use strict";
var definitions_1 = require("./../definitions");
var WriteFlags_1 = require("./../WriteFlags");
var FunctionWriter = (function () {
    function FunctionWriter(writer, baseDefinitionWriter, documentationedWriter, decoratorsWriter, exportableWriter, ambientWriter, asyncableWriter, scopeWriter, callSignatureWriter, typeParametersWriter, parametersWriter, functionBodyWriter, functionReturnTypeWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.decoratorsWriter = decoratorsWriter;
        this.exportableWriter = exportableWriter;
        this.ambientWriter = ambientWriter;
        this.asyncableWriter = asyncableWriter;
        this.scopeWriter = scopeWriter;
        this.callSignatureWriter = callSignatureWriter;
        this.typeParametersWriter = typeParametersWriter;
        this.parametersWriter = parametersWriter;
        this.functionBodyWriter = functionBodyWriter;
        this.functionReturnTypeWriter = functionReturnTypeWriter;
    }
    FunctionWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            var shouldWriteImplementation = def.overloadSignatures.length === 0 || (flags & WriteFlags_1.WriteFlags.HideFunctionImplementations) === 0;
            (def.overloadSignatures || []).forEach(function (s) {
                _this.documentationedWriter.write(s);
                _this.writeStartOfFunctionHeader(def, flags);
                _this.callSignatureWriter.write(s, flags);
                _this.writer.write(";").newLine();
            });
            if (shouldWriteImplementation) {
                _this.documentationedWriter.write(def);
                _this.decoratorsWriter.write(def, flags);
                _this.writeImplementation(def, flags);
            }
        });
    };
    FunctionWriter.prototype.writeImplementation = function (def, flags) {
        this.writeStartOfFunctionHeader(def, flags);
        this.typeParametersWriter.write(def.typeParameters);
        this.parametersWriter.write(def, flags);
        this.functionReturnTypeWriter.write(def, flags);
        this.functionBodyWriter.write(def, flags);
    };
    FunctionWriter.prototype.writeStartOfFunctionHeader = function (def, flags) {
        if (def instanceof definitions_1.FunctionDefinition) {
            this.exportableWriter.writeExportKeyword(def, flags);
            this.ambientWriter.writeDeclareKeyword(def);
        }
        else {
            this.scopeWriter.writeScope(def.scope);
            this.writeStatic(def);
            this.writeAbstract(def);
        }
        this.asyncableWriter.writeAsyncKeyword(def);
        this.writer.conditionalWrite(def instanceof definitions_1.FunctionDefinition, "function");
        this.writer.conditionalWrite(def.isGenerator, "*");
        this.writer.conditionalWrite(def instanceof definitions_1.FunctionDefinition, " ");
        this.writer.write(def.name);
    };
    FunctionWriter.prototype.writeStatic = function (def) {
        if (def instanceof definitions_1.ClassStaticMethodDefinition)
            this.writer.write("static ");
    };
    FunctionWriter.prototype.writeAbstract = function (def) {
        if (def.isAbstract)
            this.writer.write("abstract ");
    };
    return FunctionWriter;
}());
exports.FunctionWriter = FunctionWriter;

//# sourceMappingURL=FunctionWriter.js.map
