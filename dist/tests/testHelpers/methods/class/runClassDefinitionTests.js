"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var runClassPropertyDefinitionTests_1 = require("./runClassPropertyDefinitionTests");
var runClassMethodDefinitionTests_1 = require("./runClassMethodDefinitionTests");
var runClassStaticPropertyDefinitionTests_1 = require("./runClassStaticPropertyDefinitionTests");
var runClassStaticMethodDefinitionTests_1 = require("./runClassStaticMethodDefinitionTests");
var runClassConstructorDefinitionTests_1 = require("./runClassConstructorDefinitionTests");
var expression_1 = require("./../expression");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassDefinitionTests(definition, structure) {
    describe("class " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            structure.methods = structure.methods || [];
            structure.properties = structure.properties || [];
            structure.staticMethods = structure.staticMethods || [];
            structure.staticProperties = structure.staticProperties || [];
            structure.extendsTypes = structure.extendsTypes || [];
            structure.implementsTypes = structure.implementsTypes || [];
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runNamedDefinitionTests(definition, structure);
            base_1.runExportableDefinitionTests(definition, structure);
            base_1.runDecoratableDefinitionTests(definition, structure);
            base_1.runTypeParameteredDefinitionTests(definition, structure);
            base_1.runAbstractableDefinitionTests(definition, structure);
            base_1.runAmbientableDefinitionTests(definition, structure);
            runClassConstructorDefinitionTests_1.runClassConstructorDefinitionTests(definition.constructorDef, structure.constructorDef);
            base_1.runOrderableDefinitionTests(definition, structure);
            base_1.runDocumentationedDefinitionTests(definition, structure);
            it("should " + (structure.isAbstract ? "be" : "not be") + " abstract.", function () {
                assert.equal(definition.isAbstract, structure.isAbstract || false);
            });
            describe("methods", function () {
                it("should have the expected number of methods", function () {
                    assert.equal(definition.methods.length, structure.methods.length);
                });
                structure.methods.forEach(function (methodTestStructure, i) {
                    runClassMethodDefinitionTests_1.runClassMethodDefinitionTests(definition.methods[i], methodTestStructure);
                });
            });
            describe("properties", function () {
                it("should have the expected number of properties", function () {
                    assert.equal(definition.properties.length, structure.properties.length);
                });
                structure.properties.forEach(function (propertyTestStructure, i) {
                    runClassPropertyDefinitionTests_1.runClassPropertyDefinitionTests(definition.properties[i], propertyTestStructure);
                });
            });
            describe("staticMethods", function () {
                it("should have the expected number of staticMethods", function () {
                    assert.equal(definition.staticMethods.length, structure.staticMethods.length);
                });
                structure.staticMethods.forEach(function (methodTestStructure, i) {
                    runClassStaticMethodDefinitionTests_1.runClassStaticMethodDefinitionTests(definition.staticMethods[i], methodTestStructure);
                });
            });
            describe("staticProperties", function () {
                it("should have the expected number of staticProperties", function () {
                    assert.equal(definition.staticProperties.length, structure.staticProperties.length);
                });
                structure.staticProperties.forEach(function (propertyTestStructure, i) {
                    runClassStaticPropertyDefinitionTests_1.runClassStaticPropertyDefinitionTests(definition.staticProperties[i], propertyTestStructure);
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
            describe("implements", function () {
                it("should have the expected number of implements", function () {
                    assert.equal(definition.implementsTypes.length, structure.implementsTypes.length);
                });
                structure.implementsTypes.forEach(function (implementTestStructure, i) {
                    expression_1.runTypeDefinitionTests(definition.implementsTypes[i], implementTestStructure);
                });
            });
        });
    });
}
exports.runClassDefinitionTests = runClassDefinitionTests;

//# sourceMappingURL=runClassDefinitionTests.js.map
