"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureTypedBinder = (function (_super) {
    __extends(StructureTypedBinder, _super);
    function StructureTypedBinder(factory, structure) {
        _super.call(this);
        this.factory = factory;
        this.structure = structure;
    }
    StructureTypedBinder.prototype.getType = function () {
        return this.factory.getTypeFromText(this.structure.type || "any");
    };
    return StructureTypedBinder;
}(base_1.TypedBinder));
exports.StructureTypedBinder = StructureTypedBinder;

//# sourceMappingURL=StructureTypedBinder.js.map
