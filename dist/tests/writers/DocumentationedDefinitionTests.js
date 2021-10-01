"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var code_block_writer_1 = require("code-block-writer");
var chai_1 = require("chai");
var definitions_1 = require("./../../definitions");
var writers_1 = require("./../../writers");
describe("DocumentationedWriter", function () {
    var MockDocumentationedDefinition = (function (_super) {
        __extends(MockDocumentationedDefinition, _super);
        function MockDocumentationedDefinition() {
            _super.apply(this, arguments);
        }
        return MockDocumentationedDefinition;
    }(definitions_1.DocumentationedDefinition));
    function getWriteResult(documentationComment) {
        var codeWriter = new code_block_writer_1.default();
        var writer = new writers_1.DocumentationedWriter(codeWriter);
        var def = new MockDocumentationedDefinition();
        def.documentationComment = documentationComment;
        writer.write(def);
        return codeWriter.toString();
    }
    function doTest(commentText, expectedText) {
        if (expectedText.length > 0)
            expectedText += "\n";
        chai_1.expect(getWriteResult(commentText)).to.equal(expectedText);
    }
    describe("write", function () {
        it("should write the comment when providing a comment", function () {
            var fullComment = "/**\n * TestComment\n * NextLine\n */";
            doTest(fullComment, fullComment);
        });
        it("should write the comment when providing just text", function () {
            doTest("TestComment\nNextLine\r\n", "/**\n * TestComment\n * NextLine\n *\n */");
        });
        it("should not write if the comment is null", function () {
            doTest(null, "");
        });
        it("should not write if the comment is an empty string", function () {
            doTest("", "");
        });
        it("should not write if the comment contains spaces", function () {
            doTest("    \t    ", "");
        });
    });
});

//# sourceMappingURL=DocumentationedDefinitionTests.js.map
