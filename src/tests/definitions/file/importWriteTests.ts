import * as assert from "assert";
import {createFile} from "./../../../createFunctions";

// most import writing tests are done in fileWriteTests. This test just sees that write() works on ImportDefinition

describe("ImportDefinition", () => {
    const file = createFile({
        imports: [{ moduleSpecifier: "./test" }]
    });

    describe("write()", () => {
        it("should contain the import written out", () => {
            const expected = `import "./test";`;
            assert.equal(file.imports[0].write(), expected);
        });
    });
});
