"use strict";
var ParametersWriter = (function () {
    function ParametersWriter(writer, parameterWriter, parameterWithDestructuringWriter, typeWriter) {
        this.writer = writer;
        this.parameterWriter = parameterWriter;
        this.parameterWithDestructuringWriter = parameterWithDestructuringWriter;
        this.typeWriter = typeWriter;
    }
    ParametersWriter.prototype.write = function (def, flags) {
        var _this = this;
        var thisType = def.thisType;
        this.writer.write("(");
        this.writeThisType(thisType);
        def.parameters.forEach(function (param, i) {
            _this.writer.conditionalWrite(i > 0 || thisType != null, ", ");
            _this.writeParameter(param, flags);
        });
        this.writer.write(")");
    };
    ParametersWriter.prototype.writeParameter = function (param, flags) {
        if (param.destructuringProperties.length === 0)
            this.parameterWriter.write(param, flags);
        else
            this.parameterWithDestructuringWriter.write(param, flags);
    };
    ParametersWriter.prototype.writeThisType = function (thisType) {
        if (thisType == null)
            return;
        this.writer.write("this");
        this.typeWriter.writeWithColon(thisType, "any");
    };
    return ParametersWriter;
}());
exports.ParametersWriter = ParametersWriter;

//# sourceMappingURL=ParametersWriter.js.map
