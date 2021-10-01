"use strict";
var TypeFunctionParameterBinder = (function () {
    function TypeFunctionParameterBinder(baseParameterBinder) {
        this.baseParameterBinder = baseParameterBinder;
    }
    TypeFunctionParameterBinder.prototype.bind = function (def) {
        this.baseParameterBinder.bind(def);
    };
    return TypeFunctionParameterBinder;
}());
exports.TypeFunctionParameterBinder = TypeFunctionParameterBinder;

//# sourceMappingURL=TypeFunctionParameterBinder.js.map
