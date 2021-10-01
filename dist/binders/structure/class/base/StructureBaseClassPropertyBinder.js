"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../../base");
var base_2 = require("./../../base");
var StructureScopedBinder_1 = require("./StructureScopedBinder");
var StructureBaseClassPropertyBinder = (function (_super) {
    __extends(StructureBaseClassPropertyBinder, _super);
    function StructureBaseClassPropertyBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseObjectPropertyBinder(factory, structure), new base_2.StructureDecoratableBinder(factory, structure), new StructureScopedBinder_1.StructureScopedBinder(structure), new base_2.StructureDocumentationedBinder(structure));
    }
    return StructureBaseClassPropertyBinder;
}(base_1.BaseClassPropertyBinder));
exports.StructureBaseClassPropertyBinder = StructureBaseClassPropertyBinder;

//# sourceMappingURL=StructureBaseClassPropertyBinder.js.map
