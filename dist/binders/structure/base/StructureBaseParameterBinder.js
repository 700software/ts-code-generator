"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureBaseDefinitionBinder_1 = require("./StructureBaseDefinitionBinder");
var StructureDefaultExpressionedBinder_1 = require("./StructureDefaultExpressionedBinder");
var StructureNamedBinder_1 = require("./StructureNamedBinder");
var StructureOptionalBinder_1 = require("./StructureOptionalBinder");
var StructureTypedBinder_1 = require("./StructureTypedBinder");
var StructureBaseParameterBinder = (function (_super) {
    __extends(StructureBaseParameterBinder, _super);
    function StructureBaseParameterBinder(factory, structure) {
        _super.call(this, new StructureBaseDefinitionBinder_1.StructureBaseDefinitionBinder(structure), new StructureNamedBinder_1.StructureNamedBinder(structure), new StructureOptionalBinder_1.StructureOptionalBinder(structure), new StructureTypedBinder_1.StructureTypedBinder(factory, structure), new StructureDefaultExpressionedBinder_1.StructureDefaultExpressionedBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureBaseParameterBinder.prototype.getIsRestParameter = function () {
        return this.structure.isRestParameter || false;
    };
    StructureBaseParameterBinder.prototype.getDestructuringProperties = function () {
        var _this = this;
        return (this.structure.destructuringProperties || []).map(function (p) { return _this.factory.getObjectProperty(p); });
    };
    return StructureBaseParameterBinder;
}(base_1.BaseParameterBinder));
exports.StructureBaseParameterBinder = StructureBaseParameterBinder;

//# sourceMappingURL=StructureBaseParameterBinder.js.map
