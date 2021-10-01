import * as assert from "assert";
import {createFunction} from "./../../../createFunctions";

describe("BaseDefinition", () => {
    const funcDef = createFunction({ name: "myFunction" });

    describe("onBeforeWrite", () => {
        it(`should write the function with the before text`, () => {
            funcDef.onBeforeWrite = (writer) => {
                writer.write(`/* some text */`);
            };
            funcDef.onAfterWrite = null;

            const expected = `/* some text */function myFunction() {\n}\n`;
            assert.equal(funcDef.write(), expected);
        });
    });

    describe("onAfterWrite", () => {
        it(`should write the function with the after text`, () => {
            funcDef.onBeforeWrite = null;
            funcDef.onAfterWrite = (writer) => {
                writer.write(`// something`);
            };

            const expected = `function myFunction() {\n}\n// something`;
            assert.equal(funcDef.write(), expected);
        });
    });
});
