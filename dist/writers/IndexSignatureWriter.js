"use strict";
var IndexSignatureWriter = (function () {
    function IndexSignatureWriter(writer, baseDefinitionWriter, typeWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.typeWriter = typeWriter;
    }
    IndexSignatureWriter.prototype.write = function (def) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.writer.conditionalWrite(def.isReadonly, "readonly ");
            _this.writer.write("[" + def.keyName);
            _this.typeWriter.writeWithColon(def.keyType, "any");
            _this.writer.write("]");
            _this.typeWriter.writeWithColon(def.returnType, "any");
            _this.writer.write(";");
        });
    };
    return IndexSignatureWriter;
}());
exports.IndexSignatureWriter = IndexSignatureWriter;

//# sourceMappingURL=IndexSignatureWriter.js.map
