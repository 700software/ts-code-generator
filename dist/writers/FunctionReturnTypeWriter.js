"use strict";
var FunctionReturnTypeWriter = (function () {
    function FunctionReturnTypeWriter(writer, functionBodyWriter, typeWriter) {
        this.writer = writer;
        this.functionBodyWriter = functionBodyWriter;
        this.typeWriter = typeWriter;
    }
    FunctionReturnTypeWriter.prototype.write = function (def, flags) {
        if (def.userDefinedTypeGuard != null)
            this.writer.write(": " + (def.userDefinedTypeGuard.parameterName || "this") + " is " + def.userDefinedTypeGuard.type.text);
        else if (!this.functionBodyWriter.willWriteFunctionBody(def, flags) || def.overloadSignatures.length > 0)
            this.typeWriter.writeWithColon(def.returnType, "any");
    };
    return FunctionReturnTypeWriter;
}());
exports.FunctionReturnTypeWriter = FunctionReturnTypeWriter;

//# sourceMappingURL=FunctionReturnTypeWriter.js.map
