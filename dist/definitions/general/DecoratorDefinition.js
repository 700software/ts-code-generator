"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var base_1 = require("./../base");
var DecoratorDefinition = (function (_super) {
    __extends(DecoratorDefinition, _super);
    function DecoratorDefinition() {
        _super.apply(this, arguments);
        this.arguments = [];
    }
    Object.defineProperty(DecoratorDefinition.prototype, "isDecoratorFactory", {
        get: function () {
            return this._isDecoratorFactory || this.arguments.length > 0;
        },
        set: function (value) {
            this._isDecoratorFactory = value;
        },
        enumerable: true,
        configurable: true
    });
    DecoratorDefinition.prototype.addArgument = function (text) {
        var def = new factories_1.StructureFactory().getTypeFromText(text);
        this.arguments.push(def);
        return def;
    };
    return DecoratorDefinition;
}(base_1.BaseDefinition));
exports.DecoratorDefinition = DecoratorDefinition;
utils_1.applyMixins(DecoratorDefinition, base_1.BaseDefinition, [base_1.NamedDefinition]);

//# sourceMappingURL=DecoratorDefinition.js.map
