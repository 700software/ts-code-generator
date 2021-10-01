"use strict";
var OptionalBinder = (function () {
    /* istanbul ignore next */ function OptionalBinder() {
    }
    OptionalBinder.prototype.bind = function (def) {
        def.isOptional = this.getIsOptional();
    };
    return OptionalBinder;
}());
exports.OptionalBinder = OptionalBinder;

//# sourceMappingURL=OptionalBinder.js.map
