"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureBaseDefinitionBinder_1 = require("./../base/StructureBaseDefinitionBinder");
var StructureUserDefinedTypeGuardBinder = (function (_super) {
    __extends(StructureUserDefinedTypeGuardBinder, _super);
    function StructureUserDefinedTypeGuardBinder(factory, structure) {
        _super.call(this, new StructureBaseDefinitionBinder_1.StructureBaseDefinitionBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureUserDefinedTypeGuardBinder.prototype.getParameterName = function () {
        return this.structure.parameterName || "this";
    };
    StructureUserDefinedTypeGuardBinder.prototype.getType = function () {
        return this.factory.getTypeFromText(this.structure.type);
    };
    return StructureUserDefinedTypeGuardBinder;
}(base_1.UserDefinedTypeGuardBinder));
exports.StructureUserDefinedTypeGuardBinder = StructureUserDefinedTypeGuardBinder;

//# sourceMappingURL=StructureUserDefinedTypeGuardBinder.js.map
