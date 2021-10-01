"use strict";
var NamedBinder = (function () {
    /* istanbul ignore next */ function NamedBinder() {
    }
    NamedBinder.prototype.bind = function (def) {
        def.name = this.getName();
    };
    return NamedBinder;
}());
exports.NamedBinder = NamedBinder;

//# sourceMappingURL=NamedBinder.js.map
