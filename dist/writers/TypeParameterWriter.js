"use strict";
var TypeParameterWriter = (function () {
    function TypeParameterWriter(writer, baseDefinitionWriter, typeWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.typeWriter = typeWriter;
    }
    TypeParameterWriter.prototype.write = function (typeParameter) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(typeParameter, function () {
            _this.writer.write(typeParameter.name);
            if (typeParameter.constraintType != null) {
                _this.writer.write(" extends ");
                _this.typeWriter.write(typeParameter.constraintType, "any");
            }
        });
    };
    return TypeParameterWriter;
}());
exports.TypeParameterWriter = TypeParameterWriter;

//# sourceMappingURL=TypeParameterWriter.js.map
