"use strict";
var ImportWriter = (function () {
    function ImportWriter(writer, baseDefinitionWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
    }
    ImportWriter.prototype.write = function (def) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () { return _this.writeInternal(def); });
    };
    ImportWriter.prototype.writeInternal = function (def) {
        var hasDefaultImport = def.defaultImport != null;
        var hasStarImport = def.starImportName != null && def.starImportName.length > 0;
        var hasNamedImports = (def.namedImports || []).length > 0;
        this.writer.write("import ");
        if (hasDefaultImport) {
            this.writeDefaultImport(def.defaultImport);
            this.writer.conditionalWrite(hasStarImport || hasNamedImports, ", ");
        }
        if (hasStarImport)
            this.writeStarImport(def);
        else if (hasNamedImports)
            this.writeNamedImports(def);
        if (hasDefaultImport || hasStarImport || hasNamedImports)
            this.writer.write(" from ");
        this.writer.write("\"" + def.moduleSpecifier + "\";");
    };
    ImportWriter.prototype.writeStarImport = function (def) {
        this.writer.write("* as " + def.starImportName);
    };
    ImportWriter.prototype.writeDefaultImport = function (defaultImport) {
        this.writer.write(defaultImport.name);
    };
    ImportWriter.prototype.writeNamedImports = function (def) {
        var _this = this;
        this.writer.write("{");
        (def.namedImports || []).forEach(function (namedImport, i) {
            var name = namedImport.name, alias = namedImport.alias;
            _this.writer.conditionalWrite(i !== 0, ", ");
            _this.writer.write(name);
            if (alias != null && name !== alias)
                _this.writer.write(" as " + alias);
        });
        this.writer.write("}");
    };
    return ImportWriter;
}());
exports.ImportWriter = ImportWriter;

//# sourceMappingURL=ImportWriter.js.map
