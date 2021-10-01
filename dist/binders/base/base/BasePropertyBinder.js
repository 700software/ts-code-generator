"use strict";
var BasePropertyBinder = (function () {
    function BasePropertyBinder(baseDefinitionBinder, namedBinder, optionalBinder, typedBinder, readonlyableBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.optionalBinder = optionalBinder;
        this.typedBinder = typedBinder;
        this.readonlyableBinder = readonlyableBinder;
    }
    BasePropertyBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.optionalBinder.bind(def);
        this.typedBinder.bind(def);
        this.readonlyableBinder.bind(def);
    };
    return BasePropertyBinder;
}());
exports.BasePropertyBinder = BasePropertyBinder;

//# sourceMappingURL=BasePropertyBinder.js.map
