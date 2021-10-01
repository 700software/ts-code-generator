"use strict";
var factories_1 = require("./factories");
function createCallSignature(structure) {
    if (structure === void 0) { structure = {}; }
    return new factories_1.StructureFactory().getCallSignature(structure);
}
exports.createCallSignature = createCallSignature;
function createCallSignatureParameter(structure) {
    return new factories_1.StructureFactory().getCallSignatureParameter(structure);
}
exports.createCallSignatureParameter = createCallSignatureParameter;
function createClass(structure) {
    return new factories_1.StructureFactory().getClass(structure);
}
exports.createClass = createClass;
function createClassConstructor(structure) {
    if (structure === void 0) { structure = {}; }
    return new factories_1.StructureFactory().getClassConstructor(structure);
}
exports.createClassConstructor = createClassConstructor;
function createClassConstructorParameter(structure) {
    return new factories_1.StructureFactory().getClassConstructorParameter(structure);
}
exports.createClassConstructorParameter = createClassConstructorParameter;
function createClassMethod(structure) {
    return new factories_1.StructureFactory().getClassMethod(structure);
}
exports.createClassMethod = createClassMethod;
function createClassMethodParameter(structure) {
    return new factories_1.StructureFactory().getClassMethodParameter(structure);
}
exports.createClassMethodParameter = createClassMethodParameter;
function createClassProperty(structure) {
    return new factories_1.StructureFactory().getClassProperty(structure);
}
exports.createClassProperty = createClassProperty;
function createClassStaticMethod(structure) {
    return new factories_1.StructureFactory().getClassStaticMethod(structure);
}
exports.createClassStaticMethod = createClassStaticMethod;
function createClassStaticMethodParameter(structure) {
    return new factories_1.StructureFactory().getClassStaticMethodParameter(structure);
}
exports.createClassStaticMethodParameter = createClassStaticMethodParameter;
function createClassStaticProperty(structure) {
    return new factories_1.StructureFactory().getClassStaticProperty(structure);
}
exports.createClassStaticProperty = createClassStaticProperty;
function createDecorator(structure) {
    return new factories_1.StructureFactory().getDecorator(structure);
}
exports.createDecorator = createDecorator;
function createEnum(structure) {
    return new factories_1.StructureFactory().getEnum(structure);
}
exports.createEnum = createEnum;
function createEnumMember(structure) {
    return new factories_1.StructureFactory().getEnumMember(structure);
}
exports.createEnumMember = createEnumMember;
function createFile(structure) {
    if (structure === void 0) { structure = {}; }
    return new factories_1.StructureFactory().getFile(structure);
}
exports.createFile = createFile;
function createFunction(structure) {
    return new factories_1.StructureFactory().getFunction(structure);
}
exports.createFunction = createFunction;
function createFunctionParameter(structure) {
    return new factories_1.StructureFactory().getFunctionParameter(structure);
}
exports.createFunctionParameter = createFunctionParameter;
function createImport(structure) {
    return new factories_1.StructureFactory().getImport(structure);
}
exports.createImport = createImport;
function createIndexSignature(structure) {
    return new factories_1.StructureFactory().getIndexSignature(structure);
}
exports.createIndexSignature = createIndexSignature;
function createInterface(structure) {
    return new factories_1.StructureFactory().getInterface(structure);
}
exports.createInterface = createInterface;
function createInterfaceMethod(structure) {
    return new factories_1.StructureFactory().getInterfaceMethod(structure);
}
exports.createInterfaceMethod = createInterfaceMethod;
function createInterfaceMethodParameter(structure) {
    return new factories_1.StructureFactory().getInterfaceMethodParameter(structure);
}
exports.createInterfaceMethodParameter = createInterfaceMethodParameter;
function createInterfaceProperty(structure) {
    return new factories_1.StructureFactory().getInterfaceProperty(structure);
}
exports.createInterfaceProperty = createInterfaceProperty;
function createNamespace(structure) {
    return new factories_1.StructureFactory().getNamespace(structure);
}
exports.createNamespace = createNamespace;
function createReExport(structure) {
    return new factories_1.StructureFactory().getReExport(structure);
}
exports.createReExport = createReExport;
function createTypeAlias(structure) {
    return new factories_1.StructureFactory().getTypeAlias(structure);
}
exports.createTypeAlias = createTypeAlias;
function createTypeParameter(structure) {
    return new factories_1.StructureFactory().getTypeParameter(structure);
}
exports.createTypeParameter = createTypeParameter;
function createNamedImportPart(structure) {
    return new factories_1.StructureFactory().getNamedImportPart(structure);
}
exports.createNamedImportPart = createNamedImportPart;
function createVariable(structure) {
    return new factories_1.StructureFactory().getVariable(structure);
}
exports.createVariable = createVariable;

//# sourceMappingURL=createFunctions.js.map
