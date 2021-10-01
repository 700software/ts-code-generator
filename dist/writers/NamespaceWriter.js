"use strict";
var definitions_1 = require("./../definitions");
// todo: tests
var NamespaceWriter = (function () {
    function NamespaceWriter(writer, baseDefinitionWriter, documentationedWriter, exportableWriter, ambientableWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.exportableWriter = exportableWriter;
        this.ambientableWriter = ambientableWriter;
    }
    NamespaceWriter.prototype.initialize = function (moduledWriter) {
        // this was the only way I could think of to handle the circular dependency caused by the
        // circular nature of the problem... maybe there's a better way
        this.moduledWriter = moduledWriter;
    };
    NamespaceWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.documentationedWriter.write(def);
            _this.exportableWriter.writeExportKeyword(def, flags);
            _this.ambientableWriter.writeDeclareKeyword(def);
            _this.writer.write(_this.getDeclarationTypeAsString(def.declarationType));
            _this.writer.write(" " + def.name).block(function () {
                _this.moduledWriter.write(def, flags);
            });
        });
    };
    NamespaceWriter.prototype.getDeclarationTypeAsString = function (declarationType) {
        if (declarationType === definitions_1.NamespaceDeclarationType.Module)
            return "module";
        return "namespace";
    };
    return NamespaceWriter;
}());
exports.NamespaceWriter = NamespaceWriter;

//# sourceMappingURL=NamespaceWriter.js.map
