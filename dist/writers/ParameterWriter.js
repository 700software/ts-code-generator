"use strict";
var definitions_1 = require("./../definitions");
var WriteFlags_1 = require("./../WriteFlags");
var ParameterWriter = (function () {
    function ParameterWriter(writer, baseWriter, decoratorsWriter, typeWithDefaultExpressionWriter, classConstructorParameterScopeWriter) {
        this.writer = writer;
        this.baseWriter = baseWriter;
        this.decoratorsWriter = decoratorsWriter;
        this.typeWithDefaultExpressionWriter = typeWithDefaultExpressionWriter;
        this.classConstructorParameterScopeWriter = classConstructorParameterScopeWriter;
    }
    ParameterWriter.prototype.write = function (param, flags) {
        var _this = this;
        this.baseWriter.writeWrap(param, function () {
            if (!param.isRestParameter)
                _this.writeDecorators(param, flags);
            if (param instanceof definitions_1.ClassConstructorParameterDefinition) {
                if ((flags & WriteFlags_1.WriteFlags.HideScopeOnParameters) === 0)
                    _this.classConstructorParameterScopeWriter.writeScope(param.scope);
                _this.writer.conditionalWrite(param.isReadonly, "readonly ");
            }
            if (param.isRestParameter)
                _this.writeRestParameter(param);
            _this.writer.write(param.name);
            _this.writeIsOptional(param, flags);
            _this.typeWithDefaultExpressionWriter.write(param, flags, _this.getFallbackTypeText(param));
        });
    };
    ParameterWriter.prototype.writeRestParameter = function (param) {
        this.writer.write("...");
    };
    ParameterWriter.prototype.getFallbackTypeText = function (param) {
        return param.isRestParameter ? "any[]" : "any";
    };
    ParameterWriter.prototype.writeIsOptional = function (param, flags) {
        var isOptionalNotRest = param.isOptional && !param.isRestParameter;
        var willWriteDefaultExpression = param.defaultExpression != null && (flags & WriteFlags_1.WriteFlags.HideExpressions) !== WriteFlags_1.WriteFlags.HideExpressions;
        if (isOptionalNotRest && !willWriteDefaultExpression)
            this.writer.write("?");
    };
    ParameterWriter.prototype.writeDecorators = function (param, flags) {
        if (!(param instanceof definitions_1.BaseClassMethodParameterDefinition) && !(param instanceof definitions_1.ClassConstructorParameterDefinition))
            return;
        this.decoratorsWriter.write(param, flags, " ");
    };
    return ParameterWriter;
}());
exports.ParameterWriter = ParameterWriter;

//# sourceMappingURL=ParameterWriter.js.map
