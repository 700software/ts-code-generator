"use strict";
var definitions_1 = require("./../definitions");
var WriteFlags_1 = require("./../WriteFlags");
var FunctionBodyWriter = (function () {
    function FunctionBodyWriter(writer) {
        this.writer = writer;
    }
    FunctionBodyWriter.prototype.willWriteFunctionBody = function (def, flags) {
        if (def instanceof definitions_1.InterfaceMethodDefinition)
            return false;
        else {
            var isOnWriteFunctionBodyDefined = typeof def.onWriteFunctionBody === "function";
            var shouldHideFunctionBodies = (flags & WriteFlags_1.WriteFlags.HideFunctionBodies) !== 0;
            var isAmbient = def.isAmbient || false;
            var isAbstract = def.isAbstract || false;
            var suggestedToHideFunctionBody = shouldHideFunctionBodies || isAmbient || isAbstract;
            return isOnWriteFunctionBodyDefined || !suggestedToHideFunctionBody;
        }
    };
    FunctionBodyWriter.prototype.write = function (def, flags) {
        if (this.willWriteFunctionBody(def, flags))
            this.writeFunctionBody(def);
        else
            this.writeSemiColon();
    };
    FunctionBodyWriter.prototype.writeSemiColon = function () {
        this.writer.write(";");
    };
    FunctionBodyWriter.prototype.writeFunctionBody = function (def) {
        var _this = this;
        this.writer.block(function () {
            if (typeof def.onWriteFunctionBody === "function")
                def.onWriteFunctionBody(_this.writer);
        });
    };
    return FunctionBodyWriter;
}());
exports.FunctionBodyWriter = FunctionBodyWriter;

//# sourceMappingURL=FunctionBodyWriter.js.map
