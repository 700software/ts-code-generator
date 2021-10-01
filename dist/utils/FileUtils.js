"use strict";
var FileUtils = (function () {
    /* istanbul ignore next */ function FileUtils() {
    }
    FileUtils.standardizeSlashes = function (fileName) {
        return fileName.replace(/\\/g, "/");
    };
    FileUtils.filePathMatches = function (fileName, searchString) {
        var _this = this;
        var splitBySlash = function (p) { return _this.standardizeSlashes(p || "").replace(/^\//, "").split("/"); };
        var fileNameItems = splitBySlash(fileName);
        var searchItems = splitBySlash(searchString);
        if (searchItems.length > fileNameItems.length) {
            return false;
        }
        for (var i = 0; i < searchItems.length; i++) {
            if (searchItems[searchItems.length - i - 1] !== fileNameItems[fileNameItems.length - i - 1]) {
                return false;
            }
        }
        return searchItems.length > 0;
    };
    return FileUtils;
}());
exports.FileUtils = FileUtils;

//# sourceMappingURL=FileUtils.js.map
