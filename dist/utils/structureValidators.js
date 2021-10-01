"use strict";
var ArrayUtils_1 = require("./ArrayUtils");
var StringUtils_1 = require("./StringUtils");
function validateImportStructure(structure) {
    var isStarImportSet = !StringUtils_1.StringUtils.isNullOrWhiteSpace(structure.starImportName);
    var isNamedImportSet = !ArrayUtils_1.ArrayUtils.isNullOrEmpty(structure.namedImports);
    if (isStarImportSet && isNamedImportSet)
        throw new Error("You cannot specify namedImports when specifying a starImport.");
}
exports.validateImportStructure = validateImportStructure;

//# sourceMappingURL=structureValidators.js.map
