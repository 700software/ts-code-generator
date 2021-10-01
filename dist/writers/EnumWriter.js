"use strict";
var EnumWriter = (function () {
    function EnumWriter(writer, baseDefinitionWriter, documentationedWriter, exportableWriter, ambientableWriter, enumMemberWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
        this.exportableWriter = exportableWriter;
        this.ambientableWriter = ambientableWriter;
        this.enumMemberWriter = enumMemberWriter;
    }
    EnumWriter.prototype.write = function (def, flags) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(def, function () {
            _this.documentationedWriter.write(def);
            _this.exportableWriter.writeExportKeyword(def, flags);
            _this.ambientableWriter.writeDeclareKeyword(def);
            _this.writer.conditionalWrite(def.isConst, "const ");
            _this.writer.write("enum " + def.name).block(function () {
                _this.writeMembers(def.members);
            });
        });
    };
    EnumWriter.prototype.writeMembers = function (members) {
        var _this = this;
        members.forEach(function (member, i) {
            _this.enumMemberWriter.write(member);
            if (i !== members.length - 1)
                _this.writer.write(",").newLine();
        });
    };
    return EnumWriter;
}());
exports.EnumWriter = EnumWriter;

//# sourceMappingURL=EnumWriter.js.map
