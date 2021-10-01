"use strict";
var factories_1 = require("./../factories");
var utils_1 = require("./../utils");
var GlobalDefinition = (function () {
    function GlobalDefinition() {
        this.files = [];
    }
    GlobalDefinition.prototype.addDefinitionAsImportToFile = function (opts) {
        var fileAndNamespaces = this.getFileAndNamespacesToDefinition(opts.definition);
        if (fileAndNamespaces == null) {
            throw new Error("The specified definition does not exist in any other file.");
        }
        else {
            var rootDef = fileAndNamespaces.namespaces.length > 0 ? fileAndNamespaces.namespaces[0] : opts.definition;
            if (!rootDef.isNamedExportOfFile && !rootDef.isDefaultExportOfFile) {
                throw new Error("The specified definition is not exported from a file.");
            }
            opts.file.addImport({
                namedImports: [{
                        name: rootDef.isDefaultExportOfFile ? "default" : rootDef.name,
                        alias: opts.alias || (rootDef.isDefaultExportOfFile ? rootDef.name : undefined)
                    }],
                moduleSpecifier: opts.file.getModuleSpecifierToFile(fileAndNamespaces.file)
            });
            opts.file.imports[opts.file.imports.length - 1].namedImports[0].definitions.push(rootDef);
        }
    };
    GlobalDefinition.prototype.addFile = function (structure) {
        var def = new factories_1.StructureFactory().getFile(structure);
        this.files.push(def);
        return def;
    };
    GlobalDefinition.prototype.getFile = function (fileNameOrSearchFunction) {
        var searchFunction = fileNameOrSearchFunction;
        if (typeof fileNameOrSearchFunction === "string") {
            // todo: why did I have to add an assertion here in TS 2.0? Shouldn't it figure this out as a string?
            searchFunction = function (def) { return utils_1.FileUtils.filePathMatches(def.fileName, fileNameOrSearchFunction); };
        }
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.files, searchFunction);
    };
    GlobalDefinition.prototype.getFileOfDefinition = function (def) {
        var result = this.getFileAndNamespacesToDefinition(def);
        return result == null ? null : result.file;
    };
    GlobalDefinition.prototype.getFileAndNamespacesToDefinition = function (def) {
        for (var i = 0; i < this.files.length; i++) {
            var namespaces = this.files[i].getNamespacesToDefinition(def);
            if (namespaces != null) {
                return {
                    file: this.files[i],
                    namespaces: namespaces
                };
            }
        }
        return null;
    };
    return GlobalDefinition;
}());
exports.GlobalDefinition = GlobalDefinition;

//# sourceMappingURL=GlobalDefinition.js.map
