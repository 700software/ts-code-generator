"use strict";
var TypeParametersWriter = (function () {
    function TypeParametersWriter(writer, typeParameterWriter) {
        this.writer = writer;
        this.typeParameterWriter = typeParameterWriter;
    }
    TypeParametersWriter.prototype.write = function (typeParameters) {
        if (typeParameters.length === 0)
            return;
        this.writer.write("<");
        this.writeTypeParameters(typeParameters);
        this.writer.write(">");
    };
    TypeParametersWriter.prototype.writeTypeParameters = function (typeParameters) {
        var _this = this;
        typeParameters.forEach(function (p, i) {
            _this.writer.conditionalWrite(i !== 0, ", ");
            _this.typeParameterWriter.write(p);
        });
    };
    return TypeParametersWriter;
}());
exports.TypeParametersWriter = TypeParametersWriter;

//# sourceMappingURL=TypeParametersWriter.js.map
