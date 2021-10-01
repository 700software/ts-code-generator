"use strict";
var WriteFlags_1 = require("./../WriteFlags");
var DecoratorWriter = (function () {
    function DecoratorWriter(writer, baseDefinitionWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
    }
    DecoratorWriter.prototype.write = function (def, flags) {
        var _this = this;
        if (flags & WriteFlags_1.WriteFlags.HideFunctionImplementations)
            return;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.writer.write("@");
            _this.writer.write(def.name);
            if (def.isDecoratorFactory)
                _this.writeArgs(def);
        });
    };
    DecoratorWriter.prototype.writeArgs = function (def) {
        var _this = this;
        this.writer.write("(");
        def.arguments.forEach(function (arg, i) {
            _this.writer.conditionalWrite(i !== 0, ", ");
            _this.writer.write(arg.text);
        });
        this.writer.write(")");
    };
    return DecoratorWriter;
}());
exports.DecoratorWriter = DecoratorWriter;

//# sourceMappingURL=DecoratorWriter.js.map
