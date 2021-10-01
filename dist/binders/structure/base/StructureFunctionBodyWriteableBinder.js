"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureFunctionBodyWriteableBinder = (function (_super) {
    __extends(StructureFunctionBodyWriteableBinder, _super);
    function StructureFunctionBodyWriteableBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureFunctionBodyWriteableBinder.prototype.getOnWriteFunctionBody = function () {
        return this.structure.onWriteFunctionBody || null;
    };
    return StructureFunctionBodyWriteableBinder;
}(base_1.FunctionBodyWriteableBinder));
exports.StructureFunctionBodyWriteableBinder = StructureFunctionBodyWriteableBinder;

//# sourceMappingURL=StructureFunctionBodyWriteableBinder.js.map
