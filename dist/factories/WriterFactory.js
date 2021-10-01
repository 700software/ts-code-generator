"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var writers = require("./../writers");
var utils_1 = require("./../utils");
var WriterFactory = (function () {
    function WriterFactory(writer) {
        this.writer = writer;
    }
    WriterFactory.prototype.getBaseDefinitionWriter = function () {
        return new writers.BaseDefinitionWriter(this.writer);
    };
    WriterFactory.prototype.getAmbientableWriter = function () {
        return new writers.AmbientableWriter(this.writer);
    };
    WriterFactory.prototype.getAsyncableWriter = function () {
        return new writers.AsyncableWriter(this.writer);
    };
    WriterFactory.prototype.getCallSignatureWriter = function () {
        return new writers.CallSignatureWriter(this.writer, this.getBaseDefinitionWriter(), this.getTypeParametersWriter(), this.getTypeWriter(), this.getParametersWriter());
    };
    WriterFactory.prototype.getClassConstructorParameterScopeWriter = function () {
        return new writers.ClassConstructorParameterScopeWriter(this.writer);
    };
    WriterFactory.prototype.getClassConstructorWriter = function () {
        return new writers.ClassConstructorWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getParametersWriter(), this.getFunctionBodyWriter(), this.getScopeWriter());
    };
    WriterFactory.prototype.getClassWriter = function () {
        return new writers.ClassWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getDecoratorsWriter(), this.getExportableWriter(), this.getAmbientableWriter(), this.getTypeParametersWriter(), this.getPropertyWriter(), this.getFunctionWriter(), this.getClassConstructorWriter(), this.getExtendsImplementsClauseWriter(), this.getFunctionBodyWriter());
    };
    WriterFactory.prototype.getDecoratorWriter = function () {
        return new writers.DecoratorWriter(this.writer, this.getBaseDefinitionWriter());
    };
    WriterFactory.prototype.getDecoratorsWriter = function () {
        return new writers.DecoratorsWriter(this.writer, this.getDecoratorWriter());
    };
    WriterFactory.prototype.getDefaultExpressionedWriter = function () {
        return new writers.DefaultExpressionedWriter(this.writer, this.getExpressionWriter());
    };
    WriterFactory.prototype.getDocumentationedWriter = function () {
        return new writers.DocumentationedWriter(this.writer);
    };
    WriterFactory.prototype.getEnumWriter = function () {
        return new writers.EnumWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getExportableWriter(), this.getAmbientableWriter(), this.getEnumMemberWriter());
    };
    WriterFactory.prototype.getEnumMemberWriter = function () {
        return new writers.EnumMemberWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter());
    };
    WriterFactory.prototype.getExportableWriter = function () {
        return new writers.ExportableWriter(this.writer);
    };
    WriterFactory.prototype.getExpressionWriter = function () {
        return new writers.ExpressionWriter(this.writer);
    };
    WriterFactory.prototype.getExtendsImplementsClauseWriter = function () {
        return new writers.ExtendsImplementsClauseWriter(this.writer);
    };
    WriterFactory.prototype.getFunctionBodyWriter = function () {
        return new writers.FunctionBodyWriter(this.writer);
    };
    WriterFactory.prototype.getFunctionReturnTypeWriter = function () {
        return new writers.FunctionReturnTypeWriter(this.writer, this.getFunctionBodyWriter(), this.getTypeWriter());
    };
    WriterFactory.prototype.getFileWriter = function () {
        return new writers.FileWriter(this.writer, this.getBaseDefinitionWriter(), this.getImportWriter(), this.getReExportWriter(), this.getModuledWriter());
    };
    WriterFactory.prototype.getFunctionWriter = function () {
        return new writers.FunctionWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getDecoratorsWriter(), this.getExportableWriter(), this.getAmbientableWriter(), this.getAsyncableWriter(), this.getScopeWriter(), this.getCallSignatureWriter(), this.getTypeParametersWriter(), this.getParametersWriter(), this.getFunctionBodyWriter(), this.getFunctionReturnTypeWriter());
    };
    WriterFactory.prototype.getImportWriter = function () {
        return new writers.ImportWriter(this.writer, this.getBaseDefinitionWriter());
    };
    WriterFactory.prototype.getIndexSignatureWriter = function () {
        return new writers.IndexSignatureWriter(this.writer, this.getBaseDefinitionWriter(), this.getTypeWriter());
    };
    WriterFactory.prototype.getInterfaceWriter = function () {
        return new writers.InterfaceWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getExportableWriter(), this.getAmbientableWriter(), this.getTypeParametersWriter(), this.getPropertyWriter(), this.getFunctionWriter(), this.getCallSignatureWriter(), this.getIndexSignatureWriter(), this.getExtendsImplementsClauseWriter());
    };
    WriterFactory.prototype.getModuledWriter = function () {
        return this.getNamespaceAndModuledWriterPrivate().moduledWriter;
    };
    WriterFactory.prototype.getNamedImportPartWriter = function () {
        return new writers.NamedImportPartWriter(this.writer, this.getBaseDefinitionWriter());
    };
    WriterFactory.prototype.getNamedImportPartsWriter = function () {
        return new writers.NamedImportPartsWriter(this.writer, this.getNamedImportPartWriter());
    };
    WriterFactory.prototype.getNamespaceWriter = function () {
        return this.getNamespaceAndModuledWriterPrivate().namespaceWriter;
    };
    WriterFactory.prototype.getParametersWriter = function () {
        return new writers.ParametersWriter(this.writer, this.getParameterWriter(), this.getParameterWithDestructuringWriter(), this.getTypeWriter());
    };
    WriterFactory.prototype.getParameterWriter = function () {
        return new writers.ParameterWriter(this.writer, this.getBaseDefinitionWriter(), this.getDecoratorsWriter(), this.getTypeWithDefaultExpressionWriter(), this.getClassConstructorParameterScopeWriter());
    };
    WriterFactory.prototype.getParameterWithDestructuringWriter = function () {
        return new writers.ParameterWithDestructuringWriter(this.writer, this.getBaseDefinitionWriter(), this.getDefaultExpressionedWriter(), this.getTypeWriter());
    };
    WriterFactory.prototype.getPropertyWriter = function () {
        return new writers.PropertyWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getDecoratorsWriter(), this.getTypeWriter(), this.getScopeWriter(), this.getTypeWithDefaultExpressionWriter());
    };
    WriterFactory.prototype.getReExportWriter = function () {
        return new writers.ReExportWriter(this.writer, this.getBaseDefinitionWriter(), this.getNamedImportPartsWriter());
    };
    WriterFactory.prototype.getScopeWriter = function () {
        return new writers.ScopeWriter(this.writer);
    };
    WriterFactory.prototype.getTypeAliasWriter = function () {
        return new writers.TypeAliasWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getExportableWriter(), this.getAmbientableWriter(), this.getTypeWriter(), this.getTypeParametersWriter());
    };
    WriterFactory.prototype.getTypeWithDefaultExpressionWriter = function () {
        return new writers.TypeWithDefaultExpressionWriter(this.writer, this.getTypeWriter(), this.getDefaultExpressionedWriter());
    };
    WriterFactory.prototype.getTypeParameterWriter = function () {
        return new writers.TypeParameterWriter(this.writer, this.getBaseDefinitionWriter(), this.getTypeWriter());
    };
    WriterFactory.prototype.getTypeParametersWriter = function () {
        return new writers.TypeParametersWriter(this.writer, this.getTypeParameterWriter());
    };
    WriterFactory.prototype.getTypeWriter = function () {
        return new writers.TypeWriter(this.writer);
    };
    WriterFactory.prototype.getVariableDeclarationWriter = function () {
        return new writers.VariableDeclarationTypeWriter(this.writer);
    };
    WriterFactory.prototype.getVariableWriter = function () {
        return new writers.VariableWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getExportableWriter(), this.getAmbientableWriter(), this.getTypeWithDefaultExpressionWriter(), this.getVariableDeclarationWriter());
    };
    WriterFactory.prototype.getNamespaceAndModuledWriterPrivate = function () {
        var moduledWriter = new writers.ModuledWriter(this.writer, this.getInterfaceWriter(), this.getClassWriter(), this.getEnumWriter(), this.getFunctionWriter(), this.getVariableWriter(), this.getTypeAliasWriter());
        var namespaceWriter = new writers.NamespaceWriter(this.writer, this.getBaseDefinitionWriter(), this.getDocumentationedWriter(), this.getExportableWriter(), this.getAmbientableWriter());
        namespaceWriter.initialize(moduledWriter);
        moduledWriter.initialize(namespaceWriter);
        return { moduledWriter: moduledWriter, namespaceWriter: namespaceWriter };
    };
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getBaseDefinitionWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getAmbientableWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getAsyncableWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getCallSignatureWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getClassConstructorParameterScopeWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getClassConstructorWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getClassWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getDecoratorWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getDecoratorsWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getDefaultExpressionedWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getDocumentationedWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getEnumWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getEnumMemberWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getExportableWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getExpressionWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getExtendsImplementsClauseWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getFunctionBodyWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getFunctionReturnTypeWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getFileWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getFunctionWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getImportWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getIndexSignatureWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getInterfaceWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getModuledWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getNamedImportPartWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getNamedImportPartsWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getNamespaceWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getParametersWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getParameterWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getParameterWithDestructuringWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getPropertyWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getReExportWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getScopeWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getTypeAliasWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getTypeWithDefaultExpressionWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getTypeParameterWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getTypeParametersWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getTypeWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getVariableDeclarationWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getVariableWriter", null);
    __decorate([
        utils_1.Memoize
    ], WriterFactory.prototype, "getNamespaceAndModuledWriterPrivate", null);
    return WriterFactory;
}());
exports.WriterFactory = WriterFactory;

//# sourceMappingURL=WriterFactory.js.map
