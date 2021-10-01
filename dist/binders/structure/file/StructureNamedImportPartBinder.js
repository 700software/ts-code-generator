"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureNamedImportPartBinder = (function (_super) {
    __extends(StructureNamedImportPartBinder, _super);
    function StructureNamedImportPartBinder(structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure));
        this.structure = structure;
    }
    StructureNamedImportPartBinder.prototype.getName = function () {
        return this.structure.name;
    };
    StructureNamedImportPartBinder.prototype.getAlias = function () {
        return this.structure.alias || null;
    };
    StructureNamedImportPartBinder.prototype.getDefinitions = function () {
        return [];
    };
    StructureNamedImportPartBinder.prototype.getExpression = function () {
        return null;
    };
    return StructureNamedImportPartBinder;
}(base_1.NamedImportPartBinder));
exports.StructureNamedImportPartBinder = StructureNamedImportPartBinder;

//# sourceMappingURL=StructureNamedImportPartBinder.js.map
