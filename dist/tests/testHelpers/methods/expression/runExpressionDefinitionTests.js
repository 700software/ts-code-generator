"use strict";
var assert = require("assert");
var base_1 = require("./base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runExpressionDefinitionTests(definition, structure) {
    if (structure == null) {
        it("should be null", function () {
            assert.equal(definition, null);
        });
    }
    else {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseExpressionDefinitionTests(definition, structure);
        });
    }
}
exports.runExpressionDefinitionTests = runExpressionDefinitionTests;

//# sourceMappingURL=runExpressionDefinitionTests.js.map
