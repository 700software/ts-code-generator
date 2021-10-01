"use strict";
var definitions_1 = require("./../../../definitions");
var ClassConstructorParameterBinder = (function () {
    function ClassConstructorParameterBinder(baseParameterBinder, decoratableBinder, readonlyableBinder) {
        this.baseParameterBinder = baseParameterBinder;
        this.decoratableBinder = decoratableBinder;
        this.readonlyableBinder = readonlyableBinder;
    }
    ClassConstructorParameterBinder.prototype.bind = function (def) {
        this.baseParameterBinder.bind(def);
        this.decoratableBinder.bind(def);
        this.readonlyableBinder.bind(def);
        def.scope = this.getClassConstructorParameterScope();
        if (def.isReadonly && def.scope === definitions_1.ClassConstructorParameterScope.None) {
            def.scope = definitions_1.ClassConstructorParameterScope.Public;
        }
    };
    return ClassConstructorParameterBinder;
}());
exports.ClassConstructorParameterBinder = ClassConstructorParameterBinder;

//# sourceMappingURL=ClassConstructorParameterBinder.js.map
