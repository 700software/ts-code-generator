"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var base_1 = require("./../../base");
var ScopedDefinition_1 = require("./ScopedDefinition");
var BaseClassMethodDefinition = (function (_super) {
    __extends(BaseClassMethodDefinition, _super);
    function BaseClassMethodDefinition() {
        _super.apply(this, arguments);
    }
    return BaseClassMethodDefinition;
}(base_1.BaseFunctionDefinition));
exports.BaseClassMethodDefinition = BaseClassMethodDefinition;
utils_1.applyMixins(BaseClassMethodDefinition, base_1.BaseFunctionDefinition, [base_1.AsyncableDefinition, base_1.DecoratableDefinition, ScopedDefinition_1.ScopedDefinition, base_1.FunctionBodyWriteableDefinition]);

//# sourceMappingURL=BaseClassMethodDefinition.js.map
