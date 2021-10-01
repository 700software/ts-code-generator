"use strict";
var definitions_1 = require("./../definitions");
var PropertyWriter = (function () {
    function PropertyWriter(writer, baseDefinitionWriter, documentationedWriter, decoratorsWriter, typeWriter, scopeWriter, typeWithDefaultExpressionWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.decoratorsWriter = decoratorsWriter;
        this.typeWriter = typeWriter;
        this.scopeWriter = scopeWriter;
        this.typeWithDefaultExpressionWriter = typeWithDefaultExpressionWriter;
    }
    PropertyWriter.prototype.willWriteAccessorBody = function (def) {
        if (!(def instanceof definitions_1.ClassPropertyDefinition))
            return false;
        var isWriteableGetAccessor = (def.kind & definitions_1.ClassPropertyKind.GetAccessor) !== 0 && def.onWriteGetBody != null;
        var isWriteableSetAccessor = (def.kind & definitions_1.ClassPropertyKind.SetAccessor) !== 0 && def.onWriteSetBody != null;
        return this.isAccessor(def) && (isWriteableGetAccessor || isWriteableSetAccessor);
    };
    PropertyWriter.prototype.isAbstractAccessor = function (def) {
        return this.isAccessor(def) && def.isAbstract;
    };
    PropertyWriter.prototype.isAccessor = function (def) {
        return (def.kind & definitions_1.ClassPropertyKind.GetSetAccessor) !== 0;
    };
    PropertyWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.writeSingleCommonHeader(def, flags);
            if (def instanceof definitions_1.ClassPropertyDefinition && (_this.willWriteAccessorBody(def) || _this.isAbstractAccessor(def)))
                _this.writeAccessor(def, flags);
            else
                _this.writeNormalProperty(def, flags);
        });
    };
    PropertyWriter.prototype.writeNormalProperty = function (def, flags) {
        this.writeCommonHeader(def, flags);
        this.writer.write(def.name);
        this.writer.conditionalWrite(def.isOptional, "?");
        if (def instanceof definitions_1.InterfacePropertyDefinition)
            this.typeWriter.writeWithColon(def.type, "any");
        else
            this.typeWithDefaultExpressionWriter.writeWithOptionalCheck(def, flags, "any");
        this.writer.write(";");
    };
    PropertyWriter.prototype.writeAccessor = function (def, flags) {
        if (def.kind & definitions_1.ClassPropertyKind.GetAccessor)
            this.writeGetAccessor(def, flags);
        if (def.kind & definitions_1.ClassPropertyKind.SetAccessor) {
            this.writer.conditionalNewLine(def.kind === definitions_1.ClassPropertyKind.GetSetAccessor);
            this.writeSetAccessor(def, flags);
        }
    };
    PropertyWriter.prototype.writeGetAccessor = function (def, flags) {
        var _this = this;
        this.writeCommonHeader(def, flags);
        this.writer.write("get ");
        this.writer.write(def.name);
        this.writer.write("()");
        this.typeWriter.writeWithColon(def.type, "any");
        if (def.isAbstract)
            this.writer.write(";");
        else {
            this.writer.block(function () {
                if (typeof def.onWriteGetBody === "function")
                    def.onWriteGetBody(_this.writer);
            });
        }
    };
    PropertyWriter.prototype.writeSetAccessor = function (def, flags) {
        var _this = this;
        this.writeCommonHeader(def, flags);
        this.writer.write("set ");
        this.writer.write(def.name);
        this.writer.write("(value"); // default to value for now
        this.typeWriter.writeWithColon(def.type, "any");
        this.writer.write(")");
        if (def.isAbstract)
            this.writer.write(";");
        else {
            this.writer.block(function () {
                if (typeof def.onWriteSetBody === "function")
                    def.onWriteSetBody(_this.writer);
            });
        }
    };
    PropertyWriter.prototype.writeSingleCommonHeader = function (def, flags) {
        this.documentationedWriter.write(def);
        this.decoratorsWriter.write(def, flags);
    };
    PropertyWriter.prototype.writeCommonHeader = function (def, flags) {
        if (def instanceof definitions_1.ClassPropertyDefinition || def instanceof definitions_1.ClassStaticPropertyDefinition) {
            this.scopeWriter.writeScope(def.scope);
            if (def instanceof definitions_1.ClassPropertyDefinition)
                this.writer.conditionalWrite(def.isAbstract, "abstract ");
            this.writer.conditionalWrite(def instanceof definitions_1.ClassStaticPropertyDefinition, "static ");
        }
        this.writer.conditionalWrite(!this.willWriteAccessorBody(def) && def.isReadonly, "readonly ");
    };
    return PropertyWriter;
}());
exports.PropertyWriter = PropertyWriter;

//# sourceMappingURL=PropertyWriter.js.map
