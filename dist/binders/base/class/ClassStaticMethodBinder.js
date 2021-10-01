"use strict";
var ClassStaticMethodBinder = (function () {
    function ClassStaticMethodBinder(baseClassMethodBinder) {
        this.baseClassMethodBinder = baseClassMethodBinder;
    }
    ClassStaticMethodBinder.prototype.bind = function (def) {
        this.baseClassMethodBinder.bind(def);
    };
    return ClassStaticMethodBinder;
}());
exports.ClassStaticMethodBinder = ClassStaticMethodBinder;

//# sourceMappingURL=ClassStaticMethodBinder.js.map
