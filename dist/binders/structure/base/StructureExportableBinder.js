"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureExportableBinder = (function (_super) {
    __extends(StructureExportableBinder, _super);
    function StructureExportableBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureExportableBinder.prototype.getIsExported = function () {
        return this.structure.isExported || false;
    };
    StructureExportableBinder.prototype.getIsDefaultExportOfFile = function () {
        return this.structure.isDefaultExportOfFile || false;
    };
    StructureExportableBinder.prototype.getIsNamedExportOfFile = function () {
        return this.structure.isNamedExportOfFile || false;
    };
    return StructureExportableBinder;
}(base_1.ExportableBinder));
exports.StructureExportableBinder = StructureExportableBinder;

//# sourceMappingURL=StructureExportableBinder.js.map
