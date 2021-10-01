"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var ReExportDefinition = (function (_super) {
    __extends(ReExportDefinition, _super);
    function ReExportDefinition() {
        _super.apply(this, arguments);
        this.starExports = [];
        this.namedExports = [];
    }
    ReExportDefinition.prototype.getExports = function () {
        var exports = [];
        var handleDefinition = function (definition) {
            if (exports.indexOf(definition) === -1) {
                exports.push(definition);
            }
        };
        this.starExports.forEach(function (e) { return e.definitions.forEach(handleDefinition); });
        this.namedExports.forEach(function (e) { return e.definitions.forEach(handleDefinition); });
        return exports;
    };
    ReExportDefinition.prototype.addNamedExport = function (structure) {
        var def = new factories_1.StructureFactory().getNamedImportPart(structure);
        this.namedExports.push(def);
        return def;
    };
    ReExportDefinition.prototype.getNamedExport = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.namedExports, searchFunction);
    };
    ReExportDefinition.prototype.getStarExport = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.starExports, searchFunction);
    };
    ReExportDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var exportWriter = factories_1.MainFactory.createWriteFactory(writer).getReExportWriter();
        exportWriter.write(this);
        return writer.toString();
    };
    return ReExportDefinition;
}(base_1.BaseDefinition));
exports.ReExportDefinition = ReExportDefinition;

//# sourceMappingURL=ReExportDefinition.js.map
