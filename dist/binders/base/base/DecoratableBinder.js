"use strict";
var DecoratableBinder = (function () {
    /* istanbul ignore next */ function DecoratableBinder() {
    }
    DecoratableBinder.prototype.bind = function (def) {
        (_a = def.decorators).push.apply(_a, this.getDecorators());
        var _a;
    };
    return DecoratableBinder;
}());
exports.DecoratableBinder = DecoratableBinder;

//# sourceMappingURL=DecoratableBinder.js.map
