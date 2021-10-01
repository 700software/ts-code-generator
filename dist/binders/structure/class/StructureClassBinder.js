"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var base_2 = require("./../base");
var StructureClassBinder = (function (_super) {
    __extends(StructureClassBinder, _super);
    function StructureClassBinder(factory, structure) {
        _super.call(this, new base_2.StructureBaseDefinitionBinder(structure), new base_2.StructureNamedBinder(structure), new base_2.StructureExportableBinder(structure), new base_2.StructureAmbientableBinder(structure), new base_2.StructureTypeParameteredBinder(factory, structure), new base_2.StructureAbstractableBinder(structure), new base_2.StructureDecoratableBinder(factory, structure), new base_2.StructureDocumentationedBinder(structure));
        this.factory = factory;
        this.structure = structure;
    }
    StructureClassBinder.prototype.getExtendsTypes = function () {
        var _this = this;
        return (this.structure.extendsTypes || []).map(function (t) { return _this.factory.getTypeFromText(t); });
    };
    StructureClassBinder.prototype.getImplementsTypes = function () {
        var _this = this;
        return (this.structure.implementsTypes || []).map(function (t) { return _this.factory.getTypeFromText(t); });
    };
    StructureClassBinder.prototype.getMembers = function () {
        var _this = this;
        var container = new base_1.ClassMemberContainer();
        (_a = container.methods).push.apply(_a, (this.structure.methods || []).map(function (m) { return _this.factory.getClassMethod(m); }));
        (_b = container.staticMethods).push.apply(_b, (this.structure.staticMethods || []).map(function (m) { return _this.factory.getClassStaticMethod(m); }));
        (_c = container.properties).push.apply(_c, (this.structure.properties || []).map(function (p) { return _this.factory.getClassProperty(p); }));
        (_d = container.staticProperties).push.apply(_d, (this.structure.staticProperties || []).map(function (p) { return _this.factory.getClassStaticProperty(p); }));
        if (this.structure.constructorDef != null) {
            container.constructorDef = this.factory.getClassConstructor(this.structure.constructorDef);
        }
        return container;
        var _a, _b, _c, _d;
    };
    return StructureClassBinder;
}(base_1.ClassBinder));
exports.StructureClassBinder = StructureClassBinder;

//# sourceMappingURL=StructureClassBinder.js.map
