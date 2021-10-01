"use strict";
var StringHashSet = (function () {
    function StringHashSet() {
        this.obj = {};
    }
    StringHashSet.prototype.add = function (key) {
        this.obj[key] = true;
    };
    StringHashSet.prototype.contains = function (key) {
        return this.obj[key] === true;
    };
    return StringHashSet;
}());
exports.StringHashSet = StringHashSet;

//# sourceMappingURL=StringHashSet.js.map
