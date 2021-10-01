"use strict";
var utils_1 = require("./../utils");
var TypeWriter = (function () {
    function TypeWriter(writer) {
        this.writer = writer;
    }
    TypeWriter.prototype.writeWithColon = function (def, fallbackType) {
        this.writer.write(": ");
        this.write(def, fallbackType);
    };
    TypeWriter.prototype.writeWithEqualsSign = function (def, fallbackType) {
        this.writer.write(" = ");
        this.write(def, fallbackType);
    };
    TypeWriter.prototype.write = function (def, fallbackType) {
        var text = fallbackType;
        if (def != null && def.text != null && !utils_1.StringUtils.isNullOrWhiteSpace(def.text))
            text = def.text;
        this.writer.write(text);
    };
    return TypeWriter;
}());
exports.TypeWriter = TypeWriter;

//# sourceMappingURL=TypeWriter.js.map
