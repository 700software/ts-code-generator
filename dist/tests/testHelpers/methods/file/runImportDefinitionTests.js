"use strict";
var assert = require("assert");
var ensureNotNull_1 = require("./../../ensureNotNull");
var base_1 = require("./../base");
var runDefaultImportPartDefinitionTests_1 = require("./runDefaultImportPartDefinitionTests");
var runNamedImportPartDefinitionTests_1 = require("./runNamedImportPartDefinitionTests");
var runStarImportPartDefinitionTests_1 = require("./runStarImportPartDefinitionTests");
function runImportDefinitionTests(definition, structure) {
    describe("import " + structure.moduleSpecifier, function () {
        structure.namedImports = structure.namedImports || [];
        structure.starImports = structure.starImports || [];
        structure.fileName = "";
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseDefinitionTests(definition, structure);
            it("should have module specifier text " + structure.moduleSpecifier, function () {
                assert.equal(definition.moduleSpecifier, structure.moduleSpecifier);
            });
            it("should have file name that ends with " + structure.fileName, function () {
                var defFileName = definition.fileName || "";
                assert.equal(defFileName.substr(defFileName.length - structure.fileName.length), structure.fileName);
            });
            it("should have star import name " + structure.starImportName, function () {
                assert.equal(definition.starImportName, structure.starImportName);
            });
            describe("default import", function () {
                runDefaultImportPartDefinitionTests_1.runDefaultImportPartDefinitionTests(definition.defaultImport, structure.defaultImport);
            });
            describe("named imports", function () {
                it("should have the same number of named imports", function () {
                    assert.equal(definition.namedImports.length, structure.namedImports.length);
                });
                structure.namedImports.forEach(function (namedImportStructure, i) {
                    runNamedImportPartDefinitionTests_1.runNamedImportPartDefinitionTests(definition.namedImports[i], namedImportStructure);
                });
            });
            describe("star imports", function () {
                it("should have the same number of star imports", function () {
                    assert.equal(definition.starImports.length, structure.starImports.length);
                });
                structure.starImports.forEach(function (starImportStructure, i) {
                    runStarImportPartDefinitionTests_1.runStarImportPartDefinitionTests(definition.starImports[i], starImportStructure);
                });
            });
        });
    });
}
exports.runImportDefinitionTests = runImportDefinitionTests;

//# sourceMappingURL=runImportDefinitionTests.js.map
