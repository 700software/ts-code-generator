"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var ensureNotNull_1 = require("./../../ensureNotNull");
var runEnumMemberDefinitionTests_1 = require("./runEnumMemberDefinitionTests");
function runEnumDefinitionTests(definition, structure) {
    describe("enum " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            structure.members = structure.members || [];
            base_1.runBaseDefinitionTests(definition, structure);
            base_1.runNamedDefinitionTests(definition, structure);
            base_1.runExportableDefinitionTests(definition, structure);
            base_1.runAmbientableDefinitionTests(definition, structure);
            base_1.runOrderableDefinitionTests(definition, structure);
            base_1.runDocumentationedDefinitionTests(definition, structure);
            it("should " + (structure.isConst ? "be" : "not be") + " a const enum", function () {
                assert.equal(definition.isConst, structure.isConst || false);
            });
            it("should have " + structure.members.length + " member(s)", function () {
                assert.equal(definition.members.length, structure.members.length);
            });
            structure.members.forEach(function (memberTestStructure, i) {
                runEnumMemberDefinitionTests_1.runEnumMemberDefinitionTests(definition.members[i], memberTestStructure);
            });
        });
    });
}
exports.runEnumDefinitionTests = runEnumDefinitionTests;

//# sourceMappingURL=runEnumDefinitionTests.js.map
