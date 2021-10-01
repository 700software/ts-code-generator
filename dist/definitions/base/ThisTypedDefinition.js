"use strict";
var utils_1 = require("./../../utils");
var ThisTypedDefinition = (function () {
    function ThisTypedDefinition() {
        this.thisType = null;
    }
    ThisTypedDefinition.prototype.setThisType = function (textOrDefinition, typeArguments) {
        if (typeArguments === void 0) { typeArguments = []; }
        this.thisType = utils_1.DefinitionUtils.getTypeDefinitionFromTextOrDefinition(textOrDefinition, typeArguments);
        return this;
    };
    return ThisTypedDefinition;
}());
exports.ThisTypedDefinition = ThisTypedDefinition;

//# sourceMappingURL=ThisTypedDefinition.js.map
