"use strict";
var utils_1 = require("./../utils");
var ExpressionWriter = (function () {
    function ExpressionWriter(writer) {
        this.writer = writer;
    }
    ExpressionWriter.prototype.writeWithEqualsSign = function (def) {
        if (!this.shouldWrite(def))
            return;
        this.writer.write(" = ");
        this.write(def);
    };
    ExpressionWriter.prototype.write = function (def) {
        if (!this.shouldWrite(def))
            return;
        this.writer.write(def.text);
    };
    ExpressionWriter.prototype.shouldWrite = function (def) {
        return def != null && !utils_1.StringUtils.isNullOrWhiteSpace(def.text);
    };
    return ExpressionWriter;
}());
exports.ExpressionWriter = ExpressionWriter;

//# sourceMappingURL=ExpressionWriter.js.map
