"use strict";
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("IndexSignatureDefinition", function () {
    describe("setKeyType", function () {
        var indexSignature = new definitions_1.IndexSignatureDefinition();
        indexSignature.setKeyType("number");
        testHelpers_1.runTypeDefinitionTests(indexSignature.keyType, { text: "number" });
    });
});

//# sourceMappingURL=indexSignatureDefinitionTests.js.map
