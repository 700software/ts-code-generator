"use strict";
var assert = require("assert");
var base_1 = require("./../base");
var expression_1 = require("./../expression");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runIndexSignatureDefinitionTests(definition, structure) {
    ensureNotNull_1.ensureNotNull(definition, function () {
        base_1.runBaseDefinitionTests(definition, structure);
        base_1.runReturnTypedDefinitionTests(definition, structure);
        expression_1.runTypeDefinitionTests(definition.keyType, structure.keyType);
        base_1.runReadonlyableDefinitionTests(definition, structure);
        it("should have the same keyName", function () {
            assert.equal(definition.keyName, structure.keyName);
        });
    });
}
exports.runIndexSignatureDefinitionTests = runIndexSignatureDefinitionTests;

//# sourceMappingURL=runIndexSignatureDefinitionTests.js.map
