"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("./../../../utils");
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureInterfaceBinder = (function (_super) {
    __extends(StructureInterfaceBinder, _super);
    function StructureInterfaceBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureNamedBinder(structure), new base_2.StructureExportableBinder(structure), new base_2.StructureAmbientableBinder(utils_1.objectAssign(structure, { isAmbient: true })), new base_2.StructureTypeParameteredBinder(factory, structure), new base_2.StructureDocumentationedBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureInterfaceBinder.prototype.getExtendsTypes = function () {
        var _this = this;
        return (this.structure.extendsTypes || []).map(function (s) { return _this.factory.getTypeFromText(s); });
    };
    StructureInterfaceBinder.prototype.getMembers = function () {
        var _this = this;
        var container = new base_1.InterfaceMemberContainer();
        (_a = container.methods).push.apply(_a, (this.structure.methods || []).map(function (m) { return _this.factory.getInterfaceMethod(m); }));
        (_b = container.properties).push.apply(_b, (this.structure.properties || []).map(function (p) { return _this.factory.getInterfaceProperty(p); }));
        (_c = container.newSignatures).push.apply(_c, (this.structure.newSignatures || []).map(function (s) { return _this.factory.getCallSignature(s); }));
        (_d = container.indexSignatures).push.apply(_d, (this.structure.indexSignatures || []).map(function (s) { return _this.factory.getIndexSignature(s); }));
        (_e = container.callSignatures).push.apply(_e, (this.structure.callSignatures || []).map(function (s) { return _this.factory.getCallSignature(s); }));
        return container;
        var _a, _b, _c, _d, _e;
    };
    return StructureInterfaceBinder;
}(base_1.InterfaceBinder));
exports.StructureInterfaceBinder = StructureInterfaceBinder;

//# sourceMappingURL=StructureInterfaceBinder.js.map
