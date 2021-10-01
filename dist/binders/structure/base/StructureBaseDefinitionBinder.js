"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureBaseDefinitionBinder = (function (_super) {
    __extends(StructureBaseDefinitionBinder, _super);
    function StructureBaseDefinitionBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureBaseDefinitionBinder.prototype.getOnBeforeWrite = function () {
        return this.structure.onBeforeWrite || null;
    };
    StructureBaseDefinitionBinder.prototype.getOnAfterWrite = function () {
        return this.structure.onAfterWrite || null;
    };
    return StructureBaseDefinitionBinder;
}(base_1.BaseDefinitionBinder));
exports.StructureBaseDefinitionBinder = StructureBaseDefinitionBinder;

//# sourceMappingURL=StructureBaseDefinitionBinder.js.map
