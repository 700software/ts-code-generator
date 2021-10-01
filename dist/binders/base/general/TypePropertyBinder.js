"use strict";
var TypePropertyBinder = (function () {
    function TypePropertyBinder(baseDefinitionBinder, basePropertyBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.basePropertyBinder = basePropertyBinder;
    }
    TypePropertyBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.basePropertyBinder.bind(def);
    };
    return TypePropertyBinder;
}());
exports.TypePropertyBinder = TypePropertyBinder;

//# sourceMappingURL=TypePropertyBinder.js.map
