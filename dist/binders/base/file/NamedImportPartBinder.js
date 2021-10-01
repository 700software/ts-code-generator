"use strict";
var NamedImportPartBinder = (function () {
    function NamedImportPartBinder(baseDefinitionBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
    }
    NamedImportPartBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.name = this.getName();
        def.alias = this.getAlias();
        def.definitions = this.getDefinitions();
        def.expression = this.getExpression();
    };
    return NamedImportPartBinder;
}());
exports.NamedImportPartBinder = NamedImportPartBinder;

//# sourceMappingURL=NamedImportPartBinder.js.map
