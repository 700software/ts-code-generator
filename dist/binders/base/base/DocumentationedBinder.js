"use strict";
var DocumentationedBinder = (function () {
    /* istanbul ignore next */ function DocumentationedBinder() {
    }
    DocumentationedBinder.prototype.bind = function (def) {
        def.documentationComment = this.getDocumentationComment();
    };
    return DocumentationedBinder;
}());
exports.DocumentationedBinder = DocumentationedBinder;

//# sourceMappingURL=DocumentationedBinder.js.map
