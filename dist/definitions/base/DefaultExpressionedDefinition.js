"use strict";
var factories_1 = require("./../../factories");
var DefaultExpressionedDefinition = (function () {
    /* istanbul ignore next */ function DefaultExpressionedDefinition() {
    }
    DefaultExpressionedDefinition.prototype.setDefaultExpression = function (text) {
        this.defaultExpression = new factories_1.StructureFactory().getTypeFromText(text);
        return this;
    };
    return DefaultExpressionedDefinition;
}());
exports.DefaultExpressionedDefinition = DefaultExpressionedDefinition;

//# sourceMappingURL=DefaultExpressionedDefinition.js.map
