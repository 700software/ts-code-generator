"use strict";
var assert = require("assert");
var chai_1 = require("chai");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("BaseFunctionDefinition", function () {
    describe("#addCallSignature()", function () {
        var f = new definitions_1.FunctionDefinition();
        var returnedDef = f.addOverloadSignature({
            returnType: "string",
            typeParameters: [{ name: "T" }],
            parameters: [{ name: "myParam" }]
        });
        f.addOverloadSignature({
            returnType: "number"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, f.overloadSignatures[0]);
        });
        testHelpers_1.runCallSignatureDefinitionTests(f.overloadSignatures[0], {
            returnType: { text: "string" },
            typeParameters: [{ name: "T" }],
            parameters: [{ name: "myParam" }],
            minArgumentCount: 1
        });
        testHelpers_1.runCallSignatureDefinitionTests(f.overloadSignatures[1], {
            returnType: { text: "number" }
        });
    });
    describe("#getCallSignature()", function () {
        var f = new definitions_1.FunctionDefinition();
        f.addOverloadSignature({ returnType: "string" });
        f.addOverloadSignature({ returnType: "number" });
        it("should match the right definition", function () {
            assert.equal(f.getOverloadSignature(function (s) { return s.returnType.text === "number"; }), f.overloadSignatures[1]);
        });
    });
    describe("#" + "setUserDefinedTypeGuard", function () {
        it("should create a user defined type guard with a parameter name", function () {
            var f = new definitions_1.FunctionDefinition();
            f.setUserDefinedTypeGuard({
                parameterName: "paramname",
                type: "BaseDefinition"
            });
            chai_1.expect(f.userDefinedTypeGuard.parameterName).to.equal("paramname");
            chai_1.expect(f.userDefinedTypeGuard.type.text).to.equal("BaseDefinition");
        });
        it("should create a user defined type guard without a parameter name that has the this type", function () {
            var f = new definitions_1.FunctionDefinition();
            f.setUserDefinedTypeGuard({
                type: "BaseDefinition"
            });
            chai_1.expect(f.userDefinedTypeGuard.parameterName).to.equal("this");
            chai_1.expect(f.userDefinedTypeGuard.type.text).to.equal("BaseDefinition");
        });
    });
});

//# sourceMappingURL=baseFunctionDefinitionTests.js.map
