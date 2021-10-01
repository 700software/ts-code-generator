"use strict";
var assert = require("assert");
function runOrderableDefinitionTests(definition, structure) {
    if (structure.order != null) {
        it("should have an order of " + structure.order, function () {
            assert.equal(definition.order, structure.order);
        });
    }
}
exports.runOrderableDefinitionTests = runOrderableDefinitionTests;

//# sourceMappingURL=runOrderableDefinitionTests.js.map
