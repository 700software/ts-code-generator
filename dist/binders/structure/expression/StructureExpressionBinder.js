"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureExpressionBinder = (function (_super) {
    __extends(StructureExpressionBinder, _super);
    function StructureExpressionBinder(text) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder({}));
        this.text = text;
    }
    StructureExpressionBinder.prototype.getText = function () {
        return this.text;
    };
    return StructureExpressionBinder;
}(base_1.ExpressionBinder));
exports.StructureExpressionBinder = StructureExpressionBinder;

//# sourceMappingURL=StructureExpressionBinder.js.map
