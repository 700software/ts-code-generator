"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var base_1 = require("./../../base");
var ScopedDefinition_1 = require("./ScopedDefinition");
var BaseClassMethodParameterDefinition = (function (_super) {
    __extends(BaseClassMethodParameterDefinition, _super);
    function BaseClassMethodParameterDefinition() {
        _super.apply(this, arguments);
    }
    return BaseClassMethodParameterDefinition;
}(base_1.BaseParameterDefinition));
exports.BaseClassMethodParameterDefinition = BaseClassMethodParameterDefinition;
utils_1.applyMixins(BaseClassMethodParameterDefinition, base_1.BaseParameterDefinition, [base_1.DecoratableDefinition, ScopedDefinition_1.ScopedDefinition]);

//# sourceMappingURL=BaseClassMethodParameterDefinition.js.map
