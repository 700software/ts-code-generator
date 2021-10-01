"use strict";
var BaseDefinitionBinder = (function () {
    /* istanbul ignore next */ function BaseDefinitionBinder() {
    }
    BaseDefinitionBinder.prototype.bind = function (def) {
        def.onBeforeWrite = this.getOnBeforeWrite();
        def.onAfterWrite = this.getOnAfterWrite();
    };
    return BaseDefinitionBinder;
}());
exports.BaseDefinitionBinder = BaseDefinitionBinder;

//# sourceMappingURL=BaseDefinitionBinder.js.map
