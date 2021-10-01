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
var VariableDefinition = (function (_super) {
    __extends(VariableDefinition, _super);
    function VariableDefinition() {
        _super.apply(this, arguments);
    }
    VariableDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var variableWriter = factories_1.MainFactory.createWriteFactory(writer).getVariableWriter();
        variableWriter.write(this, WriteFlags_1.WriteFlags.Default);
        return writer.toString();
    };
    return VariableDefinition;
}(base_1.BaseDefinition));
exports.VariableDefinition = VariableDefinition;
utils_1.applyMixins(VariableDefinition, base_1.BaseDefinition, [base_1.NamedDefinition, base_1.ExportableDefinition, base_1.TypedDefinition, base_1.DefaultExpressionedDefinition, base_1.AmbientableDefinition,
    base_1.OrderableDefinition, base_1.DocumentationedDefinition]);

//# sourceMappingURL=VariableDefinition.js.map
