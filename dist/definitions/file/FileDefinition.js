"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path = require("path"); // todo: remove dependency on path
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var WriteFlags_1 = require("./../../WriteFlags");
var writeDefinition_1 = require("./../../writeDefinition");
var base_1 = require("./../base");
var FileDefinition = (function (_super) {
    __extends(FileDefinition, _super);
    function FileDefinition() {
        _super.apply(this, arguments);
        this.imports = [];
        this.reExports = [];
    }
    FileDefinition.prototype.addImport = function (structure) {
        utils_1.validateImportStructure(structure);
        var def = new factories_1.StructureFactory().getImport(structure);
        this.imports.push(def);
        return def;
    };
    FileDefinition.prototype.addReExport = function (structure) {
        var def = new factories_1.StructureFactory().getReExport(structure);
        this.reExports.push(def);
        return def;
    };
    FileDefinition.prototype.getModuleSpecifierToFile = function (file) {
        if (utils_1.StringUtils.isNullOrWhiteSpace(file.fileName) || utils_1.StringUtils.isNullOrWhiteSpace(this.fileName)) {
            throw new Error("The files being compared must both have a fileName.");
        }
        var fileNameFrom = utils_1.FileUtils.standardizeSlashes(this.fileName);
        var fileNameTo = utils_1.FileUtils.standardizeSlashes(file.fileName);
        var relativePath = path.relative(path.dirname(fileNameFrom), path.dirname(fileNameTo));
        var fullPath = path.join(relativePath, path.basename(fileNameTo));
        var fullPathWithoutExtension = fullPath.replace(/\.[^/.]+$/, "");
        return "./" + utils_1.FileUtils.standardizeSlashes(fullPathWithoutExtension);
    };
    FileDefinition.prototype.getImport = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.imports, searchFunction);
    };
    FileDefinition.prototype.getReExport = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.reExports, searchFunction);
    };
    FileDefinition.prototype.getExports = function () {
        var exports = base_1.ModuledDefinition.prototype.getExports.call(this);
        this.reExports.forEach(function (reExport) {
            reExport.getExports().forEach(function (def) {
                if (exports.indexOf(def) === -1) {
                    exports.push(def);
                }
            });
        });
        return exports;
    };
    FileDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var fileWriter = factories_1.MainFactory.createWriteFactory(writer).getFileWriter();
        fileWriter.write(this, WriteFlags_1.WriteFlags.Default);
        return writer.toString();
    };
    FileDefinition.prototype.writeExportsAsDefinitionFile = function (options) {
        console.warn("writeExportsAsDefinitionFile(...) is not supported. It has not been tested.");
        var writer = factories_1.MainFactory.createWriter(options.writeOptions);
        if (options && options.imports) {
            var structureFactory_1 = new factories_1.StructureFactory();
            var importWriter_1 = factories_1.MainFactory.createWriteFactory(writer).getImportWriter();
            options.imports.forEach(function (importStructure) {
                var importDef = structureFactory_1.getImport(importStructure);
                importWriter_1.write(importDef);
            });
            writer.newLine();
        }
        var writeFlags = WriteFlags_1.WriteFlags.HideFunctionBodies | WriteFlags_1.WriteFlags.HideExpressions | WriteFlags_1.WriteFlags.HidePrivateMembers | WriteFlags_1.WriteFlags.HideProtectedMembers |
            WriteFlags_1.WriteFlags.HideFunctionImplementations;
        this.getExports().forEach(function (exportDef) {
            writeDefinition_1.writeDefinition(exportDef, writer, writeFlags);
            writer.newLine();
        });
        return writer.toString();
    };
    return FileDefinition;
}(base_1.BaseDefinition));
exports.FileDefinition = FileDefinition;
utils_1.applyMixins(FileDefinition, base_1.BaseDefinition, [base_1.ModuledDefinition]);

//# sourceMappingURL=FileDefinition.js.map
