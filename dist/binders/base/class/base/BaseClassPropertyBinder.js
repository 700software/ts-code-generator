"use strict";
var BaseClassPropertyBinder = (function () {
    function BaseClassPropertyBinder(objectPropertyBinder, decoratableBinder, scopedBinder, documentationedBinder) {
        this.objectPropertyBinder = objectPropertyBinder;
        this.decoratableBinder = decoratableBinder;
        this.scopedBinder = scopedBinder;
        this.documentationedBinder = documentationedBinder;
    }
    BaseClassPropertyBinder.prototype.bind = function (def) {
        this.objectPropertyBinder.bind(def);
        this.decoratableBinder.bind(def);
        this.scopedBinder.bind(def);
        this.documentationedBinder.bind(def);
    };
    return BaseClassPropertyBinder;
}());
exports.BaseClassPropertyBinder = BaseClassPropertyBinder;

//# sourceMappingURL=BaseClassPropertyBinder.js.map
