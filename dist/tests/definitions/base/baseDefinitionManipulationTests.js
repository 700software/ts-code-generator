"use strict";
var definitions_1 = require("./../../../definitions");
var testHelpers_1 = require("./../../testHelpers");
describe("BaseDefinition", function () {
    describe("adding onBeforeWrite and onAfterWrite", function () {
        var n = new definitions_1.NamespaceDefinition();
        n.addFunction({
            name: "name",
            onBeforeWrite: function (writer) { return writer.write(""); },
            onAfterWrite: function (writer) { return writer.write(""); }
        });
        testHelpers_1.runBaseDefinitionTests(n.functions[0], {
            hasOnAfterWrite: true,
            hasOnBeforeWrite: true
        });
    });
});

//# sourceMappingURL=baseDefinitionManipulationTests.js.map
