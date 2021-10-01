"use strict";
var assert = require("assert");
var ensureNotNull_1 = require("./../../ensureNotNull");
var general_1 = require("./../general");
var base_1 = require("./base");
var runTypeNodeDefinitionTests_1 = require("./runTypeNodeDefinitionTests");
function runTypeDefinitionTests(definition, structure) {
    describe("type", function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_1.runBaseTypeDefinitionTests(definition, structure, runTypeDefinitionTests);
            if (structure.node != null) {
                describe("node", function () {
                    runTypeNodeDefinitionTests_1.runTypeNodeDefinitionTests(definition.node, structure.node);
                });
            }
            // only bother checking these if they are explictly asked to be checked for
            if (structure.callSignatures != null) {
                it("should have the same number of call signatures", function () {
                    assert.equal(definition.callSignatures.length, structure.callSignatures.length);
                });
                structure.callSignatures.forEach(function (callSignatureTestStructure, i) {
                    describe("call signature " + i, function () {
                        ensureNotNull_1.ensureNotNull(definition.callSignatures[i], function () {
                            general_1.runCallSignatureDefinitionTests(definition.callSignatures[i], callSignatureTestStructure);
                        });
                    });
                });
            }
        });
    });
}
exports.runTypeDefinitionTests = runTypeDefinitionTests;

//# sourceMappingURL=runTypeDefinitionTests.js.map
