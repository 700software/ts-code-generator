"use strict";
var ExtendsImplementsClauseWriter = (function () {
    function ExtendsImplementsClauseWriter(writer) {
        this.writer = writer;
    }
    ExtendsImplementsClauseWriter.prototype.writeExtends = function (def) {
        this.writeClause({
            word: "extends",
            types: def.extendsTypes
        });
    };
    ExtendsImplementsClauseWriter.prototype.writeImplements = function (def) {
        this.writeClause({
            word: "implements",
            types: def.implementsTypes
        });
    };
    ExtendsImplementsClauseWriter.prototype.writeClause = function (obj) {
        if (obj.types.length === 0)
            return;
        this.writer.write(" " + obj.word + " ");
        this.writeTypes(obj.types);
    };
    ExtendsImplementsClauseWriter.prototype.writeTypes = function (types) {
        var _this = this;
        types.forEach(function (t, i) {
            _this.writer.conditionalWrite(i !== 0, ", ");
            _this.writer.write(_this.toGenericArrayIfArray(t.text));
        });
    };
    ExtendsImplementsClauseWriter.prototype.toGenericArrayIfArray = function (str) {
        return str.replace(/^(.*)\[\]$/, "Array<$1>");
    };
    return ExtendsImplementsClauseWriter;
}());
exports.ExtendsImplementsClauseWriter = ExtendsImplementsClauseWriter;

//# sourceMappingURL=ExtendsImplementsClauseWriter.js.map
