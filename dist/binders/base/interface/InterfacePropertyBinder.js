"use strict";
var InterfacePropertyBinder = (function () {
    function InterfacePropertyBinder(basePropertyBinder, documentationedBinder) {
        this.basePropertyBinder = basePropertyBinder;
        this.documentationedBinder = documentationedBinder;
    }
    InterfacePropertyBinder.prototype.bind = function (def) {
        this.basePropertyBinder.bind(def);
        this.documentationedBinder.bind(def);
    };
    return InterfacePropertyBinder;
}());
exports.InterfacePropertyBinder = InterfacePropertyBinder;

//# sourceMappingURL=InterfacePropertyBinder.js.map
