"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureReadonlyableBinder = (function (_super) {
    __extends(StructureReadonlyableBinder, _super);
    function StructureReadonlyableBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureReadonlyableBinder.prototype.getIsReadonly = function () {
        return this.structure.isReadonly || false;
    };
    return StructureReadonlyableBinder;
}(base_1.ReadonlyableBinder));
exports.StructureReadonlyableBinder = StructureReadonlyableBinder;

//# sourceMappingURL=StructureReadonlyableBinder.js.map
