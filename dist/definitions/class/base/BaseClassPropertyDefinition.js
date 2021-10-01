"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var base_1 = require("./../../base");
var ScopedDefinition_1 = require("./ScopedDefinition");
var BaseClassPropertyDefinition = (function (_super) {
    __extends(BaseClassPropertyDefinition, _super);
    function BaseClassPropertyDefinition() {
        _super.apply(this, arguments);
    }
    return BaseClassPropertyDefinition;
}(base_1.BaseObjectPropertyDefinition));
exports.BaseClassPropertyDefinition = BaseClassPropertyDefinition;
utils_1.applyMixins(BaseClassPropertyDefinition, base_1.BaseObjectPropertyDefinition, [base_1.DecoratableDefinition, ScopedDefinition_1.ScopedDefinition, base_1.DocumentationedDefinition]);

//# sourceMappingURL=BaseClassPropertyDefinition.js.map
