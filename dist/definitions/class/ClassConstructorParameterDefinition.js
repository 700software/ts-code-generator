"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var ClassConstructorParameterScope_1 = require("./ClassConstructorParameterScope");
var ClassConstructorParameterDefinition = (function (_super) {
    __extends(ClassConstructorParameterDefinition, _super);
    function ClassConstructorParameterDefinition() {
        _super.apply(this, arguments);
    }
    ClassConstructorParameterDefinition.prototype.toClassProperty = function () {
        var factory = new factories_1.StructureFactory();
        var def = factory.getClassProperty({
            name: this.name,
            scope: ClassConstructorParameterScope_1.ClassConstructorParameterScope.toScope(this.scope),
            type: this.type.text,
            isOptional: this.isOptional,
            isReadonly: this.isReadonly,
            defaultExpression: this.defaultExpression != null ? this.defaultExpression.text : undefined,
            decorators: this.decorators.map(function (decorator) { return ({
                name: decorator.name,
                arguments: decorator.arguments.map(function (arg) { return arg.text; })
            }); })
        });
        return def;
    };
    return ClassConstructorParameterDefinition;
}(base_1.BaseParameterDefinition));
exports.ClassConstructorParameterDefinition = ClassConstructorParameterDefinition;
utils_1.applyMixins(ClassConstructorParameterDefinition, base_1.BaseParameterDefinition, [base_1.DecoratableDefinition, base_1.ReadonlyableDefinition]);

//# sourceMappingURL=ClassConstructorParameterDefinition.js.map
