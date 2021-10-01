"use strict";
var BaseParameterBinder = (function () {
    function BaseParameterBinder(baseDefinitionBinder, namedBinder, optionalBinder, typedBinder, defaultExpressionedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.optionalBinder = optionalBinder;
        this.typedBinder = typedBinder;
        this.defaultExpressionedBinder = defaultExpressionedBinder;
    }
    BaseParameterBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.optionalBinder.bind(def);
        this.typedBinder.bind(def);
        this.defaultExpressionedBinder.bind(def);
        def.isRestParameter = this.getIsRestParameter();
        def.destructuringProperties = this.getDestructuringProperties();
        if (def.destructuringProperties.length > 0)
            def.name = null;
    };
    return BaseParameterBinder;
}());
exports.BaseParameterBinder = BaseParameterBinder;

//# sourceMappingURL=BaseParameterBinder.js.map
