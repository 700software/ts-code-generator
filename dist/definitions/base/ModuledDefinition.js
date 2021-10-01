"use strict";
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var ModuledDefinition = (function () {
    function ModuledDefinition() {
        this.namespaces = [];
        this.classes = [];
        this.interfaces = [];
        this.enums = [];
        this.functions = [];
        this.variables = [];
        this.typeAliases = [];
    }
    // need to pass these in after initializing in order to prevent circular dependencies
    ModuledDefinition.initialize = function (instanceContainer) {
        this.instanceContainer = instanceContainer;
    };
    ModuledDefinition.prototype.addClass = function (structure) {
        var def = new factories_1.StructureFactory().getClass(structure);
        def.order = utils_1.DefinitionUtils.getNextOrderOfModule(this);
        this.classes.push(def);
        return def;
    };
    ModuledDefinition.prototype.addEnum = function (structure) {
        var def = new factories_1.StructureFactory().getEnum(structure);
        def.order = utils_1.DefinitionUtils.getNextOrderOfModule(this);
        this.enums.push(def);
        return def;
    };
    ModuledDefinition.prototype.addFunction = function (structure) {
        var def = new factories_1.StructureFactory().getFunction(structure);
        def.order = utils_1.DefinitionUtils.getNextOrderOfModule(this);
        this.functions.push(def);
        return def;
    };
    ModuledDefinition.prototype.addInterface = function (structure) {
        var def = new factories_1.StructureFactory().getInterface(structure);
        def.order = utils_1.DefinitionUtils.getNextOrderOfModule(this);
        this.interfaces.push(def);
        return def;
    };
    ModuledDefinition.prototype.addNamespace = function (structure) {
        var def = new factories_1.StructureFactory().getNamespace(structure);
        def.order = utils_1.DefinitionUtils.getNextOrderOfModule(this);
        this.namespaces.push(def);
        return def;
    };
    ModuledDefinition.prototype.addTypeAlias = function (structure) {
        var def = new factories_1.StructureFactory().getTypeAlias(structure);
        def.order = utils_1.DefinitionUtils.getNextOrderOfModule(this);
        this.typeAliases.push(def);
        return def;
    };
    ModuledDefinition.prototype.addVariable = function (structure) {
        var def = new factories_1.StructureFactory().getVariable(structure);
        def.order = utils_1.DefinitionUtils.getNextOrderOfModule(this);
        this.variables.push(def);
        return def;
    };
    ModuledDefinition.prototype.getClass = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.classes, nameOrSearchFunction);
    };
    ModuledDefinition.prototype.getEnum = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.enums, nameOrSearchFunction);
    };
    ModuledDefinition.prototype.getFunction = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.functions, nameOrSearchFunction);
    };
    ModuledDefinition.prototype.getInterface = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.interfaces, nameOrSearchFunction);
    };
    ModuledDefinition.prototype.getNamespace = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.namespaces, nameOrSearchFunction);
    };
    ModuledDefinition.prototype.getTypeAlias = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.typeAliases, nameOrSearchFunction);
    };
    ModuledDefinition.prototype.getVariable = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.variables, nameOrSearchFunction);
    };
    ModuledDefinition.prototype.directlyContains = function (def) {
        if (def instanceof ModuledDefinition.instanceContainer.classType) {
            return this.getClass(function (d) { return d === def; }) != null;
        }
        else if (def instanceof ModuledDefinition.instanceContainer.functionType) {
            return this.getFunction(function (d) { return d === def; }) != null;
        }
        else if (def instanceof ModuledDefinition.instanceContainer.interfaceType) {
            return this.getInterface(function (d) { return d === def; }) != null;
        }
        else if (def instanceof ModuledDefinition.instanceContainer.namespaceType) {
            return this.getNamespace(function (d) { return d === def; }) != null;
        }
        else if (def instanceof ModuledDefinition.instanceContainer.enumType) {
            return this.getEnum(function (d) { return d === def; }) != null;
        }
        else if (def instanceof ModuledDefinition.instanceContainer.typeAliasType) {
            return this.getTypeAlias(function (d) { return d === def; }) != null;
        }
        else if (def instanceof ModuledDefinition.instanceContainer.variableType) {
            return this.getVariable(function (d) { return d === def; }) != null;
        }
        else {
            return false;
        }
    };
    ModuledDefinition.prototype.getNamespacesToDefinition = function (searchDef) {
        var foundInModule = this.directlyContains(searchDef);
        if (foundInModule) {
            return [];
        }
        else {
            for (var i = 0; i < this.namespaces.length; i++) {
                var path = this.namespaces[i].getNamespacesToDefinition(searchDef);
                if (path != null) {
                    return [this.namespaces[i]].concat(path);
                }
            }
            return null;
        }
    };
    ModuledDefinition.prototype.getExports = function () {
        return this.getMembers().filter(function (d) { return d.isNamedExportOfFile || d.isExported && !d.isDefaultExportOfFile; });
    };
    ModuledDefinition.prototype.getMembers = function () {
        return this.namespaces.concat(this.classes, this.interfaces, this.enums, this.functions, this.variables, this.typeAliases);
    };
    ModuledDefinition.prototype.setOrderOfMember = function (order, member) {
        var members = this.getMembers();
        order = Math.max(order, 0);
        if (!members.some(function (m) { return m === member; })) {
            throw new Error("The member '" + member.name + "' does not exist in this module.");
        }
        else {
            members.forEach(function (m) {
                if (m.order >= order) {
                    m.order++;
                }
            });
            member.order = order;
        }
        return this;
    };
    return ModuledDefinition;
}());
exports.ModuledDefinition = ModuledDefinition;

//# sourceMappingURL=ModuledDefinition.js.map
