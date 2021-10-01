"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
var definitions_1 = require("./../../../definitions");
describe("VariableDefinition", function () {
    var myFile = createFunctions_1.createFile({
        variables: [{
                name: "myImplicitAny",
                declarationType: definitions_1.VariableDeclarationType.Var,
                documentationComment: "/**\n * Some description\n */"
            }, {
                name: "myExplicitTypeVar",
                declarationType: definitions_1.VariableDeclarationType.Var,
                type: "number"
            }, {
                name: "myImplicitTypeVar",
                declarationType: definitions_1.VariableDeclarationType.Var,
                defaultExpression: "\"my string\""
            }, {
                name: "myLet",
                declarationType: definitions_1.VariableDeclarationType.Let,
                type: "string"
            }, {
                name: "myConst",
                declarationType: definitions_1.VariableDeclarationType.Const,
                type: "number"
            }]
    });
    describe("write()", function () {
        describe("myImplicitAny", function () {
            it("should contain everything written out", function () {
                var expected = "/**\n * Some description\n */\nvar myImplicitAny: any;";
                assert.equal(myFile.variables[0].write(), expected);
            });
        });
        describe("myExplicitTypeVar", function () {
            it("should contain everything written out", function () {
                var expected = "var myExplicitTypeVar: number;";
                assert.equal(myFile.variables[1].write(), expected);
            });
        });
        describe("myImplicitTypeVar", function () {
            it("should write out the expression without the type when a default expression exists", function () {
                var expected = "var myImplicitTypeVar = \"my string\";";
                assert.equal(myFile.variables[2].write(), expected);
            });
        });
        describe("myLet", function () {
            it("should contain everything written out", function () {
                var expected = "let myLet: string;";
                assert.equal(myFile.variables[3].write(), expected);
            });
        });
        describe("myConst", function () {
            it("should contain everything written out", function () {
                var expected = "const myConst: number;";
                assert.equal(myFile.variables[4].write(), expected);
            });
        });
    });
});

//# sourceMappingURL=variableWriteTests.js.map
