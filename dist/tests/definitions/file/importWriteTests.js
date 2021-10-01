"use strict";
var assert = require("assert");
var createFunctions_1 = require("./../../../createFunctions");
// most import writing tests are done in fileWriteTests. This test just sees that write() works on ImportDefinition
describe("ImportDefinition", function () {
    var file = createFunctions_1.createFile({
        imports: [{ moduleSpecifier: "./test" }]
    });
    describe("write()", function () {
        it("should contain the import written out", function () {
            var expected = "import \"./test\";";
            assert.equal(file.imports[0].write(), expected);
        });
    });
});

//# sourceMappingURL=importWriteTests.js.map
