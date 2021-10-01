"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureNamedBinder = (function (_super) {
    __extends(StructureNamedBinder, _super);
    function StructureNamedBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureNamedBinder.prototype.getName = function () {
        return this.structure.name || null;
    };
    return StructureNamedBinder;
}(base_1.NamedBinder));
exports.StructureNamedBinder = StructureNamedBinder;

//# sourceMappingURL=StructureNamedBinder.js.map
