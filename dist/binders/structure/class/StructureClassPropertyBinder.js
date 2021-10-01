"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var base_3 = require("./base");
var StructureClassPropertyBinder = (function (_super) {
    __extends(StructureClassPropertyBinder, _super);
    function StructureClassPropertyBinder(factory, structure) {
        _super.call(this, new base_3.StructureBaseClassPropertyBinder(factory, structure), new base_2.StructureAbstractableBinder(structure));
        this.structure = structure;
    }
    StructureClassPropertyBinder.prototype.getKind = function () {
        return this.structure.kind || definitions_1.ClassPropertyKind.Normal;
    };
    StructureClassPropertyBinder.prototype.getOnWriteGetBody = function () {
        return this.structure.onWriteGetBody || null;
    };
    StructureClassPropertyBinder.prototype.getOnWriteSetBody = function () {
        return this.structure.onWriteSetBody || null;
    };
    return StructureClassPropertyBinder;
}(base_1.ClassPropertyBinder));
exports.StructureClassPropertyBinder = StructureClassPropertyBinder;

//# sourceMappingURL=StructureClassPropertyBinder.js.map
