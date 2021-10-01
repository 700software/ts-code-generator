"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureEnumBinder = (function (_super) {
    __extends(StructureEnumBinder, _super);
    function StructureEnumBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureNamedBinder(structure), new base_2.StructureExportableBinder(structure), new base_2.StructureAmbientableBinder(structure), new base_2.StructureDocumentationedBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureEnumBinder.prototype.getIsConst = function () {
        return this.structure.isConst || false;
    };
    StructureEnumBinder.prototype.getMembers = function () {
        var _this = this;
        return (this.structure.members || []).map(function (member) { return _this.factory.getEnumMember(member); });
    };
    return StructureEnumBinder;
}(base_1.EnumBinder));
exports.StructureEnumBinder = StructureEnumBinder;

//# sourceMappingURL=StructureEnumBinder.js.map
