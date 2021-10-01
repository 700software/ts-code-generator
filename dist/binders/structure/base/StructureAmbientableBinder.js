"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureAmbientableBinder = (function (_super) {
    __extends(StructureAmbientableBinder, _super);
    function StructureAmbientableBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureAmbientableBinder.prototype.getIsAmbient = function () {
        return this.structure.isAmbient || false;
    };
    StructureAmbientableBinder.prototype.getHasDeclareKeyword = function () {
        return this.structure.hasDeclareKeyword || false;
    };
    return StructureAmbientableBinder;
}(base_1.AmbientableBinder));
exports.StructureAmbientableBinder = StructureAmbientableBinder;

//# sourceMappingURL=StructureAmbientableBinder.js.map
