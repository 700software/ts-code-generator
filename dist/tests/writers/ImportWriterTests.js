"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var mocks = require("./mocks");
describe("ImportWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ImportWriter(writer, mocks.getBaseDefinitionWriter(writer, def));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write out an import with no named, star, or default imports", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            // should ignore the named import
            chai_1.expect(writer.toString()).to.equal(prefix + "import \"moduleSpecifier\";" + suffix);
        });
        it("should write out a default import", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.setDefaultImport("defaultImport");
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "import defaultImport from \"moduleSpecifier\";" + suffix);
        });
        it("should write out a default import with a star import", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.setDefaultImport("defaultImport");
            def.starImportName = "starImport";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "import defaultImport, * as starImport from \"moduleSpecifier\";" + suffix);
        });
        it("should write out a default import with a named import", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.setDefaultImport("defaultImport");
            def.addNamedImport({ name: "namedImport" });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "import defaultImport, {namedImport} from \"moduleSpecifier\";" + suffix);
        });
        it("should write out a default import with a star import when also specifying a named import", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.setDefaultImport("defaultImport");
            def.starImportName = "starImport";
            def.addNamedImport({ name: "namedImport" });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            // should ignore the named import
            chai_1.expect(writer.toString()).to.equal(prefix + "import defaultImport, * as starImport from \"moduleSpecifier\";" + suffix);
        });
        it("should write out a star import", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.starImportName = "starImport";
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "import * as starImport from \"moduleSpecifier\";" + suffix);
        });
        it("should write out a named import without alias when the alias equals the name", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.addNamedImport({
                name: "namedImport",
                alias: "namedImport"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "import {namedImport} from \"moduleSpecifier\";" + suffix);
        });
        it("should write out a named import with alias when the alias does not equal the name", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.addNamedImport({
                name: "namedImport",
                alias: "alias"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "import {namedImport as alias} from \"moduleSpecifier\";" + suffix);
        });
        it("should write out multiple named imports", function () {
            var def = new definitions_1.ImportDefinition();
            def.moduleSpecifier = "moduleSpecifier";
            def.addNamedImport({
                name: "namedImport"
            });
            def.addNamedImport({
                name: "namedImport2"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def);
            chai_1.expect(writer.toString()).to.equal(prefix + "import {namedImport, namedImport2} from \"moduleSpecifier\";" + suffix);
        });
    });
});

//# sourceMappingURL=ImportWriterTests.js.map
