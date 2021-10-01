"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var factories_1 = require("./../../factories");
var IndexSignatureDefinition = (function (_super) {
    __extends(IndexSignatureDefinition, _super);
    function IndexSignatureDefinition() {
        _super.apply(this, arguments);
    }
    IndexSignatureDefinition.prototype.setKeyType = function (text) {
        this.keyType = new factories_1.StructureFactory().getTypeFromText(text);
        return this;
    };
    return IndexSignatureDefinition;
}(base_1.BaseDefinition));
exports.IndexSignatureDefinition = IndexSignatureDefinition;
utils_1.applyMixins(IndexSignatureDefinition, base_1.BaseDefinition, [base_1.ReturnTypedDefinition, base_1.ReadonlyableDefinition]);

//# sourceMappingURL=IndexSignatureDefinition.js.map
