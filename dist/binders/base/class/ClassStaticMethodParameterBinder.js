"use strict";
var ClassStaticMethodParameterBinder = (function () {
    function ClassStaticMethodParameterBinder(baseClassMethodParameterBinder) {
        this.baseClassMethodParameterBinder = baseClassMethodParameterBinder;
    }
    ClassStaticMethodParameterBinder.prototype.bind = function (def) {
        this.baseClassMethodParameterBinder.bind(def);
    };
    return ClassStaticMethodParameterBinder;
}());
exports.ClassStaticMethodParameterBinder = ClassStaticMethodParameterBinder;

//# sourceMappingURL=ClassStaticMethodParameterBinder.js.map
