"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureClassConstructorParameterBinder = (function (_super) {
    __extends(StructureClassConstructorParameterBinder, _super);
    function StructureClassConstructorParameterBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseParameterBinder(factory, structure), new base_2.StructureDecoratableBinder(factory, structure), new base_2.StructureReadonlyableBinder(structure));
        this.structure = structure;
    }
    StructureClassConstructorParameterBinder.prototype.getClassConstructorParameterScope = function () {
        return this.structure.scope || definitions_1.ClassConstructorParameterScope.None;
    };
    return StructureClassConstructorParameterBinder;
}(base_1.ClassConstructorParameterBinder));
exports.StructureClassConstructorParameterBinder = StructureClassConstructorParameterBinder;

//# sourceMappingURL=StructureClassConstructorParameterBinder.js.map
