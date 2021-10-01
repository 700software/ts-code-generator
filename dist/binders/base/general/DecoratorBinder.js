"use strict";
var DecoratorBinder = (function () {
    function DecoratorBinder(baseDefinitionBinder, namedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
    }
    DecoratorBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        (_a = def.arguments).push.apply(_a, this.getArguments());
        def.isDecoratorFactory = this.getIsDecoratorFactory();
        var _a;
    };
    return DecoratorBinder;
}());
exports.DecoratorBinder = DecoratorBinder;

//# sourceMappingURL=DecoratorBinder.js.map
