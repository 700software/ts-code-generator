"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureOverloadSignaturedBinder = (function (_super) {
    __extends(StructureOverloadSignaturedBinder, _super);
    function StructureOverloadSignaturedBinder(factory, structure) {
        _super.call(this);
        this.factory = factory;
        this.structure = structure;
    }
    StructureOverloadSignaturedBinder.prototype.getOverloadSignatures = function () {
        var _this = this;
        return (this.structure.overloadSignatures || []).map(function (s) { return _this.factory.getCallSignature(s); });
    };
    return StructureOverloadSignaturedBinder;
}(base_1.OverloadSignaturedBinder));
exports.StructureOverloadSignaturedBinder = StructureOverloadSignaturedBinder;

//# sourceMappingURL=StructureOverloadSignaturedBinder.js.map
