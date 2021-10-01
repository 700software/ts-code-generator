"use strict";
var assert = require("assert");
var base_1 = require("./../base");
function runEnumMemberDefinitionTests(definition, structure) {
    describe("enum member " + structure.name, function () {
        base_1.runBaseDefinitionTests(definition, structure);
        base_1.runNamedDefinitionTests(definition, structure);
        base_1.runDocumentationedDefinitionTests(definition, structure);
        it("should have a value of " + structure.value, function () {
            assert.equal(definition.value, structure.value);
        });
    });
}
exports.runEnumMemberDefinitionTests = runEnumMemberDefinitionTests;

//# sourceMappingURL=runEnumMemberDefinitionTests.js.map
