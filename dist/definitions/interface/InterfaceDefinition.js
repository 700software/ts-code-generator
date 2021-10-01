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
var InterfaceDefinition = (function (_super) {
    __extends(InterfaceDefinition, _super);
    function InterfaceDefinition() {
        _super.apply(this, arguments);
        this.methods = [];
        this.callSignatures = [];
        this.indexSignatures = [];
        this.newSignatures = [];
        this.properties = [];
        this.extendsTypes = [];
    }
    InterfaceDefinition.prototype.addCallSignature = function (structure) {
        var def = new factories_1.StructureFactory().getCallSignature(structure);
        this.callSignatures.push(def);
        return def;
    };
    InterfaceDefinition.prototype.addExtends = function (textOrDefinition, typeArguments) {
        if (typeArguments === void 0) { typeArguments = []; }
        var def = utils_1.DefinitionUtils.getTypeDefinitionFromTextOrDefinition(textOrDefinition, typeArguments);
        this.extendsTypes.push(def);
        return def;
    };
    InterfaceDefinition.prototype.addIndexSignature = function (structure) {
        var def = new factories_1.StructureFactory().getIndexSignature(structure);
        this.indexSignatures.push(def);
        return def;
    };
    InterfaceDefinition.prototype.addMethod = function (structure) {
        var def = new factories_1.StructureFactory().getInterfaceMethod(structure);
        this.methods.push(def);
        return def;
    };
    InterfaceDefinition.prototype.addNewSignature = function (structure) {
        var def = new factories_1.StructureFactory().getCallSignature(structure);
        this.newSignatures.push(def);
        return def;
    };
    InterfaceDefinition.prototype.addProperty = function (structure) {
        var def = new factories_1.StructureFactory().getInterfaceProperty(structure);
        this.properties.push(def);
        return def;
    };
    InterfaceDefinition.prototype.getCallSignature = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.callSignatures, searchFunction);
    };
    InterfaceDefinition.prototype.getIndexSignature = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.indexSignatures, searchFunction);
    };
    InterfaceDefinition.prototype.getMethod = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.methods, nameOrSearchFunction);
    };
    InterfaceDefinition.prototype.getNewSignature = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.newSignatures, searchFunction);
    };
    InterfaceDefinition.prototype.getProperty = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.properties, nameOrSearchFunction);
    };
    InterfaceDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var interfaceWriter = factories_1.MainFactory.createWriteFactory(writer).getInterfaceWriter();
        interfaceWriter.write(this, WriteFlags_1.WriteFlags.Default);
        return writer.toString();
    };
    return InterfaceDefinition;
}(base_1.BaseDefinition));
exports.InterfaceDefinition = InterfaceDefinition;
utils_1.applyMixins(InterfaceDefinition, base_1.BaseDefinition, [base_1.NamedDefinition, base_1.ExportableDefinition, base_1.TypeParameteredDefinition, base_1.AmbientableDefinition, base_1.OrderableDefinition,
    base_1.DocumentationedDefinition]);

//# sourceMappingURL=InterfaceDefinition.js.map
