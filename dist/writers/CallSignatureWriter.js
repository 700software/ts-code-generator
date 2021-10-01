"use strict";
var CallSignatureWriter = (function () {
    function CallSignatureWriter(writer, baseDefinitionWriter, typeParametersWriter, typeWriter, parametersWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.typeParametersWriter = typeParametersWriter;
        this.typeWriter = typeWriter;
        this.parametersWriter = parametersWriter;
    }
    CallSignatureWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.typeParametersWriter.write(def.typeParameters);
            _this.parametersWriter.write(def, flags);
            _this.typeWriter.writeWithColon(def.returnType, "any");
        });
    };
    return CallSignatureWriter;
}());
exports.CallSignatureWriter = CallSignatureWriter;

//# sourceMappingURL=CallSignatureWriter.js.map
