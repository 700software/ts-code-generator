"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureFileBinder = (function (_super) {
    __extends(StructureFileBinder, _super);
    function StructureFileBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureModuledBinder(factory, structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureFileBinder.prototype.getFileName = function () {
        return this.structure.fileName || "";
    };
    StructureFileBinder.prototype.getDefaultExportExpression = function () {
        return this.factory.getExpressionFromText(this.structure.defaultExportExpression);
    };
    StructureFileBinder.prototype.getImports = function () {
        var _this = this;
        return (this.structure.imports || []).map(function (i) { return _this.factory.getImport(i); });
    };
    StructureFileBinder.prototype.getReExports = function () {
        var _this = this;
        return (this.structure.reExports || []).map(function (r) { return _this.factory.getReExport(r); });
    };
    return StructureFileBinder;
}(base_1.FileBinder));
exports.StructureFileBinder = StructureFileBinder;

//# sourceMappingURL=StructureFileBinder.js.map
