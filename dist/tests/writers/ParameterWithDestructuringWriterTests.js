"use strict";
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
var WriteFlags_1 = require("./../../WriteFlags");
var mocks = require("./mocks");
describe("ParameterWithDestructuringWriter", function () {
    function createObjects(def, shouldWriteDefaultExpression) {
        var writer = new code_block_writer_1.default();
        var defWriter = new writers_1.ParameterWithDestructuringWriter(writer, mocks.getBaseDefinitionWriter(writer, def), mocks.getDefaultExpressionedWriter(writer, def.destructuringProperties, shouldWriteDefaultExpression), mocks.getTypeWriter(writer, def.destructuringProperties.map(function (p) { return p.type; })));
        return { writer: writer, defWriter: defWriter };
    }
    describe("write", function () {
        var prefix = "{start}";
        var suffix = "{end}";
        it("should write out the destructuring parameter", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.addDestructuringProperty({
                name: "myProperty",
                type: "string",
                isOptional: true,
                isReadonly: true
            });
            var _a = createObjects(def, [false]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            chai_1.expect(writer.toString()).to.equal(prefix + "{ myProperty }: { readonly myProperty?: {type:string:any}; }" + suffix);
        });
        it("should write out the destructuring parameter when there are multiple", function () {
            var def = new definitions_1.ClassMethodParameterDefinition();
            def.addDestructuringProperty({
                name: "myProperty",
                type: "string"
            });
            def.addDestructuringProperty({
                name: "myProperty2",
                type: "number",
                defaultExpression: "5"
            });
            var _a = createObjects(def, [false, true]), writer = _a.writer, defWriter = _a.defWriter;
            defWriter.write(def, WriteFlags_1.WriteFlags.None);
            var expected = prefix + "{ myProperty, myProperty2 = {default-expression:0} }: { myProperty: {type:string:any}; myProperty2: {type:number:any}; }" + suffix;
            chai_1.expect(writer.toString()).to.equal(expected);
        });
    });
});

//# sourceMappingURL=ParameterWithDestructuringWriterTests.js.map
