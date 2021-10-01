"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var OptionallyNamedDefinition_1 = require("./OptionallyNamedDefinition");
var OptionalDefinition_1 = require("./OptionalDefinition");
var TypedDefinition_1 = require("./TypedDefinition");
var DefaultExpressionedDefinition_1 = require("./DefaultExpressionedDefinition");
var BaseDefinition_1 = require("./BaseDefinition");
var BaseParameterDefinition = (function (_super) {
    __extends(BaseParameterDefinition, _super);
    function BaseParameterDefinition() {
        _super.apply(this, arguments);
        this.destructuringProperties = [];
    }
    BaseParameterDefinition.prototype.addDestructuringProperty = function (structure) {
        var def = new factories_1.StructureFactory().getObjectProperty(structure);
        this.destructuringProperties.push(def);
        return def;
    };
    BaseParameterDefinition.prototype.getDestructuringProperty = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.destructuringProperties, nameOrSearchFunction);
    };
    return BaseParameterDefinition;
}(BaseDefinition_1.BaseDefinition));
exports.BaseParameterDefinition = BaseParameterDefinition;
utils_1.applyMixins(BaseParameterDefinition, BaseDefinition_1.BaseDefinition, [OptionallyNamedDefinition_1.OptionallyNamedDefinition, OptionalDefinition_1.OptionalDefinition, TypedDefinition_1.TypedDefinition, DefaultExpressionedDefinition_1.DefaultExpressionedDefinition]);

//# sourceMappingURL=BaseParameterDefinition.js.map
