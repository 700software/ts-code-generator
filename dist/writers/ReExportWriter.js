"use strict";
var ReExportWriter = (function () {
    function ReExportWriter(writer, baseDefinitionWriter, namedImportPartsWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.namedImportPartsWriter = namedImportPartsWriter;
    }
    ReExportWriter.prototype.write = function (def) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.writer.write("export ");
            if ((def.namedExports || []).length > 0)
                _this.namedImportPartsWriter.write(def.namedExports);
            else
                _this.writer.write("*");
            _this.writer.write(" from ");
            _this.writer.write("\"" + def.moduleSpecifier + "\";");
        });
    };
    return ReExportWriter;
}());
exports.ReExportWriter = ReExportWriter;

//# sourceMappingURL=ReExportWriter.js.map
