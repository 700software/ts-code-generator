"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factories_1 = require("./../../factories");
var utils_1 = require("./../../utils");
var WriteFlags_1 = require("./../../WriteFlags");
var base_1 = require("./../base");
var FunctionDefinition = (function (_super) {
    __extends(FunctionDefinition, _super);
    function FunctionDefinition() {
        _super.apply(this, arguments);
    }
    FunctionDefinition.prototype.addParameter = function (structure) {
        var def = new factories_1.StructureFactory().getFunctionParameter(structure);
        this.parameters.push(def);
        return def;
    };
    FunctionDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var functionWriter = factories_1.MainFactory.createWriteFactory(writer).getFunctionWriter();
        functionWriter.write(this, WriteFlags_1.WriteFlags.Default);
        return writer.toString();
    };
    return FunctionDefinition;
}(base_1.BaseFunctionDefinition));
exports.FunctionDefinition = FunctionDefinition;
utils_1.applyMixins(FunctionDefinition, base_1.BaseFunctionDefinition, [base_1.ExportableDefinition, base_1.AmbientableDefinition, base_1.AsyncableDefinition, base_1.FunctionBodyWriteableDefinition,
    base_1.OrderableDefinition]);

//# sourceMappingURL=FunctionDefinition.js.map
