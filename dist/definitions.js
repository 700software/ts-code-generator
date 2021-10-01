"use strict";
function __export(m) {
    for (var p in m) /* istanbul ignore else */ if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./definitions/base"));
__export(require("./definitions/general"));
__export(require("./definitions/expression"));
__export(require("./definitions/function"));
__export(require("./definitions/class"));
__export(require("./definitions/interface"));
__export(require("./definitions/enum"));
__export(require("./definitions/namespace"));
__export(require("./definitions/file"));
__export(require("./definitions/variable"));
__export(require("./definitions/GlobalDefinition"));
var base_2 = require("./definitions/base");
var function_2 = require("./definitions/function");
var interface_2 = require("./definitions/interface");
var class_2 = require("./definitions/class");
var enum_2 = require("./definitions/enum");
var namespace_2 = require("./definitions/namespace");
var variable_2 = require("./definitions/variable");
var general_2 = require("./definitions/general");
// initialize any definitions that need dependencies (prevents circular dependencies)
base_2.ModuledDefinition.initialize({
    enumType: enum_2.EnumDefinition,
    classType: class_2.ClassDefinition,
    functionType: function_2.FunctionDefinition,
    interfaceType: interface_2.InterfaceDefinition,
    namespaceType: namespace_2.NamespaceDefinition,
    variableType: variable_2.VariableDefinition,
    typeAliasType: general_2.TypeAliasDefinition
});

//# sourceMappingURL=definitions.js.map
