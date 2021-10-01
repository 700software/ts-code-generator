"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
describe("ClassConstructorParameterScope", function () {
    describe("#toScope()", function () {
        it("should convert public to public", function () {
            assert.equal(definitions_1.ClassConstructorParameterScope.toScope(definitions_1.ClassConstructorParameterScope.Public), definitions_1.Scope.Public);
        });
        it("should convert protected to protected", function () {
            assert.equal(definitions_1.ClassConstructorParameterScope.toScope(definitions_1.ClassConstructorParameterScope.Protected), definitions_1.Scope.Protected);
        });
        it("should convert private to private", function () {
            assert.equal(definitions_1.ClassConstructorParameterScope.toScope(definitions_1.ClassConstructorParameterScope.Private), definitions_1.Scope.Private);
        });
        it("should error for none", function () {
            assert.throws(function () { return definitions_1.ClassConstructorParameterScope.toScope(definitions_1.ClassConstructorParameterScope.None); });
        });
        it("should error for unknown value", function () {
            assert.throws(function () { return definitions_1.ClassConstructorParameterScope.toScope("other"); });
        });
    });
});

//# sourceMappingURL=classConstructorParameterScopeTests.js.map
