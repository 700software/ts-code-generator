"use strict";
var assert = require("assert");
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("EnumDefinition", function () {
    describe("#addMember()", function () {
        var e = new definitions_1.EnumDefinition();
        e.name = "MyEnum";
        var returnedDef = e.addMember({
            name: "member1",
            value: 5,
            documentationComment: "text"
        });
        e.addMember({
            name: "member2",
            value: 1
        });
        it("the returned definition should be in the array", function () {
            assert.equal(returnedDef, e.members[0]);
        });
        testHelpers_1.runEnumMemberDefinitionTests(e.members[0], {
            name: "member1",
            value: 5,
            documentationComment: "text"
        });
        testHelpers_1.runEnumMemberDefinitionTests(e.members[1], {
            name: "member2",
            value: 1
        });
    });
    describe("#getMember()", function () {
        var e = new definitions_1.EnumDefinition();
        e.addMember({ name: "name1", value: 1 });
        e.addMember({ name: "name2", value: 2 });
        testHelpers_1.runNamedDefinitionTests(e.getMember("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(e.getMember(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
});

//# sourceMappingURL=enumDefinitionTests.js.map
