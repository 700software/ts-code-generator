"use strict";
var definitions = require("./../../../definitions");
var ModuledBinder = (function () {
    /* istanbul ignore next */ function ModuledBinder() {
    }
    ModuledBinder.prototype.bind = function (def, handleCustomDefinition) {
        var _this = this;
        var order = 0;
        this.getMembers().forEach(function (member) {
            _this.setOrderIfAble(member, function () { return order++; });
            _this.bindMember(def, member, handleCustomDefinition);
        });
    };
    ModuledBinder.prototype.setOrderIfAble = function (member, getOrder) {
        if (member instanceof definitions.FunctionDefinition || member instanceof definitions.ClassDefinition || member instanceof definitions.InterfaceDefinition ||
            member instanceof definitions.EnumDefinition || member instanceof definitions.VariableDefinition || member instanceof definitions.TypeAliasDefinition ||
            member instanceof definitions.NamespaceDefinition) {
            member.order = getOrder();
        }
    };
    ModuledBinder.prototype.bindMember = function (def, member, handleCustomDefinition) {
        if (member instanceof definitions.FunctionDefinition) {
            def.functions.push(member);
        }
        else if (member instanceof definitions.ClassDefinition) {
            def.classes.push(member);
        }
        else if (member instanceof definitions.InterfaceDefinition) {
            def.interfaces.push(member);
        }
        else if (member instanceof definitions.EnumDefinition) {
            def.enums.push(member);
        }
        else if (member instanceof definitions.VariableDefinition) {
            def.variables.push(member);
        }
        else if (member instanceof definitions.TypeAliasDefinition) {
            def.typeAliases.push(member);
        }
        else if (member instanceof definitions.NamespaceDefinition) {
            def.namespaces.push(member);
        }
        else if (handleCustomDefinition instanceof Function) {
            handleCustomDefinition(member);
        }
    };
    return ModuledBinder;
}());
exports.ModuledBinder = ModuledBinder;

//# sourceMappingURL=ModuledBinder.js.map
