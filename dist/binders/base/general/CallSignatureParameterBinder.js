"use strict";
var CallSignatureParameterBinder = (function () {
    function CallSignatureParameterBinder(baseParameterBinder) {
        this.baseParameterBinder = baseParameterBinder;
    }
    CallSignatureParameterBinder.prototype.bind = function (def) {
        this.baseParameterBinder.bind(def);
    };
    return CallSignatureParameterBinder;
}());
exports.CallSignatureParameterBinder = CallSignatureParameterBinder;

//# sourceMappingURL=CallSignatureParameterBinder.js.map
