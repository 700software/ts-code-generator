"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../../definitions");
var base_1 = require("./../../../base");
var StructureScopedBinder = (function (_super) {
    __extends(StructureScopedBinder, _super);
    function StructureScopedBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureScopedBinder.prototype.getScope = function () {
        return this.structure.scope || definitions_1.Scope.Public;
    };
    return StructureScopedBinder;
}(base_1.ScopedBinder));
exports.StructureScopedBinder = StructureScopedBinder;

//# sourceMappingURL=StructureScopedBinder.js.map
