"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var EnumMemberDefinition = (function (_super) {
    __extends(EnumMemberDefinition, _super);
    function EnumMemberDefinition() {
        _super.apply(this, arguments);
    }
    return EnumMemberDefinition;
}(base_1.BaseDefinition));
exports.EnumMemberDefinition = EnumMemberDefinition;
utils_1.applyMixins(EnumMemberDefinition, base_1.BaseDefinition, [base_1.NamedDefinition, base_1.DocumentationedDefinition]);

//# sourceMappingURL=EnumMemberDefinition.js.map
