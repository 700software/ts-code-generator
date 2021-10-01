"use strict";
var ClassMemberContainer = (function () {
    function ClassMemberContainer() {
        this.methods = [];
        this.properties = [];
        this.staticMethods = [];
        this.staticProperties = [];
    }
    return ClassMemberContainer;
}());
exports.ClassMemberContainer = ClassMemberContainer;
var ClassBinder = (function () {
    function ClassBinder(baseDefinitionBinder, namedBinder, exportableBinder, ambientableBinder, typeParameteredBinder, abstractableBinder, decoratableBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.exportableBinder = exportableBinder;
        this.ambientableBinder = ambientableBinder;
        this.typeParameteredBinder = typeParameteredBinder;
        this.abstractableBinder = abstractableBinder;
        this.decoratableBinder = decoratableBinder;
        this.documentationedBinder = documentationedBinder;
    }
    ClassBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.exportableBinder.bind(def);
        this.ambientableBinder.bind(def);
        this.typeParameteredBinder.bind(def);
        this.abstractableBinder.bind(def);
        this.decoratableBinder.bind(def);
        this.documentationedBinder.bind(def);
        this.bindMembers(def);
        (_a = def.extendsTypes).push.apply(_a, this.getExtendsTypes());
        (_b = def.implementsTypes).push.apply(_b, this.getImplementsTypes());
        var _a, _b;
    };
    ClassBinder.prototype.bindMembers = function (def) {
        var container = this.getMembers();
        def.constructorDef = container.constructorDef;
        (_a = def.methods).push.apply(_a, container.methods);
        (_b = def.properties).push.apply(_b, container.properties);
        (_c = def.staticMethods).push.apply(_c, container.staticMethods);
        (_d = def.staticProperties).push.apply(_d, container.staticProperties);
        var _a, _b, _c, _d;
    };
    return ClassBinder;
}());
exports.ClassBinder = ClassBinder;

//# sourceMappingURL=ClassBinder.js.map
