"use strict";
var assert = require("assert");
var namespace_1 = require("./../namespace");
var interface_1 = require("./../interface");
var function_1 = require("./../function");
var enum_1 = require("./../enum");
var class_1 = require("./../class");
var variable_1 = require("./../variable");
var general_1 = require("./../general");
var runNamedDefinitionTests_1 = require("./runNamedDefinitionTests");
var runExportableDefinitionTests_1 = require("./runExportableDefinitionTests");
function runModuledDefinitionTests(definition, structure) {
    structure.namespaces = structure.namespaces || [];
    structure.classes = structure.classes || [];
    structure.enums = structure.enums || [];
    structure.functions = structure.functions || [];
    structure.interfaces = structure.interfaces || [];
    structure.variables = structure.variables || [];
    structure.typeAliases = structure.typeAliases || [];
    structure.exports = structure.exports || [];
    describe("namespaces", function () {
        it("should have the expected number of namespaces", function () {
            assert.equal(definition.namespaces.length, structure.namespaces.length);
        });
        structure.namespaces.forEach(function (namespaceTestStructure, i) {
            namespace_1.runNamespaceDefinitionTests(definition.namespaces[i], namespaceTestStructure);
        });
    });
    describe("classes", function () {
        it("should have the expected number of classes", function () {
            assert.equal(definition.classes.length, structure.classes.length);
        });
        structure.classes.forEach(function (classTestStructure, i) {
            class_1.runClassDefinitionTests(definition.classes[i], classTestStructure);
        });
    });
    describe("interfaces", function () {
        it("should have the expected number of interfaces", function () {
            assert.equal(definition.interfaces.length, structure.interfaces.length);
        });
        structure.interfaces.forEach(function (interfaceTestStructure, i) {
            interface_1.runInterfaceDefinitionTests(definition.interfaces[i], interfaceTestStructure);
        });
    });
    describe("functions", function () {
        it("should have the expected number of functions", function () {
            assert.equal(definition.functions.length, structure.functions.length);
        });
        structure.functions.forEach(function (functionTestStructure, i) {
            function_1.runFunctionDefinitionTests(definition.functions[i], functionTestStructure);
        });
    });
    describe("enums", function () {
        it("should have the expected number of enums", function () {
            assert.equal(definition.enums.length, structure.enums.length);
        });
        structure.enums.forEach(function (enumTestStructure, i) {
            enum_1.runEnumDefinitionTests(definition.enums[i], enumTestStructure);
        });
    });
    describe("variables", function () {
        it("should have the expected number of variables", function () {
            assert.equal(definition.variables.length, structure.variables.length);
        });
        structure.variables.forEach(function (variableTestStructure, i) {
            variable_1.runVariableDefinitionTests(definition.variables[i], variableTestStructure);
        });
    });
    describe("typeAliases", function () {
        it("should have the expected number of type aliases", function () {
            assert.equal(definition.typeAliases.length, structure.typeAliases.length);
        });
        structure.typeAliases.forEach(function (typeAliasTestStructure, i) {
            general_1.runTypeAliasDefinitionTests(definition.typeAliases[i], typeAliasTestStructure);
        });
    });
    describe("exports", function () {
        var definitionExports = definition.getExports();
        it("should have the expected number of exports", function () {
            assert.equal(definitionExports.length, structure.exports.length);
        });
        structure.exports.forEach(function (exportTestStructure, i) {
            // defaults
            exportTestStructure.isExported = exportTestStructure.isExported == null ? true : exportTestStructure.isExported;
            exportTestStructure.isNamedExportOfFile = exportTestStructure.isNamedExportOfFile == null ? false : exportTestStructure.isNamedExportOfFile;
            describe("" + exportTestStructure.name, function () {
                runNamedDefinitionTests_1.runNamedDefinitionTests(definitionExports[i], exportTestStructure);
                runExportableDefinitionTests_1.runExportableDefinitionTests(definitionExports[i], exportTestStructure);
            });
        });
    });
}
exports.runModuledDefinitionTests = runModuledDefinitionTests;

//# sourceMappingURL=runModuledDefinitionTests.js.map
