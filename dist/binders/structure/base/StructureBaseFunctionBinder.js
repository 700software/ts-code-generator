"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureBaseDefinitionBinder_1 = require("./StructureBaseDefinitionBinder");
var StructureNamedBinder_1 = require("./StructureNamedBinder");
var StructureTypeParameteredBinder_1 = require("./StructureTypeParameteredBinder");
var StructureParameteredBinder_1 = require("./StructureParameteredBinder");
var StructureReturnTypedBinder_1 = require("./StructureReturnTypedBinder");
var StructureOverloadSignaturedBinder_1 = require("./StructureOverloadSignaturedBinder");
var StructureDocumentationedBinder_1 = require("./StructureDocumentationedBinder");
var StructureBaseFunctionBinder = (function (_super) {
    __extends(StructureBaseFunctionBinder, _super);
    function StructureBaseFunctionBinder(factory, structure, paramDefinition, paramBinder) {
        _super.call(this, new StructureBaseDefinitionBinder_1.StructureBaseDefinitionBinder(structure), new StructureNamedBinder_1.StructureNamedBinder(structure), new StructureTypeParameteredBinder_1.StructureTypeParameteredBinder(factory, structure), new StructureParameteredBinder_1.StructureParameteredBinder(factory, structure, paramDefinition, paramBinder), new StructureReturnTypedBinder_1.StructureReturnTypedBinder(factory, structure), new StructureOverloadSignaturedBinder_1.StructureOverloadSignaturedBinder(factory, structure), new StructureDocumentationedBinder_1.StructureDocumentationedBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureBaseFunctionBinder.prototype.getIsGenerator = function () {
        return this.structure.isGenerator || false;
    };
    StructureBaseFunctionBinder.prototype.getUserDefinedTypeGuard = function () {
        return null;
    };
    return StructureBaseFunctionBinder;
}(base_1.BaseFunctionBinder));
exports.StructureBaseFunctionBinder = StructureBaseFunctionBinder;

//# sourceMappingURL=StructureBaseFunctionBinder.js.map
