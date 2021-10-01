"use strict";
var WriteFlags_1 = require("./../WriteFlags");
var utils_1 = require("./../utils");
var DefaultExpressionedWriter = (function () {
    function DefaultExpressionedWriter(writer, expressionWriter) {
        this.writer = writer;
        this.expressionWriter = expressionWriter;
    }
    DefaultExpressionedWriter.prototype.writeWithEqualsSign = function (def, flags) {
        var shouldWriteDefaultExpression = this.getShouldWriteDefaultExpression(def, flags);
        if (shouldWriteDefaultExpression)
            this.expressionWriter.writeWithEqualsSign(def.defaultExpression);
    };
    DefaultExpressionedWriter.prototype.getShouldWriteDefaultExpression = function (def, flags) {
        return ((flags & WriteFlags_1.WriteFlags.HideExpressions) === 0 &&
            def.defaultExpression != null &&
            !utils_1.StringUtils.isNullOrWhiteSpace(def.defaultExpression.text));
    };
    return DefaultExpressionedWriter;
}());
exports.DefaultExpressionedWriter = DefaultExpressionedWriter;

//# sourceMappingURL=DefaultExpressionedWriter.js.map
