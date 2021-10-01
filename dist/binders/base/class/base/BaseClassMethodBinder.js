"use strict";
var BaseClassMethodBinder = (function () {
    function BaseClassMethodBinder(baseFunctionBinder, decoratableBinder, scopedBinder, asyncableBinder, functionBodyWriteableBinder) {
        this.baseFunctionBinder = baseFunctionBinder;
        this.decoratableBinder = decoratableBinder;
        this.scopedBinder = scopedBinder;
        this.asyncableBinder = asyncableBinder;
        this.functionBodyWriteableBinder = functionBodyWriteableBinder;
    }
    BaseClassMethodBinder.prototype.bind = function (def) {
        this.baseFunctionBinder.bind(def);
        this.decoratableBinder.bind(def);
        this.scopedBinder.bind(def);
        this.asyncableBinder.bind(def);
        this.functionBodyWriteableBinder.bind(def);
    };
    return BaseClassMethodBinder;
}());
exports.BaseClassMethodBinder = BaseClassMethodBinder;

//# sourceMappingURL=BaseClassMethodBinder.js.map
