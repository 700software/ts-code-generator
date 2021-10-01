"use strict";
var ParameterWithDestructuringWriter = (function () {
    function ParameterWithDestructuringWriter(writer, baseDefinitionWriter, defaultExpressionedWriter, typeWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.defaultExpressionedWriter = defaultExpressionedWriter;
        this.typeWriter = typeWriter;
    }
    ParameterWithDestructuringWriter.prototype.write = function (param, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(param, function () {
            _this.writeLeftSide(param, flags);
            _this.writer.write(": ");
            _this.writeRightSide(param);
        });
    };
    ParameterWithDestructuringWriter.prototype.writeLeftSide = function (param, flags) {
        var _this = this;
        this.surroundInBrances(function () {
            param.destructuringProperties.forEach(function (p, i) {
                _this.writer.conditionalWrite(i > 0, ", ");
                _this.writer.write(p.name);
                if (_this.defaultExpressionedWriter.getShouldWriteDefaultExpression(p, flags))
                    _this.defaultExpressionedWriter.writeWithEqualsSign(p, flags);
            });
        });
    };
    ParameterWithDestructuringWriter.prototype.writeRightSide = function (param) {
        var _this = this;
        this.surroundInBrances(function () {
            param.destructuringProperties.forEach(function (p, i) {
                _this.writer.conditionalWrite(i > 0, " ");
                _this.writer.conditionalWrite(p.isReadonly, "readonly ");
                _this.writer.write(p.name);
                _this.writer.conditionalWrite(p.isOptional, "?");
                _this.typeWriter.writeWithColon(p.type, "any");
                _this.writer.write(";");
            });
        });
    };
    ParameterWithDestructuringWriter.prototype.surroundInBrances = function (func) {
        this.writer.write("{ ");
        func();
        this.writer.write(" }");
    };
    return ParameterWithDestructuringWriter;
}());
exports.ParameterWithDestructuringWriter = ParameterWithDestructuringWriter;

//# sourceMappingURL=ParameterWithDestructuringWriter.js.map
