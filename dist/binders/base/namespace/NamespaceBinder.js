"use strict";
var NamespaceBinder = (function () {
    function NamespaceBinder(baseDefinitionBinder, namedBinder, exportableBinder, ambientableBinder, moduledBinder, documentationedBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.namedBinder = namedBinder;
        this.exportableBinder = exportableBinder;
        this.ambientableBinder = ambientableBinder;
        this.moduledBinder = moduledBinder;
        this.documentationedBinder = documentationedBinder;
    }
    NamespaceBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.exportableBinder.bind(def);
        this.ambientableBinder.bind(def);
        this.moduledBinder.bind(def);
        this.documentationedBinder.bind(def);
        def.declarationType = this.getNamespaceDeclarationType();
    };
    return NamespaceBinder;
}());
exports.NamespaceBinder = NamespaceBinder;

//# sourceMappingURL=NamespaceBinder.js.map
