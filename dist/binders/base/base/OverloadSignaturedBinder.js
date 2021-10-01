"use strict";
var OverloadSignaturedBinder = (function () {
    /* istanbul ignore next */ function OverloadSignaturedBinder() {
    }
    OverloadSignaturedBinder.prototype.bind = function (def) {
        (_a = def.overloadSignatures).push.apply(_a, this.getOverloadSignatures());
        var _a;
    };
    return OverloadSignaturedBinder;
}());
exports.OverloadSignaturedBinder = OverloadSignaturedBinder;

//# sourceMappingURL=OverloadSignaturedBinder.js.map
