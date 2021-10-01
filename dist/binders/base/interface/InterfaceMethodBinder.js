"use strict";
var InterfaceMethodBinder = (function () {
    function InterfaceMethodBinder(baseFunctionBinder) {
        this.baseFunctionBinder = baseFunctionBinder;
    }
    InterfaceMethodBinder.prototype.bind = function (def) {
        this.baseFunctionBinder.bind(def);
    };
    return InterfaceMethodBinder;
}());
exports.InterfaceMethodBinder = InterfaceMethodBinder;

//# sourceMappingURL=InterfaceMethodBinder.js.map
