"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var base_2 = require("./base");
var ClassPropertyDefinition = (function (_super) {
    __extends(ClassPropertyDefinition, _super);
    function ClassPropertyDefinition() {
        _super.apply(this, arguments);
    }
    return ClassPropertyDefinition;
}(base_2.BaseClassPropertyDefinition));
exports.ClassPropertyDefinition = ClassPropertyDefinition;
utils_1.applyMixins(ClassPropertyDefinition, base_2.BaseClassPropertyDefinition, [base_1.AbstractableDefinition]);

//# sourceMappingURL=ClassPropertyDefinition.js.map
