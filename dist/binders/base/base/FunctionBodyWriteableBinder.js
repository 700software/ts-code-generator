"use strict";
var FunctionBodyWriteableBinder = (function () {
    /* istanbul ignore next */ function FunctionBodyWriteableBinder() {
    }
    FunctionBodyWriteableBinder.prototype.bind = function (def) {
        def.onWriteFunctionBody = this.getOnWriteFunctionBody();
    };
    return FunctionBodyWriteableBinder;
}());
exports.FunctionBodyWriteableBinder = FunctionBodyWriteableBinder;

//# sourceMappingURL=FunctionBodyWriteableBinder.js.map
