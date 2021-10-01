"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureBaseDefinitionBinder_1 = require("./../base/StructureBaseDefinitionBinder");
var StructureNamedBinder_1 = require("./../base/StructureNamedBinder");
var StructureTypeParameterBinder = (function (_super) {
    __extends(StructureTypeParameterBinder, _super);
    function StructureTypeParameterBinder(factory, structure) {
        _super.call(this, new StructureBaseDefinitionBinder_1.StructureBaseDefinitionBinder(structure), new StructureNamedBinder_1.StructureNamedBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureTypeParameterBinder.prototype.getConstraintType = function () {
        return this.structure.constraintType == null ? null : this.factory.getTypeFromText(this.structure.constraintType);
    };
    return StructureTypeParameterBinder;
}(base_1.TypeParameterBinder));
exports.StructureTypeParameterBinder = StructureTypeParameterBinder;

//# sourceMappingURL=StructureTypeParameterBinder.js.map
