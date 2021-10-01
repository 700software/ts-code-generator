"use strict";
var ensureNotNull_1 = require("./../../ensureNotNull");
var base_1 = require("./../base");
var runTypeFunctionParameterDefinitionTests_1 = require("./runTypeFunctionParameterDefinitionTests");
var runTypeDefinitionTests_1 = require("./runTypeDefinitionTests");
var base_2 = require("./base");
function runTypeNodeDefinitionTests(definition, structure) {
    describe("type node", function () {
        ensureNotNull_1.ensureNotNull(definition, function () {
            base_2.runBaseTypeDefinitionTests(definition, structure, runTypeDefinitionTests_1.runTypeDefinitionTests);
            base_1.runTypeParameteredDefinitionTests(definition, structure);
            base_1.runParameteredDefinitionTests(runTypeFunctionParameterDefinitionTests_1.runTypeFunctionParameterDefinitionTests, definition, structure);
        });
    });
}
exports.runTypeNodeDefinitionTests = runTypeNodeDefinitionTests;

//# sourceMappingURL=runTypeNodeDefinitionTests.js.map
