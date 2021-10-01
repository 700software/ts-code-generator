"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureFunctionParameterBinder_1 = require("./StructureFunctionParameterBinder");
var StructureFunctionBinder = (function (_super) {
    __extends(StructureFunctionBinder, _super);
    function StructureFunctionBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseFunctionBinder(factory, structure, definitions_1.FunctionParameterDefinition, StructureFunctionParameterBinder_1.StructureFunctionParameterBinder), new base_2.StructureExportableBinder(structure), new base_2.StructureAmbientableBinder(structure), new base_2.StructureAsyncableBinder(structure), new base_2.StructureFunctionBodyWriteableBinder(structure));
    }
    return StructureFunctionBinder;
}(base_1.FunctionBinder));
exports.StructureFunctionBinder = StructureFunctionBinder;

//# sourceMappingURL=StructureFunctionBinder.js.map
