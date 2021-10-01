"use strict";
function objectAssign(target, source) {
    var newObj = target;
    Object.keys(source).forEach(function (key) {
        newObj[key] = source[key];
    });
    return newObj;
}
exports.objectAssign = objectAssign;

//# sourceMappingURL=objectAssign.js.map
