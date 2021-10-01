"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureOptionalBinder = (function (_super) {
    __extends(StructureOptionalBinder, _super);
    function StructureOptionalBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureOptionalBinder.prototype.getIsOptional = function () {
        return this.structure.isOptional || false;
    };
    return StructureOptionalBinder;
}(base_1.OptionalBinder));
exports.StructureOptionalBinder = StructureOptionalBinder;

//# sourceMappingURL=StructureOptionalBinder.js.map
