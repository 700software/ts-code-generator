"use strict";
var NamedImportPartsWriter = (function () {
    function NamedImportPartsWriter(writer, namedImportPartWriter) {
        this.writer = writer;
        this.namedImportPartWriter = namedImportPartWriter;
    }
    NamedImportPartsWriter.prototype.write = function (namedImports) {
        if (namedImports.length === 0)
            return;
        this.writer.write("{");
        this.writeNamedImportParts(namedImports);
        this.writer.write("}");
    };
    NamedImportPartsWriter.prototype.writeNamedImportParts = function (namedImports) {
        var _this = this;
        namedImports.forEach(function (namedImport, i) {
            _this.writer.conditionalWrite(i !== 0, ", ");
            _this.namedImportPartWriter.write(namedImport);
        });
    };
    return NamedImportPartsWriter;
}());
exports.NamedImportPartsWriter = NamedImportPartsWriter;

//# sourceMappingURL=NamedImportPartsWriter.js.map
