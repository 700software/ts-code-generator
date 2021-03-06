"use strict";
function Memoize(target, propertyName, descriptor) {
    if (descriptor.value != null)
        descriptor.value = getNewFunction(descriptor.value);
    else if (descriptor.get != null)
        descriptor.get = getNewFunction(descriptor.get);
    else
        throw new Error("Only put a Memoize decorator on a method or get accessor.");
}
exports.Memoize = Memoize;
var counter = 0;
function getNewFunction(originalFunction) {
    var identifier = ++counter;
    function decorator() {
        var propName = "__memoized_value_" + identifier;
        var returnedValue;
        if (arguments.length > 0)
            throw new Error("Should not use memoize with a function that requires arguments.");
        if (this.hasOwnProperty(propName))
            returnedValue = this[propName];
        else {
            returnedValue = originalFunction.apply(this, arguments);
            Object.defineProperty(this, propName, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: returnedValue
            });
        }
        return returnedValue;
    }
    return decorator;
}

//# sourceMappingURL=Memoize.js.map
