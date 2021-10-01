"use strict";
var DecoratorsWriter = (function () {
    function DecoratorsWriter(writer, decoratorWriter) {
        this.writer = writer;
        this.decoratorWriter = decoratorWriter;
    }
    DecoratorsWriter.prototype.write = function (def, flags, separator) {
        var _this = this;
        if (separator === void 0) { separator = null; }
        if (def.decorators == null)
            return;
        def.decorators.forEach(function (dec) {
            _this.decoratorWriter.write(dec, flags);
            if (separator == null)
                _this.writer.newLine();
            else
                _this.writer.write(separator);
        });
    };
    return DecoratorsWriter;
}());
exports.DecoratorsWriter = DecoratorsWriter;

//# sourceMappingURL=DecoratorsWriter.js.map
