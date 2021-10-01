"use strict";
var CallSignatureBinder = (function () {
    function CallSignatureBinder(baseDefinitionBinder, typeParameterBinder, parameterBinder, returnTypedBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.typeParameterBinder = typeParameterBinder;
        this.parameterBinder = parameterBinder;
        this.returnTypedBinder = returnTypedBinder;
        this.documentationedBinder = documentationedBinder;
    }
    CallSignatureBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.typeParameterBinder.bind(def);
        this.parameterBinder.bind(def);
        this.returnTypedBinder.bind(def);
        this.documentationedBinder.bind(def);
    };
    return CallSignatureBinder;
}());
exports.CallSignatureBinder = CallSignatureBinder;

//# sourceMappingURL=CallSignatureBinder.js.map
