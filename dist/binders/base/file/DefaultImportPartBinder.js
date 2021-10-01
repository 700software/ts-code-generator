"use strict";
var DefaultImportPartBinder = (function () {
    function DefaultImportPartBinder(baseDefinitionBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
    }
    DefaultImportPartBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.name = this.getName();
        def.definitions = this.getDefinitions();
        def.expression = this.getExpression();
    };
    return DefaultImportPartBinder;
}());
exports.DefaultImportPartBinder = DefaultImportPartBinder;

//# sourceMappingURL=DefaultImportPartBinder.js.map
