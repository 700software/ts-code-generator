"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureNamedBinder_1 = require("./StructureNamedBinder");
var StructureOptionalBinder_1 = require("./StructureOptionalBinder");
var StructureTypedBinder_1 = require("./StructureTypedBinder");
var StructureBaseDefinitionBinder_1 = require("./StructureBaseDefinitionBinder");
var StructureReadonlyableBinder_1 = require("./StructureReadonlyableBinder");
var StructureBasePropertyBinder = (function (_super) {
    __extends(StructureBasePropertyBinder, _super);
    function StructureBasePropertyBinder(factory, structure) {
        _super.call(this, new StructureBaseDefinitionBinder_1.StructureBaseDefinitionBinder(structure), new StructureNamedBinder_1.StructureNamedBinder(structure), new StructureOptionalBinder_1.StructureOptionalBinder(structure), new StructureTypedBinder_1.StructureTypedBinder(factory, structure), new StructureReadonlyableBinder_1.StructureReadonlyableBinder(structure));
    }
    return StructureBasePropertyBinder;
}(base_1.BasePropertyBinder));
exports.StructureBasePropertyBinder = StructureBasePropertyBinder;

//# sourceMappingURL=StructureBasePropertyBinder.js.map
