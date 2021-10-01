"use strict";
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("ParameteredDefinition", function () {
    describe("getParameter", function () {
        var f = new definitions_1.FunctionDefinition();
        f.addParameter({ name: "name1" });
        f.addParameter({ name: "name2" });
        testHelpers_1.runNamedDefinitionTests(f.getParameter("name2"), { name: "name2" });
        testHelpers_1.runNamedDefinitionTests(f.getParameter(function (d) { return d.name === "name2"; }), { name: "name2" });
    });
});

//# sourceMappingURL=parameteredDefinitionTests.js.map
