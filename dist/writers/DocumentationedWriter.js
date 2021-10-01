"use strict";
var DocumentationedWriter = (function () {
    function DocumentationedWriter(writer) {
        this.writer = writer;
    }
    DocumentationedWriter.prototype.write = function (def) {
        if (def.documentationComment == null || /^[\s]*$/.test(def.documentationComment))
            return;
        if (!/^\s*\/\*\*[\s\S]*\*\//.test(def.documentationComment))
            this.writeWithComment(def.documentationComment);
        else
            this.writer.write(def.documentationComment);
        this.writer.newLine();
    };
    DocumentationedWriter.prototype.writeWithComment = function (text) {
        var _this = this;
        this.writer.writeLine("/**");
        text.split(/\r?\n/).forEach(function (line) {
            _this.writer.write(" *");
            if (line.length > 0)
                _this.writer.write(" ");
            _this.writer.write(line).newLine();
        });
        this.writer.write(" */");
    };
    return DocumentationedWriter;
}());
exports.DocumentationedWriter = DocumentationedWriter;

//# sourceMappingURL=DocumentationedWriter.js.map
