"use strict";
var ClassMethodParameterBinder = (function () {
    function ClassMethodParameterBinder(baseClassMethodParameterBinder) {
        this.baseClassMethodParameterBinder = baseClassMethodParameterBinder;
    }
    ClassMethodParameterBinder.prototype.bind = function (def) {
        this.baseClassMethodParameterBinder.bind(def);
    };
    return ClassMethodParameterBinder;
}());
exports.ClassMethodParameterBinder = ClassMethodParameterBinder;

//# sourceMappingURL=ClassMethodParameterBinder.js.map
