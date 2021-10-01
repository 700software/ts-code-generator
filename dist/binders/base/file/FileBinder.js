"use strict";
var definitions_1 = require("./../../../definitions");
var FileBinder = (function () {
    function FileBinder(baseDefinitionBinder, moduledBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.moduledBinder = moduledBinder;
    }
    FileBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.fileName = this.getFileName();
        def.defaultExportExpression = this.getDefaultExportExpression();
        def.imports = this.getImports();
        def.reExports = this.getReExports();
        this.moduledBinder.bind(def, function (childDef) {
            if (childDef instanceof definitions_1.ImportDefinition) {
                def.imports.push(childDef);
            }
            else if (childDef instanceof definitions_1.ReExportDefinition) {
                def.reExports.push(childDef);
            }
        });
    };
    return FileBinder;
}());
exports.FileBinder = FileBinder;

//# sourceMappingURL=FileBinder.js.map
