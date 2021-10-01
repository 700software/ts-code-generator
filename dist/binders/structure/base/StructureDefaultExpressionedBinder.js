"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var definitions_1 = require("./../../../definitions");
var expression_1 = require("./../expression");
var base_1 = require("./../../base");
var StructureDefaultExpressionedBinder = (function (_super) {
    __extends(StructureDefaultExpressionedBinder, _super);
    function StructureDefaultExpressionedBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureDefaultExpressionedBinder.prototype.getDefaultExpression = function () {
        return this.structure.defaultExpression == null ? null : this.getExpression(this.structure.defaultExpression);
    };
    StructureDefaultExpressionedBinder.prototype.getExpression = function (expression) {
        var def = new definitions_1.ExpressionDefinition();
        var binder = new expression_1.StructureExpressionBinder(expression);
        binder.bind(def);
        return def;
    };
    return StructureDefaultExpressionedBinder;
}(base_1.DefaultExpressionedBinder));
exports.StructureDefaultExpressionedBinder = StructureDefaultExpressionedBinder;

//# sourceMappingURL=StructureDefaultExpressionedBinder.js.map
