import * as assert from "assert";
import {createFile} from "./../../../createFunctions";

// most import writing tests are done in fileWriteTests. This test just sees that write() works on ImportDefinition

describe("ReExportDefinition", () => {
    const file = createFile({
        reExports: [{
            moduleSpecifier: "./test"
        }]
    });

    describe("write()", () => {
        it("should contain the import written out", () => {
            const expected = `export * from "./test";`;
            assert.equal(file.reExports[0].write(), expected);
        });
    });
});
