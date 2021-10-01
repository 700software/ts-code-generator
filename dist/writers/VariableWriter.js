"use strict";
var VariableWriter = (function () {
    function VariableWriter(writer, baseDefinitionWriter, documentationedWriter, exportableWriter, ambientableWriter, typeWithDefaultExpressionWriter, variableDeclarationTypeWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.exportableWriter = exportableWriter;
        this.ambientableWriter = ambientableWriter;
        this.typeWithDefaultExpressionWriter = typeWithDefaultExpressionWriter;
        this.variableDeclarationTypeWriter = variableDeclarationTypeWriter;
    }
    VariableWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.documentationedWriter.write(def);
            _this.exportableWriter.writeExportKeyword(def, flags);
            _this.ambientableWriter.writeDeclareKeyword(def);
            _this.variableDeclarationTypeWriter.writeDeclarationType(def.declarationType);
            _this.writer.spaceIfLastNotSpace().write(def.name);
            _this.typeWithDefaultExpressionWriter.write(def, flags, "any");
            _this.writer.write(";");
        });
    };
    return VariableWriter;
}());
exports.VariableWriter = VariableWriter;

//# sourceMappingURL=VariableWriter.js.map
