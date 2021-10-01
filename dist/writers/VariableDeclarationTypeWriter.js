"use strict";
var definitions_1 = require("./../definitions");
var VariableDeclarationTypeWriter = (function () {
    function VariableDeclarationTypeWriter(writer) {
        this.writer = writer;
    }
    VariableDeclarationTypeWriter.prototype.writeDeclarationType = function (declarationType) {
        switch (declarationType) {
            case definitions_1.VariableDeclarationType.Let:
                this.writer.write("let");
                break;
            case definitions_1.VariableDeclarationType.Const:
                this.writer.write("const");
                break;
            default:
                this.writer.write("var");
                break;
        }
    };
    return VariableDeclarationTypeWriter;
}());
exports.VariableDeclarationTypeWriter = VariableDeclarationTypeWriter;

//# sourceMappingURL=VariableDeclarationTypeWriter.js.map
