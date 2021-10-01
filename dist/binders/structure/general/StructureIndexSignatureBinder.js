"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureIndexSignatureBinder = (function (_super) {
    __extends(StructureIndexSignatureBinder, _super);
    function StructureIndexSignatureBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureReturnTypedBinder(factory, structure), new base_2.StructureReadonlyableBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureIndexSignatureBinder.prototype.getKeyName = function () {
        return this.structure.keyName || "";
    };
    StructureIndexSignatureBinder.prototype.getKeyType = function () {
        // default to string for the key type
        return this.factory.getTypeFromText(this.structure.keyType || "string");
    };
    return StructureIndexSignatureBinder;
}(base_1.IndexSignatureBinder));
exports.StructureIndexSignatureBinder = StructureIndexSignatureBinder;

//# sourceMappingURL=StructureIndexSignatureBinder.js.map
