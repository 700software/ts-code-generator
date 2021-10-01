"use strict";
var AmbientableBinder = (function () {
    /* istanbul ignore next */ function AmbientableBinder() {
    }
    AmbientableBinder.prototype.bind = function (def) {
        def.isAmbient = this.getIsAmbient();
        def.hasDeclareKeyword = this.getHasDeclareKeyword();
    };
    return AmbientableBinder;
}());
exports.AmbientableBinder = AmbientableBinder;

//# sourceMappingURL=AmbientableBinder.js.map
