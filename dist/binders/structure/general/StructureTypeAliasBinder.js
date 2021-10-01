"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var base_1 = require("./../../base");
var StructureBaseDefinitionBinder_1 = require("./../base/StructureBaseDefinitionBinder");
var StructureNamedBinder_1 = require("./../base/StructureNamedBinder");
var StructureExportableBinder_1 = require("./../base/StructureExportableBinder");
var StructureTypedBinder_1 = require("./../base/StructureTypedBinder");
var StructureTypeParameteredBinder_1 = require("./../base/StructureTypeParameteredBinder");
var StructureAmbientableBinder_1 = require("./../base/StructureAmbientableBinder");
var StructureDocumentationedBinder_1 = require("./../base/StructureDocumentationedBinder");
var StructureTypeAliasBinder = (function (_super) {
    __extends(StructureTypeAliasBinder, _super);
    function StructureTypeAliasBinder(factory, structure) {
        _super.call(this, new StructureBaseDefinitionBinder_1.StructureBaseDefinitionBinder(structure), new StructureNamedBinder_1.StructureNamedBinder(structure), new StructureExportableBinder_1.StructureExportableBinder(structure), new StructureTypedBinder_1.StructureTypedBinder(factory, structure), new StructureTypeParameteredBinder_1.StructureTypeParameteredBinder(factory, structure), new StructureAmbientableBinder_1.StructureAmbientableBinder(utils_1.objectAssign(structure, { isAmbient: true })), new StructureDocumentationedBinder_1.StructureDocumentationedBinder(structure));
    }
    return StructureTypeAliasBinder;
}(base_1.TypeAliasBinder));
exports.StructureTypeAliasBinder = StructureTypeAliasBinder;

//# sourceMappingURL=StructureTypeAliasBinder.js.map
