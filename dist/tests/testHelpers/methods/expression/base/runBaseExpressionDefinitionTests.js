"use strict";
var assert = require("assert");
var base_1 = require("./../../base");
function runBaseExpressionDefinitionTests(definition, structure) {
    base_1.runBaseDefinitionTests(definition, structure);
    it("should have the text " + structure.text, function () {
        assert.equal(definition.text, structure.text);
    });
}
exports.runBaseExpressionDefinitionTests = runBaseExpressionDefinitionTests;

//# sourceMappingURL=runBaseExpressionDefinitionTests.js.map
