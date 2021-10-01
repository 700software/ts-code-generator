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
// specify of specific file here to prevent errors (due to type-parameter being referenced in type-parametered-definition)
var NamedDefinition_1 = require("./../base/NamedDefinition");
var OrderableDefinition_1 = require("./../base/OrderableDefinition");
var TypeParameteredDefinition_1 = require("./../base/TypeParameteredDefinition");
var TypedDefinition_1 = require("./../base/TypedDefinition");
var ExportableDefinition_1 = require("./../base/ExportableDefinition");
var AmbientableDefinition_1 = require("./../base/AmbientableDefinition");
var DocumentationedDefinition_1 = require("./../base/DocumentationedDefinition");
var TypeAliasDefinition = (function (_super) {
    __extends(TypeAliasDefinition, _super);
    function TypeAliasDefinition() {
        _super.apply(this, arguments);
    }
    TypeAliasDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var typeAliasWriter = factories_1.MainFactory.createWriteFactory(writer).getTypeAliasWriter();
        typeAliasWriter.write(this, WriteFlags_1.WriteFlags.Default);
        return writer.toString();
    };
    return TypeAliasDefinition;
}(base_1.BaseDefinition));
exports.TypeAliasDefinition = TypeAliasDefinition;
utils_1.applyMixins(TypeAliasDefinition, base_1.BaseDefinition, [NamedDefinition_1.NamedDefinition, AmbientableDefinition_1.AmbientableDefinition, OrderableDefinition_1.OrderableDefinition, ExportableDefinition_1.ExportableDefinition, TypedDefinition_1.TypedDefinition,
    TypeParameteredDefinition_1.TypeParameteredDefinition, DocumentationedDefinition_1.DocumentationedDefinition]);

//# sourceMappingURL=TypeAliasDefinition.js.map
