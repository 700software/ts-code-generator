"use strict";
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var OverloadSignaturedDefinition = (function () {
    function OverloadSignaturedDefinition() {
        this.overloadSignatures = [];
    }
    OverloadSignaturedDefinition.prototype.addOverloadSignature = function (structure) {
        var def = new factories_1.StructureFactory().getCallSignature(structure);
        this.overloadSignatures.push(def);
        return def;
    };
    OverloadSignaturedDefinition.prototype.getOverloadSignature = function (searchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByFunc(this.overloadSignatures, searchFunction);
    };
    return OverloadSignaturedDefinition;
}());
exports.OverloadSignaturedDefinition = OverloadSignaturedDefinition;

//# sourceMappingURL=OverloadSignaturedDefinition.js.map
