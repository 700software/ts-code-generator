"use strict";
var binders = require("./../binders");
var definitions = require("./../definitions");
function bindToDefinition(binder, def) {
    binder.bind(def);
    return def;
}
var StructureFactory = (function () {
    /* istanbul ignore next */ function StructureFactory() {
    }
    StructureFactory.prototype.getCallSignature = function (structure) {
        return bindToDefinition(new binders.StructureCallSignatureBinder(this, structure), new definitions.CallSignatureDefinition());
    };
    StructureFactory.prototype.getCallSignatureParameter = function (structure) {
        return bindToDefinition(new binders.StructureCallSignatureParameterBinder(this, structure), new definitions.CallSignatureParameterDefinition());
    };
    StructureFactory.prototype.getClass = function (structure) {
        return bindToDefinition(new binders.StructureClassBinder(this, structure), new definitions.ClassDefinition());
    };
    StructureFactory.prototype.getClassConstructor = function (structure) {
        return bindToDefinition(new binders.StructureClassConstructorBinder(this, structure), new definitions.ClassConstructorDefinition());
    };
    StructureFactory.prototype.getClassConstructorParameter = function (structure) {
        return bindToDefinition(new binders.StructureClassConstructorParameterBinder(this, structure), new definitions.ClassConstructorParameterDefinition());
    };
    StructureFactory.prototype.getClassMethod = function (structure) {
        return bindToDefinition(new binders.StructureClassMethodBinder(this, structure), new definitions.ClassMethodDefinition());
    };
    StructureFactory.prototype.getClassMethodParameter = function (structure) {
        return bindToDefinition(new binders.StructureClassMethodParameterBinder(this, structure), new definitions.ClassMethodParameterDefinition());
    };
    StructureFactory.prototype.getClassProperty = function (structure) {
        return bindToDefinition(new binders.StructureClassPropertyBinder(this, structure), new definitions.ClassPropertyDefinition());
    };
    StructureFactory.prototype.getClassStaticMethod = function (structure) {
        return bindToDefinition(new binders.StructureClassStaticMethodBinder(this, structure), new definitions.ClassStaticMethodDefinition());
    };
    StructureFactory.prototype.getClassStaticMethodParameter = function (structure) {
        return bindToDefinition(new binders.StructureClassStaticMethodParameterBinder(this, structure), new definitions.ClassStaticMethodParameterDefinition());
    };
    StructureFactory.prototype.getClassStaticProperty = function (structure) {
        return bindToDefinition(new binders.StructureClassStaticPropertyBinder(this, structure), new definitions.ClassStaticPropertyDefinition());
    };
    StructureFactory.prototype.getDecorator = function (structure) {
        return bindToDefinition(new binders.StructureDecoratorBinder(this, structure), new definitions.DecoratorDefinition());
    };
    StructureFactory.prototype.getEnum = function (structure) {
        return bindToDefinition(new binders.StructureEnumBinder(this, structure), new definitions.EnumDefinition());
    };
    StructureFactory.prototype.getEnumMember = function (structure) {
        return bindToDefinition(new binders.StructureEnumMemberBinder(structure), new definitions.EnumMemberDefinition());
    };
    StructureFactory.prototype.getExpressionFromText = function (text) {
        if (typeof text === "string" && text.length > 0) {
            return bindToDefinition(new binders.StructureExpressionBinder(text), new definitions.ExpressionDefinition());
        }
        else {
            return null;
        }
    };
    StructureFactory.prototype.getFile = function (structure) {
        return bindToDefinition(new binders.StructureFileBinder(this, structure), new definitions.FileDefinition());
    };
    StructureFactory.prototype.getFunction = function (structure) {
        return bindToDefinition(new binders.StructureFunctionBinder(this, structure), new definitions.FunctionDefinition());
    };
    StructureFactory.prototype.getFunctionParameter = function (structure) {
        return bindToDefinition(new binders.StructureFunctionParameterBinder(this, structure), new definitions.FunctionParameterDefinition());
    };
    StructureFactory.prototype.getImport = function (structure) {
        return bindToDefinition(new binders.StructureImportBinder(this, structure), new definitions.ImportDefinition());
    };
    StructureFactory.prototype.getDefaultImportPartByName = function (importName) {
        return bindToDefinition(new binders.StructureDefaultImportPartBinder(importName), new definitions.DefaultImportPartDefinition());
    };
    StructureFactory.prototype.getIndexSignature = function (structure) {
        return bindToDefinition(new binders.StructureIndexSignatureBinder(this, structure), new definitions.IndexSignatureDefinition());
    };
    StructureFactory.prototype.getReExport = function (structure) {
        return bindToDefinition(new binders.StructureReExportBinder(this, structure), new definitions.ReExportDefinition());
    };
    StructureFactory.prototype.getNamedImportPart = function (structure) {
        return bindToDefinition(new binders.StructureNamedImportPartBinder(structure), new definitions.NamedImportPartDefinition());
    };
    StructureFactory.prototype.getInterface = function (structure) {
        return bindToDefinition(new binders.StructureInterfaceBinder(this, structure), new definitions.InterfaceDefinition());
    };
    StructureFactory.prototype.getInterfaceMethod = function (structure) {
        return bindToDefinition(new binders.StructureInterfaceMethodBinder(this, structure), new definitions.InterfaceMethodDefinition());
    };
    StructureFactory.prototype.getInterfaceProperty = function (structure) {
        return bindToDefinition(new binders.StructureInterfacePropertyBinder(this, structure), new definitions.InterfacePropertyDefinition());
    };
    StructureFactory.prototype.getInterfaceMethodParameter = function (structure) {
        return bindToDefinition(new binders.StructureInterfaceMethodParameterBinder(this, structure), new definitions.InterfaceMethodParameterDefinition());
    };
    StructureFactory.prototype.getNamespace = function (structure) {
        return bindToDefinition(new binders.StructureNamespaceBinder(this, structure), new definitions.NamespaceDefinition());
    };
    StructureFactory.prototype.getObjectProperty = function (structure) {
        return bindToDefinition(new binders.StructureObjectPropertyBinder(this, structure), new definitions.ObjectPropertyDefinition());
    };
    StructureFactory.prototype.getTypeAlias = function (structure) {
        return bindToDefinition(new binders.StructureTypeAliasBinder(this, structure), new definitions.TypeAliasDefinition());
    };
    StructureFactory.prototype.getTypeFromDefinitionAndTypeArguments = function (definition, typeArguments) {
        var text = definition.name || "any";
        if (typeArguments.length > 0) {
            text += "<" + typeArguments.join(", ") + ">";
        }
        return this.getTypeFromText(text);
    };
    StructureFactory.prototype.getTypeFromText = function (text) {
        text = text || "any";
        return bindToDefinition(new binders.StructureTypeBinder(this, text), new definitions.TypeDefinition());
    };
    StructureFactory.prototype.getTypeNodeFromText = function (text) {
        text = text || "any";
        return bindToDefinition(new binders.StructureTypeNodeBinder(this, text), new definitions.TypeNodeDefinition());
    };
    StructureFactory.prototype.getTypeParameter = function (structure) {
        return bindToDefinition(new binders.StructureTypeParameterBinder(this, structure), new definitions.TypeParameterDefinition());
    };
    StructureFactory.prototype.getUserDefinedTypeGuard = function (structure) {
        return bindToDefinition(new binders.StructureUserDefinedTypeGuardBinder(this, structure), new definitions.UserDefinedTypeGuardDefinition());
    };
    StructureFactory.prototype.getVariable = function (structure) {
        return bindToDefinition(new binders.StructureVariableBinder(this, structure), new definitions.VariableDefinition());
    };
    return StructureFactory;
}());
exports.StructureFactory = StructureFactory;

//# sourceMappingURL=StructureFactory.js.map
