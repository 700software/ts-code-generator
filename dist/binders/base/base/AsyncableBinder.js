"use strict";
var AsyncableBinder = (function () {
    /* istanbul ignore next */ function AsyncableBinder() {
    }
    AsyncableBinder.prototype.bind = function (def) {
        def.isAsync = this.getIsAsync();
    };
    return AsyncableBinder;
}());
exports.AsyncableBinder = AsyncableBinder;

//# sourceMappingURL=AsyncableBinder.js.map
