"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
// most import writing tests are done in fileWriteTests. This test just sees that write() works on ImportDefinition
describe("ReExportDefinition", function () {
    var file = createFunctions_1.createFile({
        reExports: [{
                moduleSpecifier: "./test"
            }]
    });
    describe("write()", function () {
        it("should contain the import written out", function () {
            var expected = "export * from \"./test\";";
            assert.equal(file.reExports[0].write(), expected);
        });
    });
});

//# sourceMappingURL=reExportWriteTests.js.map
