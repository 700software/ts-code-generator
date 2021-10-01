"use strict";
var definitions = require("./definitions");
var WriteFlags_1 = require("./WriteFlags");
var factories_1 = require("./factories");
var utils_1 = require("./utils");
function writeDefinition(definition, writer, writeFlags) {
    if (writeFlags === void 0) { writeFlags = WriteFlags_1.WriteFlags.Default; }
    var writerFactory = factories_1.MainFactory.createWriteFactory(writer);
    if (definition instanceof definitions.ClassDefinition)
        writerFactory.getClassWriter().write(definition, writeFlags);
    else if (definition instanceof definitions.InterfaceDefinition)
        writerFactory.getInterfaceWriter().write(definition, writeFlags);
    else if (definition instanceof definitions.FunctionDefinition)
        writerFactory.getFunctionWriter().write(definition, writeFlags);
    else if (definition instanceof definitions.FileDefinition)
        writerFactory.getFileWriter().write(definition, writeFlags);
    else if (definition instanceof definitions.NamespaceDefinition)
        writerFactory.getNamespaceWriter().write(definition, writeFlags);
    else if (definition instanceof definitions.EnumDefinition)
        writerFactory.getEnumWriter().write(definition, writeFlags);
    else if (definition instanceof definitions.TypeAliasDefinition)
        writerFactory.getTypeAliasWriter().write(definition, writeFlags);
    else if (definition instanceof definitions.VariableDefinition)
        writerFactory.getVariableWriter().write(definition, writeFlags);
    else
        utils_1.Logger.warn("Not implemented writer for definition: " + definition.name);
}
exports.writeDefinition = writeDefinition;

//# sourceMappingURL=writeDefinition.js.map
