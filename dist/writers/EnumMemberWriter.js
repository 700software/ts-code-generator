"use strict";
var EnumMemberWriter = (function () {
    function EnumMemberWriter(writer, baseDefinitionWriter, documentationedWriter) {
        this.writer = writer;
        this.baseDefinitionWriter = baseDefinitionWriter;
        this.documentationedWriter = documentationedWriter;
    }
    EnumMemberWriter.prototype.write = function (member) {
        var _this = this;
        this.baseDefinitionWriter.writeWrap(member, function () {
            _this.documentationedWriter.write(member);
            _this.writer.write(member.name + " = " + member.value);
        });
    };
    return EnumMemberWriter;
}());
exports.EnumMemberWriter = EnumMemberWriter;

//# sourceMappingURL=EnumMemberWriter.js.map
