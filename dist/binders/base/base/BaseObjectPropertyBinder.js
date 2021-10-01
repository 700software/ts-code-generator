"use strict";
var BaseObjectPropertyBinder = (function () {
    function BaseObjectPropertyBinder(basePropertyBinder, defaultExpressionedBinder) {
        this.basePropertyBinder = basePropertyBinder;
        this.defaultExpressionedBinder = defaultExpressionedBinder;
    }
    BaseObjectPropertyBinder.prototype.bind = function (def) {
        this.basePropertyBinder.bind(def);
        this.defaultExpressionedBinder.bind(def);
    };
    return BaseObjectPropertyBinder;
}());
exports.BaseObjectPropertyBinder = BaseObjectPropertyBinder;

//# sourceMappingURL=BaseObjectPropertyBinder.js.map
