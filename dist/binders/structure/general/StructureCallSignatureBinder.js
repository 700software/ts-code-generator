"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureCallSignatureParameterBinder_1 = require("./StructureCallSignatureParameterBinder");
var StructureCallSignatureBinder = (function (_super) {
    __extends(StructureCallSignatureBinder, _super);
    function StructureCallSignatureBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureTypeParameteredBinder(factory, structure), new base_2.StructureParameteredBinder(factory, structure, definitions_1.CallSignatureParameterDefinition, StructureCallSignatureParameterBinder_1.StructureCallSignatureParameterBinder), new base_2.StructureReturnTypedBinder(factory, structure), new base_2.StructureDocumentationedBinder(structure));
    }
    return StructureCallSignatureBinder;
}(base_1.CallSignatureBinder));
exports.StructureCallSignatureBinder = StructureCallSignatureBinder;

//# sourceMappingURL=StructureCallSignatureBinder.js.map
