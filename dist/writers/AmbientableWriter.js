"use strict";
var AmbientableWriter = (function () {
    function AmbientableWriter(writer) {
        this.writer = writer;
    }
    AmbientableWriter.prototype.writeDeclareKeyword = function (def) {
        this.writer.conditionalWrite(def.hasDeclareKeyword, "declare ");
    };
    return AmbientableWriter;
}());
exports.AmbientableWriter = AmbientableWriter;

//# sourceMappingURL=AmbientableWriter.js.map
