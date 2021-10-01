"use strict";
var factories_1 = require("./../factories");
var DefinitionUtils = (function () {
    /* istanbul ignore next */ function DefinitionUtils() {
    }
    DefinitionUtils.getTypeDefinitionFromTextOrDefinition = function (textOrDefinition, typeArguments) {
        var structureFactory = new factories_1.StructureFactory();
        var def;
        if (typeof textOrDefinition === "string") {
            def = structureFactory.getTypeFromText(textOrDefinition);
        }
        else if (textOrDefinition == null) {
            def = structureFactory.getTypeFromText("any");
        }
        else {
            def = structureFactory.getTypeFromDefinitionAndTypeArguments(textOrDefinition, typeArguments);
        }
        return def;
    };
    DefinitionUtils.getNextOrderOfModule = function (def) {
        var maxOrder = -1;
        def.getMembers().forEach(function (m) { return maxOrder = Math.max(m.order, maxOrder); });
        return maxOrder + 1;
    };
    DefinitionUtils.isDefinitionFile = function (def) {
        var definitionFileExt = ".d.ts";
        var fileName = def.fileName || "";
        return fileName.lastIndexOf(definitionFileExt) === fileName.length - definitionFileExt.length;
    };
    DefinitionUtils.getDefinitionFromListByNameOrFunc = function (list, nameOrFunc) {
        var func = DefinitionUtils.getFuncFromNameOrFunc(nameOrFunc);
        return DefinitionUtils.getDefinitionFromListByFunc(list, func);
    };
    DefinitionUtils.getDefinitionFromListByFunc = function (list, func) {
        var def = null;
        for (var i = 0, l = list.length; i < l; i++) {
            if (func(list[i])) {
                def = list[i];
                break;
            }
        }
        return def;
    };
    DefinitionUtils.getFuncFromNameOrFunc = function (nameOrFunc) {
        var func = nameOrFunc;
        if (typeof nameOrFunc === "string") {
            func = function (d) { return d.name === nameOrFunc; };
        }
        return func;
    };
    return DefinitionUtils;
}());
exports.DefinitionUtils = DefinitionUtils;

//# sourceMappingURL=DefinitionUtils.js.map
