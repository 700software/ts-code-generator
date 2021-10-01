"use strict";
var ArrayUtils = (function () {
    /* istanbul ignore next */ function ArrayUtils() {
    }
    ArrayUtils.isNullOrEmpty = function (a) {
        return !(a instanceof Array) || a.length === 0;
    };
    ArrayUtils.firstOrDefault = function (a, isMatch) {
        for (var i = 0; i < a.length; i++) {
            if (isMatch(a[i])) {
                return a[i];
            }
        }
        return null;
    };
    ArrayUtils.getUniqueItems = function (a) {
        return a.filter(function (item, index) { return a.indexOf(item) === index; });
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;

//# sourceMappingURL=ArrayUtils.js.map
