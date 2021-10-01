"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureInterfacePropertyBinder = (function (_super) {
    __extends(StructureInterfacePropertyBinder, _super);
    function StructureInterfacePropertyBinder(factory, structure) {
        _super.call(this, new base_2.StructureBasePropertyBinder(factory, structure), new base_2.StructureDocumentationedBinder(structure));
    }
    return StructureInterfacePropertyBinder;
}(base_1.InterfacePropertyBinder));
exports.StructureInterfacePropertyBinder = StructureInterfacePropertyBinder;

//# sourceMappingURL=StructureInterfacePropertyBinder.js.map
