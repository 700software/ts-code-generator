"use strict";
var BaseDefinitionWriter = (function () {
    function BaseDefinitionWriter(writer) {
        this.writer = writer;
    }
    BaseDefinitionWriter.prototype.writeWrap = function (def, action) {
        if (typeof def.onBeforeWrite === "function")
            def.onBeforeWrite(this.writer);
        action();
        if (typeof def.onAfterWrite === "function")
            def.onAfterWrite(this.writer);
    };
    return BaseDefinitionWriter;
}());
exports.BaseDefinitionWriter = BaseDefinitionWriter;

//# sourceMappingURL=BaseDefinitionWriter.js.map
