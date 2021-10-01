"use strict";
var assert = require("assert");
var runImportDefinitionTests_1 = require("./runImportDefinitionTests");
var runReExportDefinitionTests_1 = require("./runReExportDefinitionTests");
var base_1 = require("./../base");
var ensureNotNull_1 = require("./../../ensureNotNull");
var expression_1 = require("./../expression");
function runFileDefinitionTests(definition, structure) {
    structure.imports = structure.imports || [];
    structure.reExports = structure.reExports || [];
    structure.exports = structure.exports || [];
    // all exports of a file will be named
    structure.exports.forEach(function (exportTestStructure) {
        exportTestStructure.isNamedExportOfFile = exportTestStructure.isNamedExportOfFile == null ? true : exportTestStructure.isNamedExportOfFile;
    });
    base_1.runBaseDefinitionTests(definition, structure);
    base_1.runModuledDefinitionTests(definition, structure);
    describe("imports", function () {
        it("should have the expected number of imports", function () {
            assert.equal(definition.imports.length, structure.imports.length);
        });
        structure.imports.forEach(function (importTestStructure, i) {
            runImportDefinitionTests_1.runImportDefinitionTests(definition.imports[i], importTestStructure);
        });
    });
    describe("reExports", function () {
        it("should have the expected number of reExports", function () {
            assert.equal(definition.reExports.length, structure.reExports.length);
        });
        structure.reExports.forEach(function (reExportTestStructure, i) {
            runReExportDefinitionTests_1.runReExportDefinitionTests(definition.reExports[i], reExportTestStructure);
        });
    });
    describe("defaultExportExpression", function () {
        if (structure.defaultExportExpression == null) {
            it("should not have a default export expression", function () {
                assert.equal(definition.defaultExportExpression, null);
            });
        }
        else {
            ensureNotNull_1.ensureNotNull(definition.defaultExportExpression, function () {
                expression_1.runExpressionDefinitionTests(definition.defaultExportExpression, structure.defaultExportExpression);
            });
        }
    });
}
exports.runFileDefinitionTests = runFileDefinitionTests;

//# sourceMappingURL=runFileDefinitionTests.js.map
