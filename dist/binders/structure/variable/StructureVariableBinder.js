"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureVariableBinder = (function (_super) {
    __extends(StructureVariableBinder, _super);
    function StructureVariableBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureNamedBinder(structure), new base_2.StructureExportableBinder(structure), new base_2.StructureAmbientableBinder(structure), new base_2.StructureTypedBinder(factory, structure), new base_2.StructureDefaultExpressionedBinder(structure), new base_2.StructureDocumentationedBinder(structure));
        this.structure = structure;
    }
    StructureVariableBinder.prototype.getDeclarationType = function () {
        return this.structure.declarationType || definitions_1.VariableDeclarationType.Let;
    };
    return StructureVariableBinder;
}(base_1.VariableBinder));
exports.StructureVariableBinder = StructureVariableBinder;

//# sourceMappingURL=StructureVariableBinder.js.map
