"use strict";
var code_block_writer_1 = require("code-block-writer");
var WriterFactory_1 = require("./WriterFactory");
var MainFactory = (function () {
    /* istanbul ignore next */ function MainFactory() {
    }
    // todo: make an instance member
    MainFactory.createWriter = function (writeOptions) {
        return new code_block_writer_1.default(writeOptions);
    };
    // todo: rename to createWriterFactory
    MainFactory.createWriteFactory = function (writer) {
        return new WriterFactory_1.WriterFactory(writer);
    };
    return MainFactory;
}());
exports.MainFactory = MainFactory;

//# sourceMappingURL=MainFactory.js.map
