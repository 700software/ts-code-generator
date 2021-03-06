"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var chai_1 = require("chai");
var Memoize_1 = require("./../../../utils/decorators/Memoize");
describe("Memoize", function () {
    var val = 0;
    var MyClass = (function () {
        /* istanbul ignore next */ function MyClass() {
        }
        MyClass.prototype.getNumber = function () {
            return ++val;
        };
        Object.defineProperty(MyClass.prototype, "value", {
            get: function () {
                return ++val;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            Memoize_1.Memoize
        ], MyClass.prototype, "getNumber", null);
        __decorate([
            Memoize_1.Memoize
        ], MyClass.prototype, "value", null);
        return MyClass;
    }());
    var a = new MyClass();
    var b = new MyClass();
    it("method should be memoized", function () {
        chai_1.expect(a.getNumber()).to.equal(a.getNumber());
    });
    it("accessor should be memoized", function () {
        chai_1.expect(a.value).to.equal(a.value);
    });
    it("multiple instances shouldn't share values for methods", function () {
        chai_1.expect(a.getNumber()).to.not.equal(b.getNumber());
    });
    it("multiple instances shouldn't share values for accessors", function () {
        chai_1.expect(a.value).to.not.equal(b.value);
    });
    it("should throw if supplying arguments", function () {
        chai_1.expect(function () { return a.getNumber(2); }).to.throw(Error);
    });
    it("should throw when using memoize on a set accessor", function () {
        chai_1.expect(function () {
            var MyClass = (function () {
                /* istanbul ignore next */ function MyClass() {
                }
                Object.defineProperty(MyClass.prototype, "test", {
                    set: function (value) {
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    Memoize_1.Memoize
                ], MyClass.prototype, "test", null);
                return MyClass;
            }());
        }).to.throw(Error);
    });
});

//# sourceMappingURL=memoizeTests.js.map
