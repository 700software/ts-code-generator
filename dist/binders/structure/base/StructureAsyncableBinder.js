"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureAsyncableBinder = (function (_super) {
    __extends(StructureAsyncableBinder, _super);
    function StructureAsyncableBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureAsyncableBinder.prototype.getIsAsync = function () {
        return this.structure.isAsync || false;
    };
    return StructureAsyncableBinder;
}(base_1.AsyncableBinder));
exports.StructureAsyncableBinder = StructureAsyncableBinder;

//# sourceMappingURL=StructureAsyncableBinder.js.map
