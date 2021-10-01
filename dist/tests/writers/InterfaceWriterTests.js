"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var createFunctions_1 = require("./../../createFunctions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("InterfaceWriter", function () {
    function createObjects(def) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.InterfaceWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDocumentationedWriter(writer, [def]), mocks.getExportableWriter(writer, def), mocks.getAmbientableWriter(writer, def), mocks.getTypeParametersWriter(writer, def.typeParameters), mocks.getPropertyWriter(writer, []), mocks.getFunctionWriter(writer), mocks.getCallSignatureWriter(writer, def.newSignatures.concat(def.callSignatures)), mocks.getIndexSignatureWriter(writer), mocks.getExtendsImplementsClauseWriter(writer));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}{doc-comment}{export-keyword:0}{declare-keyword}interface Name{type-parameters}{extends-clause:Name} {\n";
        var suffix = "}\n{end}";
        it("should write out the interface", function () {
            var def = createFunctions_1.createInterface({
                name: "Name"
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal("" + prefix + suffix);
        });
        it("should write out the interface with new signatures, call signatures, index signatures, properties, and methods", function () {
            var def = createFunctions_1.createInterface({
                name: "Name",
                newSignatures: [{}, {}],
                callSignatures: [{}, {}],
                indexSignatures: [{ keyName: "s", keyType: "string", returnType: "string" }, { keyName: "t", keyType: "string", returnType: "string" }],
                properties: [{ name: "prop1" }, { name: "prop2" }],
                methods: [{ name: "method1" }, { name: "method2" }]
            });
            var _a = createObjects(def), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            var expectedBody = "    new{call-signature:0};\n" +
                "    new{call-signature:0};\n" +
                "    {call-signature:0};\n" +
                "    {call-signature:0};\n" +
                "    {index-signature:s};\n" +
                "    {index-signature:t};\n" +
                "    {property:prop1:0}\n" +
                "    {property:prop2:0}\n" +
                "    {function:method1:0}\n" +
                "    {function:method2:0}\n";
            chai_1.expect(writer.toString()).to.equal("" + prefix + expectedBody + suffix);
        });
    });
});

//# sourceMappingURL=InterfaceWriterTests.js.map
