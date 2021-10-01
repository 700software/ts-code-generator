"use strict";
var TypeAliasBinder = (function () {
    function TypeAliasBinder(baseDefinitionBinder, namedBinder, exportableBinder, typedBinder, typeParameteredBinder, ambientableBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.exportableBinder = exportableBinder;
        this.typedBinder = typedBinder;
        this.typeParameteredBinder = typeParameteredBinder;
        this.ambientableBinder = ambientableBinder;
        this.documentationedBinder = documentationedBinder;
    }
    TypeAliasBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.exportableBinder.bind(def);
        this.typedBinder.bind(def);
        this.typeParameteredBinder.bind(def);
        this.ambientableBinder.bind(def);
        this.documentationedBinder.bind(def);
    };
    return TypeAliasBinder;
}());
exports.TypeAliasBinder = TypeAliasBinder;

//# sourceMappingURL=TypeAliasBinder.js.map
