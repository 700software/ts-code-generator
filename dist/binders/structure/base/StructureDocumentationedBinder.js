"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../base");
var StructureDocumentationedBinder = (function (_super) {
    __extends(StructureDocumentationedBinder, _super);
    function StructureDocumentationedBinder(structure) {
        _super.call(this);
        this.structure = structure;
    }
    StructureDocumentationedBinder.prototype.getDocumentationComment = function () {
        return this.structure.documentationComment || "";
    };
    return StructureDocumentationedBinder;
}(base_1.DocumentationedBinder));
exports.StructureDocumentationedBinder = StructureDocumentationedBinder;

//# sourceMappingURL=StructureDocumentationedBinder.js.map
