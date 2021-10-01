"use strict";
var Scope_1 = require("./Scope");
exports.ClassConstructorParameterScope = {
    None: "none",
    Public: "public",
    Protected: "protected",
    Private: "private",
    toScope: function (scope) {
        switch (scope) {
            case exports.ClassConstructorParameterScope.Public:
                return Scope_1.Scope.Public;
            case exports.ClassConstructorParameterScope.Protected:
                return Scope_1.Scope.Protected;
            case exports.ClassConstructorParameterScope.Private:
                return Scope_1.Scope.Private;
            case exports.ClassConstructorParameterScope.None:
                throw new Error("Unexpected conversion of ClassConstructorParameterScope.None to Scope");
            default:
                throw new Error("Not implemented ClassConstructorParameterScope: " + scope);
        }
    }
};

//# sourceMappingURL=ClassConstructorParameterScope.js.map
