"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../base");
var utils_1 = require("./../../utils");
var base_2 = require("./base");
var TypeNodeDefinition = (function (_super) {
    __extends(TypeNodeDefinition, _super);
    function TypeNodeDefinition() {
        _super.apply(this, arguments);
        this.addTypeParameter = function (structure) {
            throw new Error("addTypeParameter is not supported on " + "TypeNodeDefinition");
        };
        this.addParameter = function (structure) {
            throw new Error("addParameter is not supported on " + "TypeNodeDefinition");
        };
    }
    return TypeNodeDefinition;
}(base_2.BaseTypeDefinition));
exports.TypeNodeDefinition = TypeNodeDefinition;
utils_1.applyMixins(TypeNodeDefinition, base_2.BaseTypeDefinition, [base_1.TypeParameteredDefinition, base_1.ParameteredDefinition]);

//# sourceMappingURL=TypeNodeDefinition.js.map
