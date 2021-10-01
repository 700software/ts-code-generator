"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var CallSignatureDefinition = (function (_super) {
    __extends(CallSignatureDefinition, _super);
    function CallSignatureDefinition() {
        _super.apply(this, arguments);
    }
    CallSignatureDefinition.prototype.addParameter = function (structure) {
        var def = new factories_1.StructureFactory().getCallSignatureParameter(structure);
        this.parameters.push(def);
        return def;
    };
    CallSignatureDefinition.prototype.getMinArgumentCount = function () {
        return this.parameters.filter(function (p) { return !p.isOptional && !p.isRestParameter; }).length;
    };
    return CallSignatureDefinition;
}(base_1.BaseDefinition));
exports.CallSignatureDefinition = CallSignatureDefinition;
utils_1.applyMixins(CallSignatureDefinition, base_1.BaseDefinition, [base_1.TypeParameteredDefinition, base_1.ParameteredDefinition, base_1.ReturnTypedDefinition, base_1.DocumentationedDefinition]);

//# sourceMappingURL=CallSignatureDefinition.js.map
