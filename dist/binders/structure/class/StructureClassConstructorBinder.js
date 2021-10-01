"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureClassConstructorParameterBinder_1 = require("./StructureClassConstructorParameterBinder");
var base_3 = require("./base");
var StructureClassConstructorBinder = (function (_super) {
    __extends(StructureClassConstructorBinder, _super);
    function StructureClassConstructorBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureParameteredBinder(factory, structure, definitions_1.ClassConstructorParameterDefinition, StructureClassConstructorParameterBinder_1.StructureClassConstructorParameterBinder), new base_2.StructureFunctionBodyWriteableBinder(structure), new base_3.StructureScopedBinder(structure), new base_2.StructureOverloadSignaturedBinder(factory, structure), new base_2.StructureDocumentationedBinder(structure));
    }
    return StructureClassConstructorBinder;
}(base_1.ClassConstructorBinder));
exports.StructureClassConstructorBinder = StructureClassConstructorBinder;

//# sourceMappingURL=StructureClassConstructorBinder.js.map
