"use strict";
// todo: tests
var FileWriter = (function () {
    function FileWriter(writer, baseDefinitionWriter, importWriter, reExportWriter, moduledWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.importWriter = importWriter;
        this.reExportWriter = reExportWriter;
        this.moduledWriter = moduledWriter;
    }
    FileWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.writeImports(def, flags);
            _this.writer.newLine();
            _this.writeReExports(def);
            _this.writer.newLine();
            _this.moduledWriter.write(def, flags);
            _this.writeDefaultExportExpression(def.defaultExportExpression);
        });
    };
    FileWriter.prototype.writeImports = function (fileDef, flags) {
        var _this = this;
        fileDef.imports.forEach(function (importDef) {
            _this.importWriter.write(importDef);
            _this.writer.newLine();
        });
    };
    FileWriter.prototype.writeReExports = function (fileDef) {
        var _this = this;
        fileDef.reExports.forEach(function (reExportDef) {
            _this.reExportWriter.write(reExportDef);
            _this.writer.newLine();
        });
    };
    FileWriter.prototype.writeDefaultExportExpression = function (expression) {
        if (expression != null) {
            this.writer.newLine();
            this.writer.write("export default ")
                .write(expression.text)
                .write(";")
                .newLine();
        }
    };
    return FileWriter;
}());
exports.FileWriter = FileWriter;

//# sourceMappingURL=FileWriter.js.map
