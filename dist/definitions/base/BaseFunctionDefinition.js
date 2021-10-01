"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var NamedDefinition_1 = require("./NamedDefinition");
var TypeParameteredDefinition_1 = require("./TypeParameteredDefinition");
var BaseDefinition_1 = require("./BaseDefinition");
var ParameteredDefinition_1 = require("./ParameteredDefinition");
var ReturnTypedDefinition_1 = require("./ReturnTypedDefinition");
var ThisTypedDefinition_1 = require("./ThisTypedDefinition");
var OverloadSignaturedDefinition_1 = require("./OverloadSignaturedDefinition");
var DocumentationedDefinition_1 = require("./DocumentationedDefinition");
var BaseFunctionDefinition = (function (_super) {
    __extends(BaseFunctionDefinition, _super);
    function BaseFunctionDefinition() {
        _super.apply(this, arguments);
    }
    BaseFunctionDefinition.prototype.setUserDefinedTypeGuard = function (structure) {
        this.userDefinedTypeGuard = new factories_1.StructureFactory().getUserDefinedTypeGuard(structure);
        return this;
    };
    return BaseFunctionDefinition;
}(BaseDefinition_1.BaseDefinition));
exports.BaseFunctionDefinition = BaseFunctionDefinition;
utils_1.applyMixins(BaseFunctionDefinition, BaseDefinition_1.BaseDefinition, [NamedDefinition_1.NamedDefinition, TypeParameteredDefinition_1.TypeParameteredDefinition, ParameteredDefinition_1.ParameteredDefinition, ReturnTypedDefinition_1.ReturnTypedDefinition, ThisTypedDefinition_1.ThisTypedDefinition,
    OverloadSignaturedDefinition_1.OverloadSignaturedDefinition, DocumentationedDefinition_1.DocumentationedDefinition]);

//# sourceMappingURL=BaseFunctionDefinition.js.map
