"use strict";
var IndexSignatureBinder = (function () {
    function IndexSignatureBinder(baseDefinitionBinder, returnTypedBinder, readonlyableBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
        this.returnTypedBinder = returnTypedBinder;
        this.readonlyableBinder = readonlyableBinder;
    }
    IndexSignatureBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        this.returnTypedBinder.bind(def);
        this.readonlyableBinder.bind(def);
        def.keyName = this.getKeyName();
        def.keyType = this.getKeyType();
    };
    return IndexSignatureBinder;
}());
exports.IndexSignatureBinder = IndexSignatureBinder;

//# sourceMappingURL=IndexSignatureBinder.js.map
