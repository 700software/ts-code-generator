"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureDefaultImportPartBinder = (function (_super) {
    __extends(StructureDefaultImportPartBinder, _super);
    function StructureDefaultImportPartBinder(name) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder({}));
        this.name = name;
    }
    StructureDefaultImportPartBinder.prototype.getName = function () {
        return this.name;
    };
    StructureDefaultImportPartBinder.prototype.getDefinitions = function () {
        return [];
    };
    StructureDefaultImportPartBinder.prototype.getExpression = function () {
        return null;
    };
    return StructureDefaultImportPartBinder;
}(base_1.DefaultImportPartBinder));
exports.StructureDefaultImportPartBinder = StructureDefaultImportPartBinder;

//# sourceMappingURL=StructureDefaultImportPartBinder.js.map
