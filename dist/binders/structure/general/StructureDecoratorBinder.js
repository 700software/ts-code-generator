"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureDecoratorBinder = (function (_super) {
    __extends(StructureDecoratorBinder, _super);
    function StructureDecoratorBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureNamedBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureDecoratorBinder.prototype.getArguments = function () {
        var _this = this;
        return (this.structure.arguments || []).map(function (a) { return _this.factory.getExpressionFromText(a); }).filter(function (a) { return a != null; });
    };
    StructureDecoratorBinder.prototype.getIsDecoratorFactory = function () {
        return this.structure.isDecoratorFactory || false;
    };
    return StructureDecoratorBinder;
}(base_1.DecoratorBinder));
exports.StructureDecoratorBinder = StructureDecoratorBinder;

//# sourceMappingURL=StructureDecoratorBinder.js.map
