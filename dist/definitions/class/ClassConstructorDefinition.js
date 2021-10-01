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
var ClassConstructorDefinition = (function (_super) {
    __extends(ClassConstructorDefinition, _super);
    function ClassConstructorDefinition() {
        _super.apply(this, arguments);
    }
    ClassConstructorDefinition.prototype.addParameter = function (structure) {
        var def = new factories_1.StructureFactory().getClassConstructorParameter(structure);
        this.parameters.push(def);
        return def;
    };
    return ClassConstructorDefinition;
}(base_1.BaseDefinition));
exports.ClassConstructorDefinition = ClassConstructorDefinition;
utils_1.applyMixins(ClassConstructorDefinition, base_1.BaseDefinition, [base_1.ParameteredDefinition, base_1.FunctionBodyWriteableDefinition, base_2.ScopedDefinition,
    base_1.OverloadSignaturedDefinition, base_1.DocumentationedDefinition]);

//# sourceMappingURL=ClassConstructorDefinition.js.map
