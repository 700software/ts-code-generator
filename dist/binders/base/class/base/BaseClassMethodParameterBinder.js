"use strict";
var BaseClassMethodParameterBinder = (function () {
    function BaseClassMethodParameterBinder(baseParameterBinder, decoratableBinder, scopedBinder) {
        this.baseParameterBinder = baseParameterBinder;
        this.decoratableBinder = decoratableBinder;
        this.scopedBinder = scopedBinder;
    }
    BaseClassMethodParameterBinder.prototype.bind = function (def) {
        this.baseParameterBinder.bind(def);
        this.decoratableBinder.bind(def);
        this.scopedBinder.bind(def);
    };
    return BaseClassMethodParameterBinder;
}());
exports.BaseClassMethodParameterBinder = BaseClassMethodParameterBinder;

//# sourceMappingURL=BaseClassMethodParameterBinder.js.map
