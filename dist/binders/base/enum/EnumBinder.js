"use strict";
var EnumBinder = (function () {
    function EnumBinder(baseDefinitionBinder, namedBinder, exportableBinder, ambientableBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.exportableBinder = exportableBinder;
        this.ambientableBinder = ambientableBinder;
        this.documentationedBinder = documentationedBinder;
    }
    EnumBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.exportableBinder.bind(def);
        this.ambientableBinder.bind(def);
        this.documentationedBinder.bind(def);
        def.isConst = this.getIsConst();
        (_a = def.members).push.apply(_a, this.getMembers());
        var _a;
    };
    return EnumBinder;
}());
exports.EnumBinder = EnumBinder;

//# sourceMappingURL=EnumBinder.js.map
