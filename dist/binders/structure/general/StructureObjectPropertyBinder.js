"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureBaseObjectPropertyBinder_1 = require("./../base/StructureBaseObjectPropertyBinder");
var StructureObjectPropertyBinder = (function (_super) {
    __extends(StructureObjectPropertyBinder, _super);
    function StructureObjectPropertyBinder(factory, structure) {
        _super.call(this, new StructureBaseObjectPropertyBinder_1.StructureBaseObjectPropertyBinder(factory, structure));
    }
    return StructureObjectPropertyBinder;
}(base_1.ObjectPropertyBinder));
exports.StructureObjectPropertyBinder = StructureObjectPropertyBinder;

//# sourceMappingURL=StructureObjectPropertyBinder.js.map
