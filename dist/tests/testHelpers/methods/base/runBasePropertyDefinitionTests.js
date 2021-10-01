"use strict";
var runBaseDefinitionTests_1 = require("./runBaseDefinitionTests");
var runNamedDefinitionTests_1 = require("./runNamedDefinitionTests");
var runOptionalDefinitionTests_1 = require("./runOptionalDefinitionTests");
var runTypedDefinitionTests_1 = require("./runTypedDefinitionTests");
var runReadonlyableDefinitionTests_1 = require("./runReadonlyableDefinitionTests");
function runBasePropertyDefinitionTests(definition, structure) {
    runBaseDefinitionTests_1.runBaseDefinitionTests(definition, structure);
    runNamedDefinitionTests_1.runNamedDefinitionTests(definition, structure);
    runOptionalDefinitionTests_1.runOptionalDefinitionTests(definition, structure);
    runTypedDefinitionTests_1.runTypedDefinitionTests(definition, structure);
    runReadonlyableDefinitionTests_1.runReadonlyableDefinitionTests(definition, structure);
}
exports.runBasePropertyDefinitionTests = runBasePropertyDefinitionTests;

//# sourceMappingURL=runBasePropertyDefinitionTests.js.map
