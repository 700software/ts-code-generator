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
var EnumDefinition = (function (_super) {
    __extends(EnumDefinition, _super);
    function EnumDefinition() {
        _super.apply(this, arguments);
        this.members = [];
    }
    EnumDefinition.prototype.addMember = function (structure) {
        var def = new factories_1.StructureFactory().getEnumMember(structure);
        this.members.push(def);
        return def;
    };
    EnumDefinition.prototype.getMember = function (nameOrSearchFunction) {
        return utils_1.DefinitionUtils.getDefinitionFromListByNameOrFunc(this.members, nameOrSearchFunction);
    };
    EnumDefinition.prototype.write = function (writeOptions) {
        var writer = factories_1.MainFactory.createWriter(writeOptions);
        var enumWriter = factories_1.MainFactory.createWriteFactory(writer).getEnumWriter();
        enumWriter.write(this, WriteFlags_1.WriteFlags.Default);
        return writer.toString();
    };
    return EnumDefinition;
}(base_1.BaseDefinition));
exports.EnumDefinition = EnumDefinition;
utils_1.applyMixins(EnumDefinition, base_1.BaseDefinition, [base_1.NamedDefinition, base_1.ExportableDefinition, base_1.AmbientableDefinition, base_1.OrderableDefinition, base_1.DocumentationedDefinition]);

//# sourceMappingURL=EnumDefinition.js.map
