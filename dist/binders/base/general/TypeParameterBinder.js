"use strict";
var TypeParameterBinder = (function () {
    function TypeParameterBinder(baseDefinitionBinder, namedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
    }
    TypeParameterBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        def.constraintType = this.getConstraintType();
    };
    return TypeParameterBinder;
}());
exports.TypeParameterBinder = TypeParameterBinder;

//# sourceMappingURL=TypeParameterBinder.js.map
