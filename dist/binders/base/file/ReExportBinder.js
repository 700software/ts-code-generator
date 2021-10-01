"use strict";
var ReExportBinder = (function () {
    function ReExportBinder(baseDefinitionBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
    }
    ReExportBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.fileName = this.getFileName();
        def.moduleSpecifier = this.getModuleSpecifier();
        if (this.getIsStarExport()) {
            def.starExports = this.getStarExports();
        }
        else {
            def.namedExports = this.getNamedExports();
        }
    };
    return ReExportBinder;
}());
exports.ReExportBinder = ReExportBinder;

//# sourceMappingURL=ReExportBinder.js.map
