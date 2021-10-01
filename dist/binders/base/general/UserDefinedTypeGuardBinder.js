"use strict";
var UserDefinedTypeGuardBinder = (function () {
    function UserDefinedTypeGuardBinder(baseDefinitionBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
    }
    UserDefinedTypeGuardBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.parameterName = this.getParameterName();
        def.type = this.getType();
    };
    return UserDefinedTypeGuardBinder;
}());
exports.UserDefinedTypeGuardBinder = UserDefinedTypeGuardBinder;

//# sourceMappingURL=UserDefinedTypeGuardBinder.js.map
