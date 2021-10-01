"use strict";
var ExpressionBinder = (function () {
    function ExpressionBinder(baseDefinitionBinder) {
        this.baseDefinitionBinder = baseDefinitionBinder;
    }
    ExpressionBinder.prototype.bind = function (def) {
        this.baseDefinitionBinder.bind(def);
        def.text = this.getText();
    };
    return ExpressionBinder;
}());
exports.ExpressionBinder = ExpressionBinder;

//# sourceMappingURL=ExpressionBinder.js.map
