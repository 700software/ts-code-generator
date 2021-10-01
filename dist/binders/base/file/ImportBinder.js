"use strict";
var ImportBinder = (function () {
    function ImportBinder(baseDefinitionBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
    }
    ImportBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.fileName = this.getFileName();
        def.moduleSpecifier = this.getModuleSpecifier();
        def.defaultImport = this.getDefaultImport();
        if (this.getIsStarImport()) {
            def.starImports = this.getStarImports();
            def.starImportName = this.getStarImportName();
        }
        else {
            def.namedImports = this.getNamedImports();
        }
    };
    return ImportBinder;
}());
exports.ImportBinder = ImportBinder;

//# sourceMappingURL=ImportBinder.js.map
