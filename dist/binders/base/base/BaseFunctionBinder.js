"use strict";
var BaseFunctionBinder = (function () {
    function BaseFunctionBinder(baseDefinitionBinder, namedBinder, typeParameterBinder, parameterBinder, returnTypedBinder, overloadSignaturedBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.typeParameterBinder = typeParameterBinder;
        this.parameterBinder = parameterBinder;
        this.returnTypedBinder = returnTypedBinder;
        this.overloadSignaturedBinder = overloadSignaturedBinder;
        this.documentationedBinder = documentationedBinder;
    }
    BaseFunctionBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.typeParameterBinder.bind(def);
        this.parameterBinder.bind(def);
        this.returnTypedBinder.bind(def);
        this.overloadSignaturedBinder.bind(def);
        this.documentationedBinder.bind(def);
        if (def.parameters.length > 0 && def.parameters[0].name === "this") {
            var thisParam = def.parameters.splice(0, 1)[0];
            def.thisType = thisParam.type;
        }
        def.isGenerator = this.getIsGenerator();
        def.userDefinedTypeGuard = this.getUserDefinedTypeGuard();
        if (def.userDefinedTypeGuard != null) {
            def.returnType.text = (def.userDefinedTypeGuard.parameterName || "this") + " is " + def.userDefinedTypeGuard.type.text;
        }
    };
    return BaseFunctionBinder;
}());
exports.BaseFunctionBinder = BaseFunctionBinder;

//# sourceMappingURL=BaseFunctionBinder.js.map
