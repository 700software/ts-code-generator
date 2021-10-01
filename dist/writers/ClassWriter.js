"use strict";
var definitions = require("./../definitions");
var WriteFlags_1 = require("./../WriteFlags");
// todo: tests
var ClassWriter = (function () {
    function ClassWriter(writer, baseDefinitionWriter, documentationedWriter, decoratorsWriter, exportableWriter, ambientableWriter, typeParametersWriter, propertyWriter, methodWriter, classConstructorWriter, extendsImplementsWriter, functionBodyWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.decoratorsWriter = decoratorsWriter;
        this.exportableWriter = exportableWriter;
        this.ambientableWriter = ambientableWriter;
        this.typeParametersWriter = typeParametersWriter;
        this.propertyWriter = propertyWriter;
        this.methodWriter = methodWriter;
        this.classConstructorWriter = classConstructorWriter;
        this.extendsImplementsWriter = extendsImplementsWriter;
        this.functionBodyWriter = functionBodyWriter;
    }
    ClassWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.writeHeader(def, flags);
            _this.writer.block(function () {
                _this.writeStaticProperties(def, flags);
                _this.writer.newLine();
                _this.writeStaticMethods(def, flags);
                _this.writer.newLine();
                _this.writeProperties(def, flags);
                _this.writer.newLine();
                _this.writeConstructor(def.constructorDef, flags);
                _this.writer.newLine();
                _this.writeMethods(def, flags);
            });
        });
    };
    ClassWriter.prototype.writeHeader = function (def, flags) {
        this.documentationedWriter.write(def);
        this.decoratorsWriter.write(def, flags);
        this.exportableWriter.writeExportKeyword(def, flags);
        this.ambientableWriter.writeDeclareKeyword(def);
        this.writeAbstract(def);
        this.writer.write("class ").write(def.name);
        this.typeParametersWriter.write(def.typeParameters);
        this.extendsImplementsWriter.writeExtends(def);
        this.extendsImplementsWriter.writeImplements(def);
    };
    ClassWriter.prototype.writeAbstract = function (def) {
        if (def.isAbstract)
            this.writer.write("abstract ");
    };
    ClassWriter.prototype.writeConstructor = function (constructorDef, flags) {
        var _this = this;
        if (constructorDef == null || !this.classConstructorWriter.shouldWriteConstructor(constructorDef, flags))
            return;
        var willWriteFunctionBody = this.functionBodyWriter.willWriteFunctionBody(constructorDef, flags);
        if (!willWriteFunctionBody)
            flags |= WriteFlags_1.WriteFlags.HideScopeOnParameters;
        this.classConstructorWriter.write(constructorDef, flags);
        this.writer.newLine();
        // if the function body won't be written, the scoped constructor parameters need to be written out as properties
        if (!willWriteFunctionBody) {
            (constructorDef.parameters || []).filter(function (p) { return p.scope !== definitions.ClassConstructorParameterScope.None; }).forEach(function (p) {
                _this.propertyWriter.write(p.toClassProperty(), flags);
            });
        }
    };
    ClassWriter.prototype.writeStaticProperties = function (def, flags) {
        var _this = this;
        def.staticProperties.forEach(function (p) {
            if (!_this.shouldInclude(p, flags))
                return;
            _this.propertyWriter.write(p, flags);
            _this.writer.newLine();
        });
    };
    ClassWriter.prototype.writeProperties = function (def, flags) {
        var _this = this;
        def.properties.forEach(function (p) {
            if (!_this.shouldInclude(p, flags) || p.isConstructorParameter)
                return;
            var willWriteAccessorBody = _this.propertyWriter.willWriteAccessorBody(p);
            if (willWriteAccessorBody)
                _this.writer.newLine();
            _this.propertyWriter.write(p, flags);
            _this.writer.newLine();
            if (willWriteAccessorBody)
                _this.writer.newLine();
        });
    };
    ClassWriter.prototype.writeStaticMethods = function (def, flags) {
        var _this = this;
        if (def.isAmbient)
            flags = flags | WriteFlags_1.WriteFlags.HideFunctionBodies;
        def.staticMethods.forEach(function (m) { return _this.writeMethod(m, flags); });
    };
    ClassWriter.prototype.writeMethods = function (def, flags) {
        var _this = this;
        if (def.isAmbient)
            flags = flags | WriteFlags_1.WriteFlags.HideFunctionBodies;
        def.methods.forEach(function (m) { return _this.writeMethod(m, flags); });
    };
    ClassWriter.prototype.writeMethod = function (def, flags) {
        if (!this.shouldInclude(def, flags))
            return;
        var thisHasBlankLine = this.functionBodyWriter.willWriteFunctionBody(def, flags);
        if (thisHasBlankLine)
            this.writer.newLine();
        this.methodWriter.write(def, flags);
        if (thisHasBlankLine)
            this.writer.newLine();
    };
    ClassWriter.prototype.shouldInclude = function (def, flags) {
        if (def.scope === definitions.Scope.Private && (flags & WriteFlags_1.WriteFlags.HidePrivateMembers))
            return false;
        else if (def.scope === definitions.Scope.Protected && (flags & WriteFlags_1.WriteFlags.HideProtectedMembers))
            return false;
        else
            return true;
    };
    return ClassWriter;
}());
exports.ClassWriter = ClassWriter;

//# sourceMappingURL=ClassWriter.js.map
