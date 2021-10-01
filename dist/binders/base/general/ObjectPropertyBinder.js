"use strict";
var ObjectPropertyBinder = (function () {
    function ObjectPropertyBinder(baseObjectPropertyBinder) {
        this.baseObjectPropertyBinder = baseObjectPropertyBinder;
    }
    ObjectPropertyBinder.prototype.bind = function (def) {
        this.baseObjectPropertyBinder.bind(def);
    };
    return ObjectPropertyBinder;
}());
exports.ObjectPropertyBinder = ObjectPropertyBinder;

//# sourceMappingURL=ObjectPropertyBinder.js.map
