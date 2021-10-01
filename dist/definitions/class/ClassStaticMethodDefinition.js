"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var base_1 = require("./base");
var ClassStaticMethodDefinition = (function (_super) {
    __extends(ClassStaticMethodDefinition, _super);
    function ClassStaticMethodDefinition() {
        _super.apply(this, arguments);
    }
    ClassStaticMethodDefinition.prototype.addParameter = function (structure) {
        var def = new factories_1.StructureFactory().getClassStaticMethodParameter(structure);
        this.parameters.push(def);
        return def;
    };
    return ClassStaticMethodDefinition;
}(base_1.BaseClassMethodDefinition));
exports.ClassStaticMethodDefinition = ClassStaticMethodDefinition;

//# sourceMappingURL=ClassStaticMethodDefinition.js.map
