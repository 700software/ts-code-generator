"use strict";
var TypeBinder = (function () {
    function TypeBinder(baseTypeBinder) {
        this.baseTypeBinder = baseTypeBinder;
    }
    TypeBinder.prototype.bind = function (def) {
        this.baseTypeBinder.bind(def);
        (_a = def.callSignatures).push.apply(_a, this.getCallSignatures());
        def.node = this.getTypeNode();
        var _a;
    };
    return TypeBinder;
}());
exports.TypeBinder = TypeBinder;

//# sourceMappingURL=TypeBinder.js.map
