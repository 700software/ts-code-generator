"use strict";
var WriteFlags_1 = require("./../WriteFlags");
var ClassConstructorWriter = (function () {
    function ClassConstructorWriter(writer, baseDefinitionWriter, documentationedWriter, parametersWriter, functionBodyWriter, scopeWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.parametersWriter = parametersWriter;
        this.functionBodyWriter = functionBodyWriter;
        this.scopeWriter = scopeWriter;
    }
    ClassConstructorWriter.prototype.shouldWriteConstructor = function (def, flags) {
        return (def.parameters.length > 0 || this.functionBodyWriter.willWriteFunctionBody(def, flags) || (flags & WriteFlags_1.WriteFlags.HideFunctionBodies) !== 0);
    };
    ClassConstructorWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            def.overloadSignatures.forEach(function (signatureDef) {
                _this.writeStartOfConstructor(def);
                _this.parametersWriter.write(signatureDef, flags);
                _this.writer.write(";").newLine();
            });
            _this.writeStartOfConstructor(def);
            _this.parametersWriter.write(def, flags);
            _this.functionBodyWriter.write(def, flags);
        });
    };
    ClassConstructorWriter.prototype.writeStartOfConstructor = function (def) {
        this.documentationedWriter.write(def);
        this.scopeWriter.writeScope(def.scope);
        this.writer.write("constructor");
    };
    return ClassConstructorWriter;
}());
exports.ClassConstructorWriter = ClassConstructorWriter;

//# sourceMappingURL=ClassConstructorWriter.js.map
