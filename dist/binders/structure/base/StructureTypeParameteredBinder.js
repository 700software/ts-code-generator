"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureTypeParameteredBinder = (function (_super) {
    __extends(StructureTypeParameteredBinder, _super);
    function StructureTypeParameteredBinder(factory, structure) {
        _super.call(this);
        this.factory = factory;
        this.structure = structure;
    }
    StructureTypeParameteredBinder.prototype.getTypeParameters = function () {
        var _this = this;
        return (this.structure.typeParameters || []).map(function (typeParam) { return _this.factory.getTypeParameter(typeParam); });
    };
    return StructureTypeParameteredBinder;
}(base_1.TypeParameteredBinder));
exports.StructureTypeParameteredBinder = StructureTypeParameteredBinder;

//# sourceMappingURL=StructureTypeParameteredBinder.js.map
