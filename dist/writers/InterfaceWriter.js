"use strict";
var InterfaceWriter = (function () {
    function InterfaceWriter(writer, baseDefinitionWriter, documentationedWriter, exportableWriter, ambientableWriter, typeParametersWriter, propertyWriter, methodWriter, callSignatureWriter, indexSignatureWriter, extendsImplementsWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.exportableWriter = exportableWriter;
        this.ambientableWriter = ambientableWriter;
        this.typeParametersWriter = typeParametersWriter;
        this.propertyWriter = propertyWriter;
        this.methodWriter = methodWriter;
        this.callSignatureWriter = callSignatureWriter;
        this.indexSignatureWriter = indexSignatureWriter;
        this.extendsImplementsWriter = extendsImplementsWriter;
    }
    InterfaceWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.writeHeader(def, flags);
            _this.writer.block(function () {
                _this.writeNewSignatures(def, flags);
                _this.writeCallSignatures(def, flags);
                _this.writeIndexSignatures(def);
                _this.writeProperties(def, flags);
                _this.writeMethods(def, flags);
            });
        });
    };
    InterfaceWriter.prototype.writeHeader = function (def, flags) {
        this.documentationedWriter.write(def);
        this.exportableWriter.writeExportKeyword(def, flags);
        this.ambientableWriter.writeDeclareKeyword(def);
        this.writer.write("interface ").write(def.name);
        this.typeParametersWriter.write(def.typeParameters);
        this.extendsImplementsWriter.writeExtends(def);
    };
    InterfaceWriter.prototype.writeNewSignatures = function (def, flags) {
        var _this = this;
        def.newSignatures.forEach(function (n) {
            _this.writer.write("new");
            _this.callSignatureWriter.write(n, flags);
            _this.writer.write(";").newLine();
        });
    };
    InterfaceWriter.prototype.writeCallSignatures = function (def, flags) {
        var _this = this;
        def.callSignatures.forEach(function (c) {
            _this.callSignatureWriter.write(c, flags);
            _this.writer.write(";").newLine();
        });
    };
    InterfaceWriter.prototype.writeIndexSignatures = function (def) {
        var _this = this;
        def.indexSignatures.forEach(function (s) {
            _this.indexSignatureWriter.write(s);
            _this.writer.write(";").newLine();
        });
    };
    InterfaceWriter.prototype.writeProperties = function (def, flags) {
        var _this = this;
        def.properties.forEach(function (p) {
            _this.propertyWriter.write(p, flags);
            _this.writer.newLine();
        });
    };
    InterfaceWriter.prototype.writeMethods = function (def, flags) {
        var _this = this;
        def.methods.forEach(function (m) {
            _this.methodWriter.write(m, flags);
            _this.writer.newLine();
        });
    };
    return InterfaceWriter;
}());
exports.InterfaceWriter = InterfaceWriter;

//# sourceMappingURL=InterfaceWriter.js.map
