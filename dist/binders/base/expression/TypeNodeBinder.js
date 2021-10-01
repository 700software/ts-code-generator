"use strict";
var TypeNodeBinder = (function () {
    // todo: remove null and use null object pattern
    function TypeNodeBinder(baseTypeBinder, parameteredBinder, typeParameteredBinder) {
        this.baseTypeBinder = baseTypeBinder;
        this.parameteredBinder = parameteredBinder;
        this.typeParameteredBinder = typeParameteredBinder;
    }
    TypeNodeBinder.prototype.bind = function (def) {
        this.baseTypeBinder.bind(def);
        if (this.parameteredBinder != null)
            this.parameteredBinder.bind(def);
        if (this.typeParameteredBinder != null)
            this.typeParameteredBinder.bind(def);
    };
    return TypeNodeBinder;
}());
exports.TypeNodeBinder = TypeNodeBinder;

//# sourceMappingURL=TypeNodeBinder.js.map
