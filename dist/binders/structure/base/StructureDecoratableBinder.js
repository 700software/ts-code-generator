"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureDecoratableBinder = (function (_super) {
    __extends(StructureDecoratableBinder, _super);
    function StructureDecoratableBinder(factory, structure) {
        _super.call(this);
        this.factory = factory;
        this.structure = structure;
    }
    StructureDecoratableBinder.prototype.getDecorators = function () {
        var _this = this;
        return (this.structure.decorators || []).map(function (decoratorStructure) { return _this.factory.getDecorator(decoratorStructure); });
    };
    return StructureDecoratableBinder;
}(base_1.DecoratableBinder));
exports.StructureDecoratableBinder = StructureDecoratableBinder;

//# sourceMappingURL=StructureDecoratableBinder.js.map
