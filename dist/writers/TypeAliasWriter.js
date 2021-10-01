"use strict";
var TypeAliasWriter = (function () {
    function TypeAliasWriter(writer, baseDefinitionWriter, documentationedWriter, exportableWriter, ambientableWriter, typeWriter, typeParametersWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.exportableWriter = exportableWriter;
        this.ambientableWriter = ambientableWriter;
        this.typeWriter = typeWriter;
        this.typeParametersWriter = typeParametersWriter;
    }
    TypeAliasWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.documentationedWriter.write(def);
            _this.exportableWriter.writeExportKeyword(def, flags);
            _this.ambientableWriter.writeDeclareKeyword(def);
            _this.writer.write("type ").write(def.name);
            _this.typeParametersWriter.write(def.typeParameters);
            _this.typeWriter.writeWithEqualsSign(def.type, "any");
            _this.writer.write(";");
        });
    };
    return TypeAliasWriter;
}());
exports.TypeAliasWriter = TypeAliasWriter;

//# sourceMappingURL=TypeAliasWriter.js.map
