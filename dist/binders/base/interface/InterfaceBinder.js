"use strict";
var InterfaceMemberContainer = (function () {
    function InterfaceMemberContainer() {
        this.callSignatures = [];
        this.indexSignatures = [];
        this.methods = [];
        this.newSignatures = [];
        this.properties = [];
    }
    return InterfaceMemberContainer;
}());
exports.InterfaceMemberContainer = InterfaceMemberContainer;
var InterfaceBinder = (function () {
    function InterfaceBinder(baseDefinitionBinder, namedBinder, exportableBinder, ambientableBinder, typeParameteredBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.exportableBinder = exportableBinder;
        this.ambientableBinder = ambientableBinder;
        this.typeParameteredBinder = typeParameteredBinder;
        this.documentationedBinder = documentationedBinder;
    }
    InterfaceBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.exportableBinder.bind(def);
        this.ambientableBinder.bind(def);
        this.typeParameteredBinder.bind(def);
        this.documentationedBinder.bind(def);
        this.bindMembers(def);
        (_a = def.extendsTypes).push.apply(_a, this.getExtendsTypes());
        var _a;
    };
    InterfaceBinder.prototype.bindMembers = function (def) {
        var memberContainer = this.getMembers();
        (_a = def.properties).push.apply(_a, memberContainer.properties);
        (_b = def.methods).push.apply(_b, memberContainer.methods);
        (_c = def.newSignatures).push.apply(_c, memberContainer.newSignatures);
        (_d = def.callSignatures).push.apply(_d, memberContainer.callSignatures);
        (_e = def.indexSignatures).push.apply(_e, memberContainer.indexSignatures);
        var _a, _b, _c, _d, _e;
    };
    return InterfaceBinder;
}());
exports.InterfaceBinder = InterfaceBinder;

//# sourceMappingURL=InterfaceBinder.js.map
