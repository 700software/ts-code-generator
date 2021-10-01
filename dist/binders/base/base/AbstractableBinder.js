"use strict";
var AbstractableBinder = (function () {
    /* istanbul ignore next */ function AbstractableBinder() {
    }
    AbstractableBinder.prototype.bind = function (def) {
        def.isAbstract = this.getIsAbstract();
    };
    return AbstractableBinder;
}());
exports.AbstractableBinder = AbstractableBinder;

//# sourceMappingURL=AbstractableBinder.js.map
