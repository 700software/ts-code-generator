"use strict";
var assert = require("assert");
var general_1 = require("./../general");
function runOverloadSignaturedDefinitionTests(definition, structure) {
    structure.overloadSignatures = structure.overloadSignatures || [];
    it("should have the same number of overload signatures", function () {
        assert.equal(definition.overloadSignatures.length, structure.overloadSignatures.length);
    });
    describe("overloadSignatures", function () {
        structure.overloadSignatures.forEach(function (overloadSignatureStructure, i) {
            general_1.runCallSignatureDefinitionTests(definition.overloadSignatures[i], overloadSignatureStructure);
        });
    });
}
exports.runOverloadSignaturedDefinitionTests = runOverloadSignaturedDefinitionTests;

//# sourceMappingURL=runOverloadSignaturedDefinitionTests.js.map
