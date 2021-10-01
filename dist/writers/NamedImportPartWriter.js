"use strict";
var NamedImportPartWriter = (function () {
    function NamedImportPartWriter(writer, baseDefinitionWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
    }
    NamedImportPartWriter.prototype.write = function (def) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            var alias = def.alias, name = def.name;
            _this.writer.write("" + name);
            if (alias != null && name !== alias)
                _this.writer.write(" as " + alias);
        });
    };
    return NamedImportPartWriter;
}());
exports.NamedImportPartWriter = NamedImportPartWriter;

//# sourceMappingURL=NamedImportPartWriter.js.map
