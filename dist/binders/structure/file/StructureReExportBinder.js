"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureReExportBinder = (function (_super) {
    __extends(StructureReExportBinder, _super);
    function StructureReExportBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureReExportBinder.prototype.getFileName = function () {
        return "";
    };
    StructureReExportBinder.prototype.getModuleSpecifier = function () {
        return this.structure.moduleSpecifier || "";
    };
    StructureReExportBinder.prototype.getIsStarExport = function () {
        return utils_1.ArrayUtils.isNullOrEmpty(this.structure.namedExports);
    };
    StructureReExportBinder.prototype.getNamedExports = function () {
        var _this = this;
        return (this.structure.namedExports || []).map(function (n) { return _this.factory.getNamedImportPart(n); });
    };
    StructureReExportBinder.prototype.getStarExports = function () {
        return [];
    };
    return StructureReExportBinder;
}(base_1.ReExportBinder));
exports.StructureReExportBinder = StructureReExportBinder;

//# sourceMappingURL=StructureReExportBinder.js.map
