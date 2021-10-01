"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../../base");
var StructureExpressionBinder_1 = require("./../StructureExpressionBinder");
var StructureBaseTypeBinder = (function (_super) {
    __extends(StructureBaseTypeBinder, _super);
    function StructureBaseTypeBinder(factory, text) {
        _super.call(this, new StructureExpressionBinder_1.StructureExpressionBinder(text));
        this.factory = factory;
        this.text = text;
    }
    StructureBaseTypeBinder.prototype.isArrayType = function () {
        return /\[\]$/.test(this.text) || /^Array\<.*\>$/.test(this.text);
    };
    StructureBaseTypeBinder.prototype.getArrayElementType = function () {
        return this.factory.getTypeFromText(this.text.replace(/\[\]$/, "").replace(/^Array\<(.*)\>$/, "$1"));
    };
    StructureBaseTypeBinder.prototype.isIntersectionType = function () {
        return false;
    };
    StructureBaseTypeBinder.prototype.isUnionType = function () {
        return false;
    };
    StructureBaseTypeBinder.prototype.getUnionOrIntersectionTypes = function () {
        return [];
    };
    StructureBaseTypeBinder.prototype.getProperties = function () {
        return [];
    };
    StructureBaseTypeBinder.prototype.getTypeArguments = function () {
        return [];
    };
    return StructureBaseTypeBinder;
}(base_1.BaseTypeBinder));
exports.StructureBaseTypeBinder = StructureBaseTypeBinder;

//# sourceMappingURL=StructureBaseTypeBinder.js.map
