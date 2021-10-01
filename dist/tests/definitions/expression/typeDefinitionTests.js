"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
describe("TypeDefinition", function () {
    describe("#getCallSignature()", function () {
        var def = new definitions_1.TypeDefinition();
        def.callSignatures.push({ parameters: [] }, { parameters: [{}] });
        it("should get the correct call signature", function () {
            assert.equal(def.getCallSignature(function (c) { return c.parameters.length === 1; }), def.callSignatures[1]);
        });
    });
});

//# sourceMappingURL=typeDefinitionTests.js.map
