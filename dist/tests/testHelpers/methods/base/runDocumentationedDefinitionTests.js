"use strict";
var assert = require("assert");
function runDocumentationedDefinitionTests(definition, structure) {
    structure.documentationComment = structure.documentationComment || "";
    it("should have a documentation comment text of " + structure.documentationComment, function () {
        var actualText = definition.documentationComment;
        if (typeof definition.documentationComment === "string" && definition.documentationComment.length > 0)
            actualText = actualText.replace(/\r?\n/, "\n");
        assert.equal(actualText, structure.documentationComment);
    });
}
exports.runDocumentationedDefinitionTests = runDocumentationedDefinitionTests;

//# sourceMappingURL=runDocumentationedDefinitionTests.js.map
