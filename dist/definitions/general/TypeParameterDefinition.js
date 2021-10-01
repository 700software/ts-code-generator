"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var TypeParameterDefinition = (function (_super) {
    __extends(TypeParameterDefinition, _super);
    function TypeParameterDefinition() {
        _super.apply(this, arguments);
    }
    TypeParameterDefinition.prototype.setConstraintType = function (textOrDefinition, typeArguments) {
        if (typeArguments === void 0) { typeArguments = []; }
        this.constraintType = utils_1.DefinitionUtils.getTypeDefinitionFromTextOrDefinition(textOrDefinition, typeArguments);
        return this;
    };
    return TypeParameterDefinition;
}(base_1.BaseDefinition));
exports.TypeParameterDefinition = TypeParameterDefinition;
utils_1.applyMixins(TypeParameterDefinition, base_1.BaseDefinition, [base_1.NamedDefinition]);

//# sourceMappingURL=TypeParameterDefinition.js.map
