"use strict";
var BaseTypeBinder = (function () {
    function BaseTypeBinder(expressionBinder) {
        this.expressionBinder = expressionBinder;
    }
    BaseTypeBinder.prototype.bind = function (def) {
        this.expressionBinder.bind(def);
        if (this.isUnionType())
            (_a = def.unionTypes).push.apply(_a, this.getUnionOrIntersectionTypes());
        else if (this.isIntersectionType())
            (_b = def.intersectionTypes).push.apply(_b, this.getUnionOrIntersectionTypes());
        if (this.isArrayType())
            def.arrayElementType = this.getArrayElementType();
        (_c = def.properties).push.apply(_c, this.getProperties());
        (_d = def.typeArguments).push.apply(_d, this.getTypeArguments());
        var _a, _b, _c, _d;
    };
    return BaseTypeBinder;
}());
exports.BaseTypeBinder = BaseTypeBinder;

//# sourceMappingURL=BaseTypeBinder.js.map
