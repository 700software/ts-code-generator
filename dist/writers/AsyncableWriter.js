"use strict";
var AsyncableWriter = (function () {
    function AsyncableWriter(writer) {
        this.writer = writer;
    }
    AsyncableWriter.prototype.writeAsyncKeyword = function (def) {
        this.writer.conditionalWrite(def.isAsync, "async ");
    };
    return AsyncableWriter;
}());
exports.AsyncableWriter = AsyncableWriter;

//# sourceMappingURL=AsyncableWriter.js.map
