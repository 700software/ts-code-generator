"use strict";
var assert = require("assert");
function runExportableDefinitionTests(definition, structure) {
    it("should " + (structure.isExported ? "be" : "not be") + " exported.", function () {
        assert.equal(definition.isExported, structure.isExported || false);
    });
    it("should " + (structure.isNamedExportOfFile ? "be" : "not be") + " a named export of the file", function () {
        assert.equal(definition.isNamedExportOfFile, structure.isNamedExportOfFile || false);
    });
    it("should " + (structure.isDefaultExportOfFile ? "be" : "not be") + " a default export of the file", function () {
        assert.equal(definition.isDefaultExportOfFile, structure.isDefaultExportOfFile || false);
    });
}
exports.runExportableDefinitionTests = runExportableDefinitionTests;

//# sourceMappingURL=runExportableDefinitionTests.js.map
