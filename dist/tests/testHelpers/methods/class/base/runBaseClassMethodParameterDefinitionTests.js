"use strict";
var base_1 = require("./../../base");
function runBaseClassMethodParameterDefinitionTests(definition, structure) {
    describe("parameter " + structure.name, function () {
        base_1.runBaseParameterDefinitionTests(definition, structure);
    });
}
exports.runBaseClassMethodParameterDefinitionTests = runBaseClassMethodParameterDefinitionTests;

//# sourceMappingURL=runBaseClassMethodParameterDefinitionTests.js.map
