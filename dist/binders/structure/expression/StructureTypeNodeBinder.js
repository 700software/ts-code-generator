"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./base");
var StructureTypeNodeBinder = (function (_super) {
    __extends(StructureTypeNodeBinder, _super);
    function StructureTypeNodeBinder(factory, text) {
        _super.call(this, new base_2.StructureBaseTypeBinder(factory, text), null, null);
        this.factory = factory;
        this.text = text;
    }
    return StructureTypeNodeBinder;
}(base_1.TypeNodeBinder));
exports.StructureTypeNodeBinder = StructureTypeNodeBinder;

//# sourceMappingURL=StructureTypeNodeBinder.js.map
