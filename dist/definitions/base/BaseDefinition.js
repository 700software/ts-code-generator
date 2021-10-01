"use strict";
function runMixin(instance, mixin) {
    mixin.call(instance);
    if (mixin.mixins)
        mixin.mixins.forEach(function (m) { return runMixin(instance, m); });
}
var BaseDefinition = (function () {
    function BaseDefinition() {
        var _this = this;
        var mixins = this.constructor["mixins"] || [];
        mixins.forEach(function (mixin) { return runMixin(_this, mixin); });
        Object.defineProperty(this, "__uniqueID", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: ++BaseDefinition._uniqueID
        });
    }
    // ReSharper disable once InconsistentNaming
    BaseDefinition._uniqueID = 0;
    return BaseDefinition;
}());
exports.BaseDefinition = BaseDefinition;

//# sourceMappingURL=BaseDefinition.js.map
