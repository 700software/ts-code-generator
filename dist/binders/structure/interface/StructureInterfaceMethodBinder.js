"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureInterfaceMethodParameterBinder_1 = require("./StructureInterfaceMethodParameterBinder");
var StructureInterfaceMethodBinder = (function (_super) {
    __extends(StructureInterfaceMethodBinder, _super);
    function StructureInterfaceMethodBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseFunctionBinder(factory, structure, definitions_1.InterfaceMethodParameterDefinition, StructureInterfaceMethodParameterBinder_1.StructureInterfaceMethodParameterBinder));
    }
    return StructureInterfaceMethodBinder;
}(base_1.InterfaceMethodBinder));
exports.StructureInterfaceMethodBinder = StructureInterfaceMethodBinder;

//# sourceMappingURL=StructureInterfaceMethodBinder.js.map
