"use strict";
var utils_1 = require("./../../utils");
var TypedDefinition = (function () {
    /* istanbul ignore next */ function TypedDefinition() {
    }
    TypedDefinition.prototype.setType = function (textOrDefinition, typeArguments) {
        if (typeArguments === void 0) { typeArguments = []; }
        this.type = utils_1.DefinitionUtils.getTypeDefinitionFromTextOrDefinition(textOrDefinition, typeArguments);
        return this;
    };
    return TypedDefinition;
}());
exports.TypedDefinition = TypedDefinition;

//# sourceMappingURL=TypedDefinition.js.map
