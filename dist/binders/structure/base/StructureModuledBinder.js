"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureModuledBinder = (function (_super) {
    __extends(StructureModuledBinder, _super);
    function StructureModuledBinder(factory, structure) {
        _super.call(this);
        this.factory = factory;
        this.structure = structure;
    }
    StructureModuledBinder.prototype.getMembers = function () {
        var _this = this;
        var classes = (this.structure.classes || []).map(function (c) { return _this.factory.getClass(c); });
        var enums = (this.structure.enums || []).map(function (e) { return _this.factory.getEnum(e); });
        var functions = (this.structure.functions || []).map(function (f) { return _this.factory.getFunction(f); });
        var interfaces = (this.structure.interfaces || []).map(function (i) { return _this.factory.getInterface(i); });
        var namespaces = (this.structure.namespaces || []).map(function (n) { return _this.factory.getNamespace(n); });
        var typeAliases = (this.structure.typeAliases || []).map(function (t) { return _this.factory.getTypeAlias(t); });
        var variables = (this.structure.variables || []).map(function (v) { return _this.factory.getVariable(v); });
        // should order these in the order that would work well with writing
        return typeAliases.concat(interfaces, enums, classes, namespaces, functions, variables);
    };
    return StructureModuledBinder;
}(base_1.ModuledBinder));
exports.StructureModuledBinder = StructureModuledBinder;

//# sourceMappingURL=StructureModuledBinder.js.map
