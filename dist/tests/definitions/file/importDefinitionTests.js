"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("ImportDefinition", function () {
    describe("#setDefaultImport()", function () {
        var importDef = new definitions_1.ImportDefinition();
        importDef.setDefaultImport("defaultImportName");
        testHelpers_1.runDefaultImportPartDefinitionTests(importDef.defaultImport, { name: "defaultImportName" });
    });
    describe("#addNamedImport()", function () {
        var importDef = new definitions_1.ImportDefinition();
        var returnedDef = importDef.addNamedImport({
            name: "name"
        });
        importDef.addNamedImport({
            name: "name",
            alias: "aliasName"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, importDef.namedImports[0]);
        });
        testHelpers_1.runNamedImportPartDefinitionTests(importDef.namedImports[0], { name: "name" });
        testHelpers_1.runNamedImportPartDefinitionTests(importDef.namedImports[1], { name: "name", alias: "aliasName" });
    });
    describe("#getNamedImport()", function () {
        var importDef = new definitions_1.ImportDefinition();
        importDef.addNamedImport({
            name: "name",
            alias: "someAlias"
        });
        importDef.addNamedImport({
            name: "name2"
        });
        it("should get the correct named import", function () {
            assert.equal(importDef.getNamedImport(function (n) { return n.name === "name2"; }), importDef.namedImports[1]);
        });
    });
    describe("#getStarImport()", function () {
        var importDef = new definitions_1.ImportDefinition();
        importDef.starImports.push({ name: "name1" });
        importDef.starImports.push({ name: "name2" });
        it("should get the correct star import", function () {
            assert.equal(importDef.getStarImport(function (n) { return n.name === "name2"; }), importDef.starImports[1]);
        });
    });
});

//# sourceMappingURL=importDefinitionTests.js.map
