"use strict";
var assert = require("assert");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runUserDefinedTypeGuardTests(definition, structure) {
    if (structure == null) {
        it("should not have a user defined type guard", function () {
            assert.equal(definition == null, true);
        });
    }
    else {
        describe("user defined type guard", function () {
            ensureNotNull_1.ensureNotNull(definition, function () {
                it("should have the correct parameter name", function () {
                    assert.equal(definition.parameterName || "", structure.parameterName || "");
                });
                it("should have the correct type", function () {
                    assert.equal(definition.type.text, structure.type);
                });
            });
        });
    }
}
exports.runUserDefinedTypeGuardTests = runUserDefinedTypeGuardTests;

//# sourceMappingURL=runUserDefinedTypeGuardTests.js.map
