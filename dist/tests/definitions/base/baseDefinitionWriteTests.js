"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
describe("BaseDefinition", function () {
    var funcDef = createFunctions_1.createFunction({ name: "myFunction" });
    describe("onBeforeWrite", function () {
        it("should write the function with the before text", function () {
            funcDef.onBeforeWrite = function (writer) {
                writer.write("/* some text */");
            };
            funcDef.onAfterWrite = null;
            var expected = "/* some text */function myFunction() {\n}\n";
            assert.equal(funcDef.write(), expected);
        });
    });
    describe("onAfterWrite", function () {
        it("should write the function with the after text", function () {
            funcDef.onBeforeWrite = null;
            funcDef.onAfterWrite = function (writer) {
                writer.write("// something");
            };
            var expected = "function myFunction() {\n}\n// something";
            assert.equal(funcDef.write(), expected);
        });
    });
});

//# sourceMappingURL=baseDefinitionWriteTests.js.map
