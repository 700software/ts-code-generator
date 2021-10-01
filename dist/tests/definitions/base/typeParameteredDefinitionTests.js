"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("TypeParameteredDefinition", function () {
    describe("#addTypeParameter()", function () {
        var d = new definitions_1.ClassDefinition();
        var returnedDef = d.addTypeParameter({
            name: "T"
        });
        d.addTypeParameter({
            name: "U",
            constraintType: "string"
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, d.typeParameters[0]);
        });
        testHelpers_1.runTypeParameteredDefinitionTests(d, {
            typeParameters: [{
                    name: "T"
                }, {
                    name: "U",
                    constraintType: { text: "string" }
                }]
        });
    });
    describe("#getTypeParameter()", function () {
        var c = new definitions_1.ClassDefinition();
        c.addTypeParameter({ name: "name1" });
        c.addTypeParameter({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getTypeParameter("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(c.getTypeParameter(function (p) { return p.name === "name2"; }), { name: "name2" });
    });
});

//# sourceMappingURL=typeParameteredDefinitionTests.js.map
