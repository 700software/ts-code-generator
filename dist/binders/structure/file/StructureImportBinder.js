"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureImportBinder = (function (_super) {
    __extends(StructureImportBinder, _super);
    function StructureImportBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureImportBinder.prototype.getFileName = function () {
        return "";
    };
    StructureImportBinder.prototype.getModuleSpecifier = function () {
        return this.structure.moduleSpecifier || "";
    };
    StructureImportBinder.prototype.getIsStarImport = function () {
        return !utils_1.StringUtils.isNullOrWhiteSpace(this.structure.starImportName);
    };
    StructureImportBinder.prototype.getStarImportName = function () {
        return this.structure.starImportName || "";
    };
    StructureImportBinder.prototype.getDefaultImport = function () {
        if (!utils_1.StringUtils.isNullOrWhiteSpace(this.structure.defaultImportName)) {
            return this.factory.getDefaultImportPartByName(this.structure.defaultImportName);
        }
        else {
            return null;
        }
    };
    StructureImportBinder.prototype.getNamedImports = function () {
        var _this = this;
        return (this.structure.namedImports || []).map(function (n) { return _this.factory.getNamedImportPart(n); });
    };
    StructureImportBinder.prototype.getStarImports = function () {
        return [];
    };
    return StructureImportBinder;
}(base_1.ImportBinder));
exports.StructureImportBinder = StructureImportBinder;

//# sourceMappingURL=StructureImportBinder.js.map
