"use strict";
var utils_1 = require("./../../utils");
var ParameteredDefinition = (function () {
    function ParameteredDefinition() {
        this.parameters = [];
    }
    ParameteredDefinition.prototype.getParameter = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.parameters, nameOrSearchFunction);
    };
    return ParameteredDefinition;
}());
exports.ParameteredDefinition = ParameteredDefinition;

//# sourceMappingURL=ParameteredDefinition.js.map
