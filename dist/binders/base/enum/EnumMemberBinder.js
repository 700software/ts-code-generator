"use strict";
var EnumMemberBinder = (function () {
    function EnumMemberBinder(baseDefinitionBinder, namedBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.documentationedBinder = documentationedBinder;
    }
    EnumMemberBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.documentationedBinder.bind(def);
        def.value = this.getValue();
    };
    return EnumMemberBinder;
}());
exports.EnumMemberBinder = EnumMemberBinder;

//# sourceMappingURL=EnumMemberBinder.js.map
