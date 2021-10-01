"use strict";
var TypeParameteredBinder = (function () {
    /* istanbul ignore next */ function TypeParameteredBinder() {
    }
    TypeParameteredBinder.prototype.bind = function (def) {
        (_a = def.typeParameters).push.apply(_a, this.getTypeParameters());
        var _a;
    };
    return TypeParameteredBinder;
}());
exports.TypeParameteredBinder = TypeParameteredBinder;

//# sourceMappingURL=TypeParameteredBinder.js.map
