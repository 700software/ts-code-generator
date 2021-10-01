"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var base_2 = require("./base");
var ClassMethodDefinition = (function (_super) {
    __extends(ClassMethodDefinition, _super);
    function ClassMethodDefinition() {
        _super.apply(this, arguments);
    }
    ClassMethodDefinition.prototype.addParameter = function (structure) {
        var def = new factories_1.StructureFactory().getClassMethodParameter(structure);
        this.parameters.push(def);
        return def;
    };
    return ClassMethodDefinition;
}(base_2.BaseClassMethodDefinition));
exports.ClassMethodDefinition = ClassMethodDefinition;
utils_1.applyMixins(ClassMethodDefinition, base_2.BaseClassMethodDefinition, [base_1.AbstractableDefinition]);

//# sourceMappingURL=ClassMethodDefinition.js.map
