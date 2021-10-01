"use strict";
var TypedBinder = (function () {
    /* istanbul ignore next */ function TypedBinder() {
    }
    TypedBinder.prototype.bind = function (def) {
        def.type = this.getType();
    };
    return TypedBinder;
}());
exports.TypedBinder = TypedBinder;

//# sourceMappingURL=TypedBinder.js.map
