"use strict";
var InterfaceMethodParameterBinder = (function () {
    function InterfaceMethodParameterBinder(baseParameterBinder) {
        this.baseParameterBinder = baseParameterBinder;
    }
    InterfaceMethodParameterBinder.prototype.bind = function (def) {
        this.baseParameterBinder.bind(def);
    };
    return InterfaceMethodParameterBinder;
}());
exports.InterfaceMethodParameterBinder = InterfaceMethodParameterBinder;

//# sourceMappingURL=InterfaceMethodParameterBinder.js.map
