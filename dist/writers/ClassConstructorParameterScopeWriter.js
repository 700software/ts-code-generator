"use strict";
var definitions_1 = require("./../definitions");
var ClassConstructorParameterScopeWriter = (function () {
    function ClassConstructorParameterScopeWriter(writer) {
        this.writer = writer;
    }
    ClassConstructorParameterScopeWriter.prototype.writeScope = function (scope) {
        switch (scope) {
            case definitions_1.ClassConstructorParameterScope.Public:
                this.writer.write("public ");
                break;
            case definitions_1.ClassConstructorParameterScope.Protected:
                this.writer.write("protected ");
                break;
            case definitions_1.ClassConstructorParameterScope.Private:
                this.writer.write("private ");
                break;
            default:
                break;
        }
    };
    return ClassConstructorParameterScopeWriter;
}());
exports.ClassConstructorParameterScopeWriter = ClassConstructorParameterScopeWriter;

//# sourceMappingURL=ClassConstructorParameterScopeWriter.js.map
