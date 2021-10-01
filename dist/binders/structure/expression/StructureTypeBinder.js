"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./base");
var StructureTypeBinder = (function (_super) {
    __extends(StructureTypeBinder, _super);
    function StructureTypeBinder(factory, text) {
        _super.call(this, new base_2.StructureBaseTypeBinder(factory, text));
        this.factory = factory;
        this.text = text;
    }
    StructureTypeBinder.prototype.getCallSignatures = function () {
        return [];
    };
    StructureTypeBinder.prototype.getTypeNode = function () {
        return null;
    };
    return StructureTypeBinder;
}(base_1.TypeBinder));
exports.StructureTypeBinder = StructureTypeBinder;

//# sourceMappingURL=StructureTypeBinder.js.map
