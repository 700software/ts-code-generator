"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var NamedDefinition_1 = require("./NamedDefinition");
var OptionalDefinition_1 = require("./OptionalDefinition");
var ReadonlyableDefinition_1 = require("./ReadonlyableDefinition");
var TypedDefinition_1 = require("./TypedDefinition");
var BaseDefinition_1 = require("./BaseDefinition");
var BasePropertyDefinition = (function (_super) {
    __extends(BasePropertyDefinition, _super);
    function BasePropertyDefinition() {
        _super.apply(this, arguments);
    }
    return BasePropertyDefinition;
}(BaseDefinition_1.BaseDefinition));
exports.BasePropertyDefinition = BasePropertyDefinition;
utils_1.applyMixins(BasePropertyDefinition, BaseDefinition_1.BaseDefinition, [NamedDefinition_1.NamedDefinition, OptionalDefinition_1.OptionalDefinition, TypedDefinition_1.TypedDefinition, ReadonlyableDefinition_1.ReadonlyableDefinition]);

//# sourceMappingURL=BasePropertyDefinition.js.map
