"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("DecoratableDefinition", function () {
    describe("#addDecorator()", function () {
        var c = new definitions_1.ClassDefinition();
        var returnedDef = c.addDecorator({
            name: "decorator1",
            arguments: ["5", "\"test\""]
        });
        c.addDecorator({
            name: "decorator2",
            isDecoratorFactory: true
        });
        c.addDecorator({
            name: "decorator3"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, c.decorators[0]);
        });
        testHelpers_1.runDecoratableDefinitionTests(c, {
            decorators: [{
                    name: "decorator1",
                    arguments: [{
                            text: "5"
                        }, {
                            text: "\"test\""
                        }],
                    isDecoratorFactory: true
                }, {
                    name: "decorator2",
                    isDecoratorFactory: true
                }, {
                    name: "decorator3"
                }]
        });
    });
    describe("#getDecorator()", function () {
        var c = new definitions_1.ClassDefinition();
        c.addDecorator({ name: "name1" });
        c.addDecorator({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getDecorator("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getDecorator(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
});

//# sourceMappingURL=decoratableDefinitionTests.js.map
