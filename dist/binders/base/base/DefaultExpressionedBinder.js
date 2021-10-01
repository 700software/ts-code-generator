"use strict";
var DefaultExpressionedBinder = (function () {
    /* istanbul ignore next */ function DefaultExpressionedBinder() {
    }
    DefaultExpressionedBinder.prototype.bind = function (def) {
        def.defaultExpression = this.getDefaultExpression();
    };
    return DefaultExpressionedBinder;
}());
exports.DefaultExpressionedBinder = DefaultExpressionedBinder;

//# sourceMappingURL=DefaultExpressionedBinder.js.map
