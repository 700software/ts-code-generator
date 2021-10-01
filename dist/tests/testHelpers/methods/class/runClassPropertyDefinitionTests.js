"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../../definitions");
var base_1 = require("./../base");
var base_2 = require("./base");
var ensureNotNull_1 = require("./../../ensureNotNull");
function runClassPropertyDefinitionTests(definition, structure) {
    describe("property " + structure.name, function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_2.runBaseClassPropertyDefinitionTests(definition, structure);
            base_1.runAbstractableDefinitionTests(definition, structure);
            it("should have the same kind", function () {
                assert.equal(definition.kind, structure.kind || definitions_1.ClassPropertyKind.Normal);
            });
            it("should " + (structure.hasOnWriteGetBody ? "have" : "not have") + " a writeGetBody", function () {
                assert.equal(definition.onWriteGetBody != null, structure.hasOnWriteGetBody || false);
            });
            it("should " + (structure.hasOnWriteSetBody ? "have" : "not have") + " a writeSetBody", function () {
                assert.equal(definition.onWriteSetBody != null, structure.hasOnWriteSetBody || false);
            });
        });
    });
}
exports.runClassPropertyDefinitionTests = runClassPropertyDefinitionTests;

//# sourceMappingURL=runClassPropertyDefinitionTests.js.map
