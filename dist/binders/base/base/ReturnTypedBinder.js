"use strict";
var ReturnTypedBinder = (function () {
    /* istanbul ignore next */ function ReturnTypedBinder() {
    }
    ReturnTypedBinder.prototype.bind = function (def) {
        def.returnType = this.getReturnType();
    };
    return ReturnTypedBinder;
}());
exports.ReturnTypedBinder = ReturnTypedBinder;

//# sourceMappingURL=ReturnTypedBinder.js.map
