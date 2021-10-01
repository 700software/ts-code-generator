"use strict";
function applyMixins(derivedCtor, extendsClass, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== "constructor" && derivedCtor.prototype[name] == null) {
                var descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
                Object.defineProperty(derivedCtor.prototype, name, descriptor);
            }
        });
    });
    derivedCtor.mixins = baseCtors;
    (_a = derivedCtor.mixins).push.apply(_a, (extendsClass.mixins || []));
    var _a;
}
exports.applyMixins = applyMixins;

//# sourceMappingURL=applyMixins.js.map
