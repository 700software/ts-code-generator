"use strict";
var ClassMethodBinder = (function () {
    function ClassMethodBinder(baseClassMethodBinder, abstractableBinder) {
        this.baseClassMethodBinder = baseClassMethodBinder;
        this.abstractableBinder = abstractableBinder;
    }
    ClassMethodBinder.prototype.bind = function (def) {
        this.baseClassMethodBinder.bind(def);
        this.abstractableBinder.bind(def);
    };
    return ClassMethodBinder;
}());
exports.ClassMethodBinder = ClassMethodBinder;

//# sourceMappingURL=ClassMethodBinder.js.map
