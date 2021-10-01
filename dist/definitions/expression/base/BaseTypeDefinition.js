"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var BaseExpressionDefinition_1 = require("./BaseExpressionDefinition");
var BaseTypeDefinition = (function (_super) {
    __extends(BaseTypeDefinition, _super);
    function BaseTypeDefinition() {
        _super.apply(this, arguments);
        this.arrayElementType = null;
        this.intersectionTypes = [];
        this.unionTypes = [];
        this.definitions = [];
        this.properties = [];
        this.typeArguments = [];
    }
    BaseTypeDefinition.prototype.getAllDefinitions = function () {
        var arraysOfDefinitions = this.unionTypes.map(function (t) { return t.getAllDefinitions(); }).concat(this.intersectionTypes.map(function (t) { return t.getAllDefinitions(); }));
        var definitions = arraysOfDefinitions.reduce(function (a, b) { return a.concat(b); }, []).concat(this.definitions);
        if (this.arrayElementType != null) {
            definitions.push.apply(definitions, this.arrayElementType.definitions);
        }
        return utils_1.ArrayUtils.getUniqueItems(definitions);
    };
    BaseTypeDefinition.prototype.getIntersectionType = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.intersectionTypes, searchFunction);
    };
    BaseTypeDefinition.prototype.getUnionType = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.unionTypes, searchFunction);
    };
    BaseTypeDefinition.prototype.getDefinition = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.definitions, searchFunction);
    };
    BaseTypeDefinition.prototype.getProperty = function (searchFunctionOrName) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.properties, searchFunctionOrName);
    };
    BaseTypeDefinition.prototype.getTypeArgument = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.typeArguments, searchFunction);
    };
    BaseTypeDefinition.prototype.isArrayType = function () {
        return this.arrayElementType != null || /\[\]$/.test(this.text) || /^Array\<.*\>$/.test(this.text);
    };
    return BaseTypeDefinition;
}(BaseExpressionDefinition_1.BaseExpressionDefinition));
exports.BaseTypeDefinition = BaseTypeDefinition;

//# sourceMappingURL=BaseTypeDefinition.js.map
