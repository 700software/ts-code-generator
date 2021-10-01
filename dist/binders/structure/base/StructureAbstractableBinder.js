"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureAbstractableBinder = (function (_super) {
    __extends(StructureAbstractableBinder, _super);
    function StructureAbstractableBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureAbstractableBinder.prototype.getIsAbstract = function () {
        return this.structure.isAbstract || false;
    };
    return StructureAbstractableBinder;
}(base_1.AbstractableBinder));
exports.StructureAbstractableBinder = StructureAbstractableBinder;

//# sourceMappingURL=StructureAbstractableBinder.js.map
