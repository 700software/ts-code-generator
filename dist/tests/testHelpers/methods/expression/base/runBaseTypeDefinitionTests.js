"use strict";
var assert = require("assert");
var ensureNotNull_1 = require("./../../../ensureNotNull");
var base_1 = require("./../../base");
var runBaseExpressionDefinitionTests_1 = require("./runBaseExpressionDefinitionTests");
function runBaseTypeDefinitionTests(definition, structure, runTypeDefinitionTests) {
    runBaseExpressionDefinitionTests_1.runBaseExpressionDefinitionTests(definition, structure);
    if (structure.arrayElementType != null) {
        describe("arrayElementType", function () {
            runTypeDefinitionTests(definition.arrayElementType, structure.arrayElementType);
        });
    }
    it("should have the same number of intersection types", function () {
        assert.equal(definition.intersectionTypes.length, (structure.intersectionTypes || []).length);
    });
    describe("intersection types", function () {
        (structure.intersectionTypes || []).forEach(function (intersectionStructure, i) {
            runTypeDefinitionTests(definition.intersectionTypes[i], intersectionStructure);
        });
    });
    it("should have the same number of union types", function () {
        assert.equal(definition.unionTypes.length, (structure.unionTypes || []).length);
    });
    describe("union types", function () {
        (structure.unionTypes || []).forEach(function (unionStructure, i) {
            runTypeDefinitionTests(definition.unionTypes[i], unionStructure);
        });
    });
    it("should have the same " + "isArrayType" + " property", function () {
        assert.equal(definition.isArrayType(), structure.isArrayType || false);
    });
    if (structure.typeArguments != null) {
        it("should have the same number of type arguments", function () {
            assert.equal(definition.typeArguments.length, structure.typeArguments.length);
        });
        structure.typeArguments.forEach(function (typeTestStructure, i) {
            describe("type argument " + i, function () {
                runTypeDefinitionTests(definition.typeArguments[i], typeTestStructure);
            });
        });
    }
    if (structure.properties != null) {
        it("should have the same number of properties", function () {
            assert.equal(definition.properties.length, structure.properties.length);
        });
        structure.properties.forEach(function (propertyTestStructure, i) {
            describe("property " + i, function () {
                ensureNotNull_1.ensureNotNull(definition.properties[i], function () {
                    base_1.runBasePropertyDefinitionTests(definition.properties[i], propertyTestStructure);
                });
            });
        });
    }
    if (structure.definitions != null) {
        it("should have the same number of definitions", function () {
            assert.equal(definition.definitions.length, structure.definitions.length);
        });
        structure.definitions.forEach(function (defTestStructure, i) {
            describe("definition " + defTestStructure.name, function () {
                ensureNotNull_1.ensureNotNull(definition.definitions[i], function () {
                    base_1.runNamedDefinitionTests(definition.definitions[i], defTestStructure);
                });
            });
        });
    }
    if (structure.allDefinitions != null) {
        it("should have the same number of getAllDefinitions()", function () {
            assert.equal(definition.getAllDefinitions().length, structure.allDefinitions.length);
        });
        structure.allDefinitions.forEach(function (defTestStructure, i) {
            var defs = definition.getAllDefinitions();
            describe("definition " + defTestStructure.name, function () {
                ensureNotNull_1.ensureNotNull(defs[i], function () {
                    base_1.runNamedDefinitionTests(defs[i], defTestStructure);
                });
            });
        });
    }
}
exports.runBaseTypeDefinitionTests = runBaseTypeDefinitionTests;

//# sourceMappingURL=runBaseTypeDefinitionTests.js.map
