"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("ReExportDefinition", function () {
    describe("#addNamedExport()", function () {
        var def = new definitions_1.ReExportDefinition();
        var returnedDef = def.addNamedExport({
            name: "name"
        });
        def.addNamedExport({
            name: "name",
            alias: "aliasName"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, def.namedExports[0]);
        });
        testHelpers_1.runNamedImportPartDefinitionTests(def.namedExports[0], { name: "name" });
        testHelpers_1.runNamedImportPartDefinitionTests(def.namedExports[1], { name: "name", alias: "aliasName" });
    });
    describe("#getNamedExport()", function () {
        var def = new definitions_1.ReExportDefinition();
        def.addNamedExport({
            name: "name",
            alias: "someAlias"
        });
        def.addNamedExport({
            name: "name2"
        });
        it("should get the correct named import", function () {
            assert.equal(def.getNamedExport(function (n) { return n.name === "name2"; }), def.namedExports[1]);
        });
    });
    describe("#getStarExport()", function () {
        var importDef = new definitions_1.ReExportDefinition();
        importDef.starExports.push({ name: "name1" });
        importDef.starExports.push({ name: "name2" });
        it("should get the correct star import", function () {
            assert.equal(importDef.getStarExport(function (n) { return n.name === "name2"; }), importDef.starExports[1]);
        });
    });
});

//# sourceMappingURL=reExportDefinitionTests.js.map
