"use strict";
var factories_1 = require("./../../factories");
var ReturnTypedDefinition = (function () {
    /* istanbul ignore next */ function ReturnTypedDefinition() {
    }
    ReturnTypedDefinition.prototype.setReturnType = function (text) {
        this.returnType = new factories_1.StructureFactory().getTypeFromText(text);
        return this;
    };
    return ReturnTypedDefinition;
}());
exports.ReturnTypedDefinition = ReturnTypedDefinition;

//# sourceMappingURL=ReturnTypedDefinition.js.map
