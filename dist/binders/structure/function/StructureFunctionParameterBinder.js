"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureFunctionParameterBinder = (function (_super) {
    __extends(StructureFunctionParameterBinder, _super);
    function StructureFunctionParameterBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseParameterBinder(factory, structure));
    }
    return StructureFunctionParameterBinder;
}(base_1.FunctionParameterBinder));
exports.StructureFunctionParameterBinder = StructureFunctionParameterBinder;

//# sourceMappingURL=StructureFunctionParameterBinder.js.map
