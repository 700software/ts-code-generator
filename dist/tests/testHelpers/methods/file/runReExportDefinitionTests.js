"use strict";
var assert = require("assert");
var ensureNotNull_1 = require("./../../ensureNotNull");
var base_1 = require("./../base");
var runStarImportPartDefinitionTests_1 = require("./runStarImportPartDefinitionTests");
var runNamedImportPartDefinitionTests_1 = require("./runNamedImportPartDefinitionTests");
function runReExportDefinitionTests(definition, structure) {
    describe("re-export " + structure.moduleSpecifier, function () {
        structure.namedExports = structure.namedExports || [];
        structure.starExports = structure.starExports || [];
        structure.fileName = "";
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseDefinitionTests(definition, structure);
            it("should have a module specifier text of " + structure.moduleSpecifier, function () {
                assert.equal(definition.moduleSpecifier, structure.moduleSpecifier);
            });
            it("should have a file name that ends with " + structure.fileName, function () {
                var defFileName = definition.fileName || "";
                assert.equal(defFileName.substr(defFileName.length - structure.fileName.length), structure.fileName);
            });
            describe("star exports", function () {
                it("should have the expected number of star exports", function () {
                    assert.equal(definition.starExports.length, structure.starExports.length);
                });
                structure.starExports.forEach(function (exportPartStructure, i) {
                    runStarImportPartDefinitionTests_1.runStarImportPartDefinitionTests(definition.starExports[i], exportPartStructure);
                });
            });
            describe("named exports", function () {
                it("should have the expected number of named exports", function () {
                    assert.equal(definition.namedExports.length, structure.namedExports.length);
                });
                structure.namedExports.forEach(function (exportPartStructure, i) {
                    runNamedImportPartDefinitionTests_1.runNamedImportPartDefinitionTests(definition.namedExports[i], exportPartStructure);
                });
            });
        });
    });
}
exports.runReExportDefinitionTests = runReExportDefinitionTests;

//# sourceMappingURL=runReExportDefinitionTests.js.map
