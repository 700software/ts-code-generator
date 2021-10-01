"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var DefaultExpressionedDefinition_1 = require("./DefaultExpressionedDefinition");
var BasePropertyDefinition_1 = require("./BasePropertyDefinition");
var BaseObjectPropertyDefinition = (function (_super) {
    __extends(BaseObjectPropertyDefinition, _super);
    function BaseObjectPropertyDefinition() {
        _super.apply(this, arguments);
    }
    return BaseObjectPropertyDefinition;
}(BasePropertyDefinition_1.BasePropertyDefinition));
exports.BaseObjectPropertyDefinition = BaseObjectPropertyDefinition;
utils_1.applyMixins(BaseObjectPropertyDefinition, BasePropertyDefinition_1.BasePropertyDefinition, [DefaultExpressionedDefinition_1.DefaultExpressionedDefinition]);

//# sourceMappingURL=BaseObjectPropertyDefinition.js.map
