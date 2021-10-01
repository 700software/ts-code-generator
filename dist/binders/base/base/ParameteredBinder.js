"use strict";
var ParameteredBinder = (function () {
    /* istanbul ignore next */ function ParameteredBinder() {
    }
    ParameteredBinder.prototype.bind = function (def) {
        (_a = def.parameters).push.apply(_a, this.getParameters());
        var _a;
    };
    return ParameteredBinder;
}());
exports.ParameteredBinder = ParameteredBinder;

//# sourceMappingURL=ParameteredBinder.js.map
