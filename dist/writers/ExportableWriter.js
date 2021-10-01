"use strict";
var definitions_1 = require("./../definitions");
var WriteFlags_1 = require("./../WriteFlags");
var ExportableWriter = (function () {
    function ExportableWriter(writer) {
        this.writer = writer;
    }
    ExportableWriter.prototype.writeExportKeyword = function (def, flags) {
        if (!def.isNamedExportOfFile && (def.isDefaultExportOfFile || !def.isExported))
            return;
        var shouldWrite = false;
        if (def instanceof definitions_1.InterfaceDefinition || def instanceof definitions_1.TypeAliasDefinition)
            shouldWrite = (flags & WriteFlags_1.WriteFlags.IsInAmbientContext) === 0;
        else
            shouldWrite = !def.isAmbient;
        this.writer.conditionalWrite(shouldWrite, "export ");
    };
    return ExportableWriter;
}());
exports.ExportableWriter = ExportableWriter;

//# sourceMappingURL=ExportableWriter.js.map
