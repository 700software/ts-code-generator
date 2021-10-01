"use strict";
var ClassStaticPropertyBinder = (function () {
    function ClassStaticPropertyBinder(baseClassPropertyBinder) {
        this.baseClassPropertyBinder = baseClassPropertyBinder;
    }
    ClassStaticPropertyBinder.prototype.bind = function (def) {
        this.baseClassPropertyBinder.bind(def);
    };
    return ClassStaticPropertyBinder;
}());
exports.ClassStaticPropertyBinder = ClassStaticPropertyBinder;

//# sourceMappingURL=ClassStaticPropertyBinder.js.map
