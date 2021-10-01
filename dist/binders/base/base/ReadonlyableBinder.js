"use strict";
var ReadonlyableBinder = (function () {
    /* istanbul ignore next */ function ReadonlyableBinder() {
    }
    ReadonlyableBinder.prototype.bind = function (def) {
        def.isReadonly = this.getIsReadonly();
    };
    return ReadonlyableBinder;
}());
exports.ReadonlyableBinder = ReadonlyableBinder;

//# sourceMappingURL=ReadonlyableBinder.js.map
