"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var ImportDefinition = (function (_super) {
    __extends(ImportDefinition, _super);
    function ImportDefinition() {
        _super.apply(this, arguments);
        this.namedImports = [];
        this.starImports = [];
    }
    ImportDefinition.prototype.addNamedImport = function (structure) {
        var def = new factories_1.StructureFactory().getNamedImportPart(structure);
        this.namedImports.push(def);
        return def;
    };
    ImportDefinition.prototype.getNamedImport = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.namedImports, searchFunction);
    };
    ImportDefinition.prototype.getStarImport = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.starImports, searchFunction);
    };
    ImportDefinition.prototype.setDefaultImport = function (importName) {
        var factory = new factories_1.StructureFactory();
        this.defaultImport = factory.getDefaultImportPartByName(importName);
        return this;
    };
    ImportDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var importWriter = factories_1.MainFactory.createWriteFactory(writer).getImportWriter();
        importWriter.write(this);
        return writer.toString();
    };
    return ImportDefinition;
}(base_1.BaseDefinition));
exports.ImportDefinition = ImportDefinition;

//# sourceMappingURL=ImportDefinition.js.map
