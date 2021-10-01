"use strict";
var definitions_1 = require("./../definitions");
var ScopeWriter = (function () {
    function ScopeWriter(writer) {
        this.writer = writer;
    }
    ScopeWriter.prototype.writeScope = function (scope) {
        switch (scope) {
            case definitions_1.Scope.Protected:
                this.writer.write("protected ");
                break;
            case definitions_1.Scope.Private:
                this.writer.write("private ");
                break;
            default:
                break;
        }
    };
    return ScopeWriter;
}());
exports.ScopeWriter = ScopeWriter;

//# sourceMappingURL=ScopeWriter.js.map
