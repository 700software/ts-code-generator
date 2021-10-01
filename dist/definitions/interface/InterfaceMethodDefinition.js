"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var base_1 = require("./../base");
var InterfaceMethodDefinition = (function (_super) {
    __extends(InterfaceMethodDefinition, _super);
    function InterfaceMethodDefinition() {
        _super.apply(this, arguments);
    }
    InterfaceMethodDefinition.prototype.addParameter = function (structure) {
        var def = new factories_1.StructureFactory().getInterfaceMethodParameter(structure);
        this.parameters.push(def);
        return def;
    };
    return InterfaceMethodDefinition;
}(base_1.BaseFunctionDefinition));
exports.InterfaceMethodDefinition = InterfaceMethodDefinition;

//# sourceMappingURL=InterfaceMethodDefinition.js.map
