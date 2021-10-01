"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var WriteFlags_1 = require("./../../WriteFlags");
var base_1 = require("./../base");
var ClassConstructorParameterScope_1 = require("./ClassConstructorParameterScope");
var ClassDefinition = (function (_super) {
    __extends(ClassDefinition, _super);
    function ClassDefinition() {
        _super.apply(this, arguments);
        this.methods = [];
        this.properties = [];
        this.staticMethods = [];
        this.staticProperties = [];
        this.extendsTypes = [];
        this.implementsTypes = [];
    }
    ClassDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var classWriter = factories_1.MainFactory.createWriteFactory(writer).getClassWriter();
        classWriter.write(this, WriteFlags_1.WriteFlags.Default);
        return writer.toString();
    };
    ClassDefinition.prototype.addMethod = function (structure) {
        var def = new factories_1.StructureFactory().getClassMethod(structure);
        this.methods.push(def);
        return def;
    };
    ClassDefinition.prototype.addProperty = function (structure) {
        var def = new factories_1.StructureFactory().getClassProperty(structure);
        this.properties.push(def);
        return def;
    };
    ClassDefinition.prototype.addStaticMethod = function (structure) {
        var def = new factories_1.StructureFactory().getClassStaticMethod(structure);
        this.staticMethods.push(def);
        return def;
    };
    ClassDefinition.prototype.addStaticProperty = function (structure) {
        var def = new factories_1.StructureFactory().getClassStaticProperty(structure);
        this.staticProperties.push(def);
        return def;
    };
    ClassDefinition.prototype.addExtends = function (textOrDefinition, typeArguments) {
        if (typeArguments === void 0) { typeArguments = []; }
        var def = utils_1.DefinitionUtils.getTypeDefinitionFromTextOrDefinition(textOrDefinition, typeArguments);
        this.extendsTypes.push(def);
        return def;
    };
    ClassDefinition.prototype.addImplements = function (textOrDefinition, typeArguments) {
        if (typeArguments === void 0) { typeArguments = []; }
        var def = utils_1.DefinitionUtils.getTypeDefinitionFromTextOrDefinition(textOrDefinition, typeArguments);
        this.implementsTypes.push(def);
        return def;
    };
    ClassDefinition.prototype.getPropertiesAndConstructorParameters = function () {
        return (this.constructorDef == null ? [] : this.constructorDef.parameters.filter(function (p) { return p.scope !== ClassConstructorParameterScope_1.ClassConstructorParameterScope.None; })).concat(this.properties);
    };
    ClassDefinition.prototype.getMethod = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.methods, nameOrSearchFunction);
    };
    ClassDefinition.prototype.getStaticMethod = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.staticMethods, nameOrSearchFunction);
    };
    ClassDefinition.prototype.getProperty = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.properties, nameOrSearchFunction);
    };
    ClassDefinition.prototype.getStaticProperty = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.staticProperties, nameOrSearchFunction);
    };
    ClassDefinition.prototype.setConstructor = function (structure) {
        this.constructorDef = new factories_1.StructureFactory().getClassConstructor(structure);
        return this;
    };
    return ClassDefinition;
}(base_1.BaseDefinition));
exports.ClassDefinition = ClassDefinition;
utils_1.applyMixins(ClassDefinition, base_1.BaseDefinition, [base_1.NamedDefinition, base_1.DecoratableDefinition, base_1.ExportableDefinition, base_1.TypeParameteredDefinition, base_1.AmbientableDefinition,
    base_1.AbstractableDefinition, base_1.OrderableDefinition, base_1.DocumentationedDefinition]);

//# sourceMappingURL=ClassDefinition.js.map
