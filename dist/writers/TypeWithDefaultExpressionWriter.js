"use strict";
var TypeWithDefaultExpressionWriter = (function () {
    function TypeWithDefaultExpressionWriter(writer, typeWriter, defaultExpressionedWriter) {
        this.writer = writer;
        this.typeWriter = typeWriter;
        this.defaultExpressionedWriter = defaultExpressionedWriter;
    }
    TypeWithDefaultExpressionWriter.prototype.write = function (def, flags, fallbackType) {
        var shouldWriteDefaultExpression = this.defaultExpressionedWriter.getShouldWriteDefaultExpression(def, flags);
        if (shouldWriteDefaultExpression)
            this.writeDefaultExpression(def, flags);
        else
            this.writeType(def, fallbackType);
    };
    TypeWithDefaultExpressionWriter.prototype.writeWithOptionalCheck = function (def, flags, fallbackType) {
        var shouldWriteDefaultExpression = this.defaultExpressionedWriter.getShouldWriteDefaultExpression(def, flags);
        if (!shouldWriteDefaultExpression || def.isOptional)
            this.writeType(def, fallbackType);
        if (shouldWriteDefaultExpression)
            this.writeDefaultExpression(def, flags);
    };
    TypeWithDefaultExpressionWriter.prototype.writeType = function (def, fallbackType) {
        this.typeWriter.writeWithColon(def.type, fallbackType);
    };
    TypeWithDefaultExpressionWriter.prototype.writeDefaultExpression = function (def, flags) {
        this.defaultExpressionedWriter.writeWithEqualsSign(def, flags);
    };
    return TypeWithDefaultExpressionWriter;
}());
exports.TypeWithDefaultExpressionWriter = TypeWithDefaultExpressionWriter;

//# sourceMappingURL=TypeWithDefaultExpressionWriter.js.map
