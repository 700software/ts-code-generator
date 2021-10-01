"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var InterfacePropertyDefinition = (function (_super) {
    __extends(InterfacePropertyDefinition, _super);
    function InterfacePropertyDefinition() {
        _super.apply(this, arguments);
    }
    return InterfacePropertyDefinition;
}(base_1.BasePropertyDefinition));
exports.InterfacePropertyDefinition = InterfacePropertyDefinition;
utils_1.applyMixins(InterfacePropertyDefinition, base_1.BasePropertyDefinition, [base_1.DocumentationedDefinition]);

//# sourceMappingURL=InterfacePropertyDefinition.js.map
