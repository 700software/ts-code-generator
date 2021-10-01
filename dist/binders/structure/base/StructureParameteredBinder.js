"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureParameteredBinder = (function (_super) {
    __extends(StructureParameteredBinder, _super);
    function StructureParameteredBinder(factory, structure, paramDefinition, paramBinder) {
        _super.call(this);
        this.factory = factory;
        this.structure = structure;
        this.paramDefinition = paramDefinition;
        this.paramBinder = paramBinder;
    }
    StructureParameteredBinder.prototype.getParameters = function () {
        var _this = this;
        return (this.structure.parameters || []).map(function (param) {
            var paramDefinition = new _this.paramDefinition();
            var paramBinder = new _this.paramBinder(_this.factory, param);
            paramBinder.bind(paramDefinition);
            return paramDefinition;
        });
    };
    return StructureParameteredBinder;
}(base_1.ParameteredBinder));
exports.StructureParameteredBinder = StructureParameteredBinder;

//# sourceMappingURL=StructureParameteredBinder.js.map
