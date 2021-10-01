"use strict";
var ExportableBinder = (function () {
    /* istanbul ignore next */ function ExportableBinder() {
    }
    ExportableBinder.prototype.bind = function (def) {
        def.isExported = this.getIsExported();
        def.isDefaultExportOfFile = this.getIsDefaultExportOfFile();
        def.isNamedExportOfFile = this.getIsNamedExportOfFile();
    };
    return ExportableBinder;
}());
exports.ExportableBinder = ExportableBinder;

//# sourceMappingURL=ExportableBinder.js.map
