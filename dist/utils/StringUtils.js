"use strict";
var StringUtils = (function () {
    /* istanbul ignore next */ function StringUtils() {
    }
    StringUtils.ensureEndsWithNewline = function (code) {
        if (code[code.length - 1] !== "\n") {
            code += "\n";
        }
        return code;
    };
    StringUtils.isNullOrWhiteSpace = function (str) {
        return typeof str !== "string" || str.trim().length === 0;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;

//# sourceMappingURL=StringUtils.js.map
