"use strict";
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var DecoratableDefinition = (function () {
    function DecoratableDefinition() {
        this.decorators = [];
    }
    DecoratableDefinition.prototype.addDecorator = function (structure) {
        var def = new factories_1.StructureFactory().getDecorator(structure);
        this.decorators.push(def);
        return def;
    };
    DecoratableDefinition.prototype.getDecorator = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.decorators, nameOrSearchFunction);
    };
    return DecoratableDefinition;
}());
exports.DecoratableDefinition = DecoratableDefinition;

//# sourceMappingURL=DecoratableDefinition.js.map
