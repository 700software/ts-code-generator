"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var createFunctions_1 = require("./../../../createFunctions");
var testHelpers_1 = require("./../../testHelpers");
describe("FileDefinition", function () {
    describe("#addImport()", function () {
        describe("multiple imports", function () {
            var f = new definitions_1.FileDefinition();
            var returnedDef = f.addImport({
                moduleSpecifier: "./test1",
                starImportName: "myStarImport1"
            });
            f.addImport({
                moduleSpecifier: "./test2",
                defaultImportName: "defaultImport1"
            });
            f.addImport({
                moduleSpecifier: "./test3",
                namedImports: [{
                        name: "namedImport1"
                    }]
            });
            f.addImport({
                moduleSpecifier: "./test4",
                namedImports: [{
                        name: "default",
                        alias: "namedImport3"
                    }],
                defaultImportName: "defaultImport2"
            });
            f.addImport({
                moduleSpecifier: "./test5"
            });
            it("the returned definition should be in the array", function () {
                assert.equal(returnedDef, f.imports[0]);
            });
            describe("import star", function () {
                testHelpers_1.runImportDefinitionTests(f.imports[0], {
                    moduleSpecifier: "./test1",
                    starImportName: "myStarImport1"
                });
            });
            describe("default import", function () {
                testHelpers_1.runImportDefinitionTests(f.imports[1], {
                    moduleSpecifier: "./test2",
                    defaultImport: { name: "defaultImport1" }
                });
            });
            describe("named import", function () {
                testHelpers_1.runImportDefinitionTests(f.imports[2], {
                    moduleSpecifier: "./test3",
                    namedImports: [{
                            name: "namedImport1"
                        }]
                });
            });
            describe("named import with default import", function () {
                testHelpers_1.runImportDefinitionTests(f.imports[3], {
                    moduleSpecifier: "./test4",
                    defaultImport: { name: "defaultImport2" },
                    namedImports: [{
                            name: "default",
                            alias: "namedImport3"
                        }]
                });
            });
            describe("only module specifier", function () {
                testHelpers_1.runImportDefinitionTests(f.imports[4], {
                    moduleSpecifier: "./test5"
                });
            });
        });
        it("should error when a star import and named import are specified", function () {
            var f = new definitions_1.FileDefinition();
            assert.throws(function () {
                f.addImport({
                    moduleSpecifier: "./test1",
                    starImportName: "test",
                    namedImports: [{ name: "test2" }]
                });
            }, /specify namedImports/);
        });
    });
    describe("#addReExport()", function () {
        var f = new definitions_1.FileDefinition();
        var returnedDef = f.addReExport({
            moduleSpecifier: "./test1"
        });
        f.addReExport({
            moduleSpecifier: "./test2",
            namedExports: [
                { name: "namedImport1", alias: "aliasName" },
                { name: "namedImport2" }
            ]
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, f.reExports[0]);
        });
        describe("import star", function () {
            testHelpers_1.runReExportDefinitionTests(f.reExports[0], {
                moduleSpecifier: "./test1"
            });
        });
        describe("named import", function () {
            testHelpers_1.runReExportDefinitionTests(f.reExports[1], {
                moduleSpecifier: "./test2",
                namedExports: [{
                        name: "namedImport1",
                        alias: "aliasName"
                    }, {
                        name: "namedImport2"
                    }]
            });
        });
    });
    describe("#getImport()", function () {
        var f = new definitions_1.FileDefinition();
        f.addImport({
            moduleSpecifier: "./test1",
            starImportName: "myStarImport1"
        });
        f.addImport({
            moduleSpecifier: "./test2",
            starImportName: "myStarImport2"
        });
        it("should have the correct module specifier", function () {
            assert.equal(f.getImport(function (i) { return i.moduleSpecifier === "./test2"; }).moduleSpecifier, "./test2");
        });
    });
    describe("#getReExport()", function () {
        var f = new definitions_1.FileDefinition();
        f.addReExport({
            moduleSpecifier: "./test1"
        });
        f.addReExport({
            moduleSpecifier: "./test2"
        });
        it("should have the correct module specifier", function () {
            assert.equal(f.getReExport(function (i) { return i.moduleSpecifier === "./test2"; }).moduleSpecifier, "./test2");
        });
    });
    describe("#getModuleSpecifierToFile()", function () {
        it("should handle windows file paths", function () {
            var f1 = createFunctions_1.createFile({ fileName: "C:\\asdf\\asdf.ts" });
            var f2 = createFunctions_1.createFile({ fileName: "C:\\test\\test.ts" });
            assert.equal(f1.getModuleSpecifierToFile(f2), "./../test/test");
        });
        it("should get the relative paths between two files when going up then down a directory", function () {
            var f1 = createFunctions_1.createFile({ fileName: "/asdf/asdf.ts" });
            var f2 = createFunctions_1.createFile({ fileName: "/test/test.ts" });
            assert.equal(f1.getModuleSpecifierToFile(f2), "./../test/test");
        });
        it("should get the relative paths between two files when going up directories", function () {
            var f1 = createFunctions_1.createFile({ fileName: "/asdf1/asdf2/asdf.ts" });
            var f2 = createFunctions_1.createFile({ fileName: "/test.ts" });
            assert.equal(f1.getModuleSpecifierToFile(f2), "./../../test");
        });
        it("should get the relative paths between two files when going into directories", function () {
            var f1 = createFunctions_1.createFile({ fileName: "/asdf.ts" });
            var f2 = createFunctions_1.createFile({ fileName: "/test1/test2/test3.ts" });
            assert.equal(f1.getModuleSpecifierToFile(f2), "./test1/test2/test3");
        });
        it("should get the relative paths between two files in the same directory", function () {
            var f1 = createFunctions_1.createFile({ fileName: "/directory/asdf.ts" });
            var f2 = createFunctions_1.createFile({ fileName: "/directory/test.ts" });
            assert.equal(f1.getModuleSpecifierToFile(f2), "./test");
        });
        it("should throw an error if the first file has an empty file name", function () {
            var f1 = createFunctions_1.createFile({ fileName: "" });
            var f2 = createFunctions_1.createFile({ fileName: "/directory/test.ts" });
            assert.throws(function () { return f1.getModuleSpecifierToFile(f2); });
        });
        it("should throw an error if the second file has an empty file name", function () {
            var f1 = createFunctions_1.createFile({ fileName: "/directory/asdf.ts" });
            var f2 = createFunctions_1.createFile({ fileName: "" });
            assert.throws(function () { return f1.getModuleSpecifierToFile(f2); });
        });
        it("should throw an error if the first file has a null file name", function () {
            var f1 = createFunctions_1.createFile({ fileName: null });
            var f2 = createFunctions_1.createFile({ fileName: "/directory/test.ts" });
            assert.throws(function () { return f1.getModuleSpecifierToFile(f2); });
        });
        it("should throw an error if the second file has a null file name", function () {
            var f1 = createFunctions_1.createFile({ fileName: "/directory/asdf.ts" });
            var f2 = createFunctions_1.createFile({ fileName: null });
            assert.throws(function () { return f1.getModuleSpecifierToFile(f2); });
        });
    });
});

//# sourceMappingURL=fileDefinitionTests.js.map
