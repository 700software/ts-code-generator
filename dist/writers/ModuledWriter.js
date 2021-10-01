"use strict";
var definitions = require("./../definitions");
var utils_1 = require("./../utils");
var WriteFlags_1 = require("./../WriteFlags");
// todo: tests
var ModuledWriter = (function () {
    function ModuledWriter(writer, interfaceWriter, classWriter, enumWriter, functionWriter, variableWriter, typeAliasWriter) {
        this.writer = writer;
        this.interfaceWriter = interfaceWriter;
        this.classWriter = classWriter;
        this.enumWriter = enumWriter;
        this.functionWriter = functionWriter;
        this.variableWriter = variableWriter;
        this.typeAliasWriter = typeAliasWriter;
    }
    ModuledWriter.prototype.initialize = function (namespaceWriter) {
        // this was the only way I could think of to handle the circular dependency caused by the
        // circular nature of the problem... maybe there's a better way
        this.namespaceWriter = namespaceWriter;
    };
    ModuledWriter.prototype.write = function (def, flags) {
        if (def instanceof definitions.FileDefinition && utils_1.DefinitionUtils.isDefinitionFile(def) || def instanceof definitions.NamespaceDefinition && def.isAmbient) {
            flags = flags | WriteFlags_1.WriteFlags.IsInAmbientContext;
        }
        else {
            flags = flags & ~WriteFlags_1.WriteFlags.IsInAmbientContext;
        }
        this.writeChildren(def, flags);
    };
    ModuledWriter.prototype.writeChildren = function (def, flags) {
        var _this = this;
        // order these by what should be written if order is null
        var allDefinitions = def.typeAliases.concat(def.interfaces, def.enums, def.classes, def.namespaces, def.variables, def.functions);
        allDefinitions.sort(function (a, b) {
            if (b.order == null) {
                return -1;
            }
            else if (a.order == null) {
                return 1;
            }
            else {
                return a.order - b.order;
            }
        });
        allDefinitions.forEach(function (d, i) {
            if (i > 0 && !(d instanceof definitions.TypeAliasDefinition) && !(d instanceof definitions.VariableDefinition)) {
                _this.writer.newLine();
            }
            if (d instanceof definitions.ClassDefinition) {
                _this.classWriter.write(d, flags);
            }
            else if (d instanceof definitions.InterfaceDefinition) {
                _this.interfaceWriter.write(d, flags);
            }
            else if (d instanceof definitions.FunctionDefinition) {
                _this.functionWriter.write(d, flags);
                _this.writer.newLineIfLastNotNewLine();
            }
            else if (d instanceof definitions.NamespaceDefinition) {
                _this.namespaceWriter.write(d, flags);
            }
            else if (d instanceof definitions.VariableDefinition) {
                if (i > 0 && !(allDefinitions[i - 1] instanceof definitions.VariableDefinition)) {
                    _this.writer.newLine();
                }
                _this.variableWriter.write(d, flags);
                _this.writer.newLine();
            }
            else if (d instanceof definitions.EnumDefinition) {
                _this.enumWriter.write(d, flags);
                _this.writer.newLine();
            }
            else if (d instanceof definitions.TypeAliasDefinition) {
                if (i > 0 && !(allDefinitions[i - 1] instanceof definitions.TypeAliasDefinition)) {
                    _this.writer.newLine();
                }
                _this.typeAliasWriter.write(d, flags);
                _this.writer.newLine();
            }
        });
    };
    return ModuledWriter;
}());
exports.ModuledWriter = ModuledWriter;

//# sourceMappingURL=ModuledWriter.js.map
