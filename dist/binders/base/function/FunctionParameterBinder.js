"use strict";
var FunctionParameterBinder = (function () {
    function FunctionParameterBinder(baseParameterBinder) {
        this.baseParameterBinder = baseParameterBinder;
    }
    FunctionParameterBinder.prototype.bind = function (def) {
        this.baseParameterBinder.bind(def);
    };
    return FunctionParameterBinder;
}());
exports.FunctionParameterBinder = FunctionParameterBinder;

//# sourceMappingURL=FunctionParameterBinder.js.map
