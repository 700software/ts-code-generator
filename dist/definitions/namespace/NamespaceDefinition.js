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
var NamespaceDefinition = (function (_super) {
    __extends(NamespaceDefinition, _super);
    function NamespaceDefinition() {
        _super.apply(this, arguments);
    }
    NamespaceDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var flags = WriteFlags_1.WriteFlags.Default;
        var namespaceWriter = factories_1.MainFactory.createWriteFactory(writer).getNamespaceWriter();
        namespaceWriter.write(this, flags);
        return writer.toString();
    };
    return NamespaceDefinition;
}(base_1.BaseDefinition));
exports.NamespaceDefinition = NamespaceDefinition;
utils_1.applyMixins(NamespaceDefinition, base_1.BaseDefinition, [base_1.NamedDefinition, base_1.ExportableDefinition, base_1.ModuledDefinition, base_1.AmbientableDefinition, base_1.OrderableDefinition,
    base_1.DocumentationedDefinition]);

//# sourceMappingURL=NamespaceDefinition.js.map
