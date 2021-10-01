"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var base_1 = require("./base");
var TypeDefinition = (function (_super) {
    __extends(TypeDefinition, _super);
    function TypeDefinition() {
        _super.apply(this, arguments);
        this.callSignatures = [];
    }
    TypeDefinition.prototype.getCallSignature = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.callSignatures, searchFunction);
    };
    return TypeDefinition;
}(base_1.BaseTypeDefinition));
exports.TypeDefinition = TypeDefinition;

//# sourceMappingURL=TypeDefinition.js.map
