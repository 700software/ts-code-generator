"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var general_1 = require("./../general");
var ensureNotNull_1 = require("./../../ensureNotNull");
var runInterfaceMethodDefinitionTests_1 = require("./runInterfaceMethodDefinitionTests");
var runInterfacePropertyDefinitionTests_1 = require("./runInterfacePropertyDefinitionTests");
var expression_1 = require("./../expression");
function runInterfaceDefinitionTests(definition, structure) {
    describe("interface " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            structure.methods = structure.methods || [];
            structure.newSignatures = structure.newSignatures || [];
            structure.callSignatures = structure.callSignatures || [];
            structure.indexSignatures = structure.indexSignatures || [];
            structure.properties = structure.properties || [];
            structure.extendsTypes = structure.extendsTypes || [];
            // interfaces should always be ambient
            structure.isAmbient = structure.isAmbient == null ? true : structure.isAmbient;
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runNamedDefinitionTests(definition, structure);
            base_1.runExportableDefinitionTests(definition, structure);
            base_1.runAmbientableDefinitionTests(definition, structure);
            base_1.runTypeParameteredDefinitionTests(definition, structure);
            base_1.runOrderableDefinitionTests(definition, structure);
            base_1.runDocumentationedDefinitionTests(definition, structure);
            describe("callSignatures", function () {
                it("should have the expected number of callSignatures", function () {
                    assert.equal(definition.callSignatures.length, structure.callSignatures.length);
                });
                structure.callSignatures.forEach(function (callSignatureTestStructure, i) {
                    general_1.runCallSignatureDefinitionTests(definition.callSignatures[i], callSignatureTestStructure);
                });
            });
            describe("indexSignatures", function () {
                it("should have the expected number of indexSignatures", function () {
                    assert.equal(definition.indexSignatures.length, structure.indexSignatures.length);
                });
                structure.indexSignatures.forEach(function (indexSignatureTestStructure, i) {
                    general_1.runIndexSignatureDefinitionTests(definition.indexSignatures[i], indexSignatureTestStructure);
                });
            });
            describe("methods", function () {
                it("should have the expected number of methods", function () {
                    assert.equal(definition.methods.length, structure.methods.length);
                });
                structure.methods.forEach(function (methodTestStructure, i) {
                    runInterfaceMethodDefinitionTests_1.runInterfaceMethodDefinitionTests(definition.methods[i], methodTestStructure);
                });
            });
            describe("newSignatures", function () {
                it("should have the expected number of newSignatures", function () {
                    assert.equal(definition.newSignatures.length, structure.newSignatures.length);
                });
                structure.newSignatures.forEach(function (newSignatureTestStructure, i) {
                    general_1.runCallSignatureDefinitionTests(definition.newSignatures[i], newSignatureTestStructure);
                });
            });
            describe("properties", function () {
                it("should have the expected number of properties", function () {
                    assert.equal(definition.properties.length, structure.properties.length);
                });
                structure.properties.forEach(function (propertyTestStructure, i) {
                    runInterfacePropertyDefinitionTests_1.runInterfacePropertyDefinitionTests(definition.properties[i], propertyTestStructure);
                });
            });
            describe("extends", function () {
                it("should have the expected number of extends", function () {
                    assert.equal(definition.extendsTypes.length, structure.extendsTypes.length);
                });
                structure.extendsTypes.forEach(function (extendTestStructure, i) {
                    expression_1.runTypeDefinitionTests(definition.extendsTypes[i], extendTestStructure);
                });
            });
        });
    });
}
exports.runInterfaceDefinitionTests = runInterfaceDefinitionTests;

//# sourceMappingURL=runInterfaceDefinitionTests.js.map
