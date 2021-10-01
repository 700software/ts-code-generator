"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureClassMethodParameterBinder_1 = require("./StructureClassMethodParameterBinder");
var base_3 = require("./base");
var StructureClassMethodBinder = (function (_super) {
    __extends(StructureClassMethodBinder, _super);
    function StructureClassMethodBinder(factory, structure) {
        _super.call(this, new base_3.StructureBaseClassMethodBinder(factory, structure, definitions_1.ClassMethodParameterDefinition, StructureClassMethodParameterBinder_1.StructureClassMethodParameterBinder), new base_2.StructureAbstractableBinder(structure));
    }
    return StructureClassMethodBinder;
}(base_1.ClassMethodBinder));
exports.StructureClassMethodBinder = StructureClassMethodBinder;

//# sourceMappingURL=StructureClassMethodBinder.js.map
