"use strict";
var ClassConstructorBinder = (function () {
    function ClassConstructorBinder(baseDefinitionBinder, parameteredBinder, functionBodyWriteableBinder, scopedBinder, overloadSignaturedBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.parameteredBinder = parameteredBinder;
        this.functionBodyWriteableBinder = functionBodyWriteableBinder;
        this.scopedBinder = scopedBinder;
        this.overloadSignaturedBinder = overloadSignaturedBinder;
        this.documentationedBinder = documentationedBinder;
    }
    ClassConstructorBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.parameteredBinder.bind(def);
        this.functionBodyWriteableBinder.bind(def);
        this.scopedBinder.bind(def);
        this.overloadSignaturedBinder.bind(def);
        this.documentationedBinder.bind(def);
    };
    return ClassConstructorBinder;
}());
exports.ClassConstructorBinder = ClassConstructorBinder;

//# sourceMappingURL=ClassConstructorBinder.js.map
