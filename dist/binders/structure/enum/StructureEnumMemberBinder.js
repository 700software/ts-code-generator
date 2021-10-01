"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureEnumMemberBinder = (function (_super) {
    __extends(StructureEnumMemberBinder, _super);
    function StructureEnumMemberBinder(structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureNamedBinder(structure), new base_2.StructureDocumentationedBinder(structure));
        this.structure = structure;
    }
    StructureEnumMemberBinder.prototype.getValue = function () {
        return this.structure.value;
    };
    return StructureEnumMemberBinder;
}(base_1.EnumMemberBinder));
exports.StructureEnumMemberBinder = StructureEnumMemberBinder;

//# sourceMappingURL=StructureEnumMemberBinder.js.map
