"use strict";
var ScopedBinder = (function () {
    /* istanbul ignore next */ function ScopedBinder() {
    }
    ScopedBinder.prototype.bind = function (def) {
        def.scope = this.getScope();
    };
    return ScopedBinder;
}());
exports.ScopedBinder = ScopedBinder;

//# sourceMappingURL=ScopedBinder.js.map
