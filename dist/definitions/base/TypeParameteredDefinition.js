"use strict";
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var TypeParameteredDefinition = (function () {
    function TypeParameteredDefinition() {
        this.typeParameters = [];
    }
    TypeParameteredDefinition.prototype.addTypeParameter = function (structure) {
        var def = new factories_1.StructureFactory().getTypeParameter(structure);
        this.typeParameters.push(def);
        return def;
    };
    TypeParameteredDefinition.prototype.getTypeParameter = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.typeParameters, nameOrSearchFunction);
    };
    return TypeParameteredDefinition;
}());
exports.TypeParameteredDefinition = TypeParameteredDefinition;

//# sourceMappingURL=TypeParameteredDefinition.js.map
