"use strict";
var FunctionBinder = (function () {
    function FunctionBinder(baseFunctionBinder, exportableBinder, ambientableBinder, asyncableBinder, functionBodyWriteableBinder) {
        this.baseFunctionBinder = baseFunctionBinder;
        this.exportableBinder = exportableBinder;
        this.ambientableBinder = ambientableBinder;
        this.asyncableBinder = asyncableBinder;
        this.functionBodyWriteableBinder = functionBodyWriteableBinder;
    }
    FunctionBinder.prototype.bind = function (def) {
        this.baseFunctionBinder.bind(def);
        this.exportableBinder.bind(def);
        this.ambientableBinder.bind(def);
        this.asyncableBinder.bind(def);
        this.functionBodyWriteableBinder.bind(def);
    };
    return FunctionBinder;
}());
exports.FunctionBinder = FunctionBinder;

//# sourceMappingURL=FunctionBinder.js.map
