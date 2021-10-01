"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
describe("TypeNodeDefinition", function () {
    describe("#addTypeParameter()", function () {
        var def = new definitions_1.TypeNodeDefinition();
        it("should throw an error saying that addTypeParameter is not supported", function () {
            assert.throws(function () {
                def.addTypeParameter({ name: "T" });
            });
        });
    });
    describe("#addParameter()", function () {
        var def = new definitions_1.TypeNodeDefinition();
        it("should throw an error saying that addParameter is not supported", function () {
            assert.throws(function () {
                def.addParameter({ name: "a" });
            });
        });
    });
});

//# sourceMappingURL=typeNodeDefinitionTests.js.map
