"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var StructureClassStaticMethodParameterBinder_1 = require("./StructureClassStaticMethodParameterBinder");
var base_2 = require("./base");
var StructureClassStaticMethodBinder = (function (_super) {
    __extends(StructureClassStaticMethodBinder, _super);
    function StructureClassStaticMethodBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseClassMethodBinder(factory, structure, definitions_1.ClassStaticMethodParameterDefinition, StructureClassStaticMethodParameterBinder_1.StructureClassStaticMethodParameterBinder));
    }
    return StructureClassStaticMethodBinder;
}(base_1.ClassStaticMethodBinder));
exports.StructureClassStaticMethodBinder = StructureClassStaticMethodBinder;

//# sourceMappingURL=StructureClassStaticMethodBinder.js.map
