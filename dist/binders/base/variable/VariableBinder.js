"use strict";
var VariableBinder = (function () {
    function VariableBinder(baseDefinitionBinder, namedBinder, exportableBinder, ambientableBinder, typedBinder, defaultExpressionedBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.exportableBinder = exportableBinder;
        this.ambientableBinder = ambientableBinder;
        this.typedBinder = typedBinder;
        this.defaultExpressionedBinder = defaultExpressionedBinder;
        this.documentationedBinder = documentationedBinder;
    }
    VariableBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.exportableBinder.bind(def);
        this.ambientableBinder.bind(def);
        this.typedBinder.bind(def);
        this.defaultExpressionedBinder.bind(def);
        this.documentationedBinder.bind(def);
        def.declarationType = this.getDeclarationType();
    };
    return VariableBinder;
}());
exports.VariableBinder = VariableBinder;

//# sourceMappingURL=VariableBinder.js.map
