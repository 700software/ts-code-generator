"use strict";
var base_1 = require("./../base");
function runTypePropertyDefinitionTests(definition, structure) {
    describe("property " + structure.name, function () {
        base_1.runBasePropertyDefinitionTests(definition, structure);
    });
}
exports.runTypePropertyDefinitionTests = runTypePropertyDefinitionTests;

//# sourceMappingURL=runTypePropertyDefinitionTests.js.map
