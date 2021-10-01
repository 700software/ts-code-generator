"use strict";
var ClassPropertyBinder = (function () {
    function ClassPropertyBinder(baseClassPropertyBinder, abstractableBinder) {
        this.baseClassPropertyBinder = baseClassPropertyBinder;
        this.abstractableBinder = abstractableBinder;
    }
    ClassPropertyBinder.prototype.bind = function (def) {
        this.baseClassPropertyBinder.bind(def);
        this.abstractableBinder.bind(def);
        def.kind = this.getKind();
        def.onWriteGetBody = this.getOnWriteGetBody();
        def.onWriteSetBody = this.getOnWriteSetBody();
    };
    return ClassPropertyBinder;
}());
exports.ClassPropertyBinder = ClassPropertyBinder;

//# sourceMappingURL=ClassPropertyBinder.js.map
