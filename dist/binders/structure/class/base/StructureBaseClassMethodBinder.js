"use strict";
var __extends = (this && this.__extends)/* istanbul ignore next */ || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./../../../base");
var base_2 = require("./../../base");
var StructureScopedBinder_1 = require("./StructureScopedBinder");
var StructureBaseClassMethodBinder = (function (_super) {
    __extends(StructureBaseClassMethodBinder, _super);
    function StructureBaseClassMethodBinder(factory, structure, paramDefinition, paramBinder) {
        _super.call(this, new base_2.StructureBaseFunctionBinder(factory, structure, paramDefinition, paramBinder), new base_2.StructureDecoratableBinder(factory, structure), new StructureScopedBinder_1.StructureScopedBinder(structure), new base_2.StructureAsyncableBinder(structure), new base_2.StructureFunctionBodyWriteableBinder(structure));
    }
    return StructureBaseClassMethodBinder;
}(base_1.BaseClassMethodBinder));
exports.StructureBaseClassMethodBinder = StructureBaseClassMethodBinder;

//# sourceMappingURL=StructureBaseClassMethodBinder.js.map
