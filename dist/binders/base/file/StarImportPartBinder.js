"use strict";
var StarImportPartBinder = (function () {
    function StarImportPartBinder(baseDefinitionBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
    }
    StarImportPartBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.name = this.getName();
        def.definitions = this.getDefinitions();
        def.expression = this.getExpression();
    };
    return StarImportPartBinder;
}());
exports.StarImportPartBinder = StarImportPartBinder;

//# sourceMappingURL=StarImportPartBinder.js.map
