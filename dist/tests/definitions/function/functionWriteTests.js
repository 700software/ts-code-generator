/* tslint:disable */
// todo: redo tests
//import * as assert from "assert";
//import {getInfoFromString} from "./../../../main";
//const code = `
///**
// * Some description
// */
//function myFunction(str: string) {
//    return "";
//}
//function myFunction2<T extends string, U>(str: T, num: U) {
//}
//export function myMultipleSignatures<T>(): string;
//export function myMultipleSignatures<T>(str?: string) {
//    return "";
//}
//declare function myDeclareMultipleSignatures(): string;
//declare function myDeclareMultipleSignatures(str?: string): string;
//function myFunctionBodyWriter() {
//    return "";
//}
//declare async function myDeclareAsyncFunction();
//export async function myExportAsyncFunction() {
//}
//function myFunctionWithDestructuringParameter(str: string, { prop1, prop2 = 4 }: { prop1: number; prop2?: number; }) {
//}
//function myFunctionWithThisType(this: string, num: number) {
//}
//function *myGeneratorFunction() {
//    yield return "string";
//}
//function myParameterFunction(param1: string, param2 = "text", param3?: number, ...params: string[]) {
//}
//function myTypeGuard(p: string): p is string {
//}
//`;
//describe("FunctionDefinition", () => {
//    const file = getInfoFromString(code);
//    describe("write()", () => {
//        describe("myFunction", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`/**
// * Some description
// */
//function myFunction(str: string) {
//}
//`;
//                assert.equal(file.functions[0].write(), expected);
//            });
//        });
//        describe("myFunction2", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`function myFunction2<T extends string, U>(str: T, num: U) {
//}
//`;
//                assert.equal(file.functions[1].write(), expected);
//            });
//        });
//        describe("myMultipleSignatures", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`export function myMultipleSignatures<T>(): string;
//export function myMultipleSignatures<T>(str?: string): string {
//}
//`;
//                assert.equal(file.functions[2].write(), expected);
//            });
//        });
//        describe("myDeclareMultipleSignatures", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`declare function myDeclareMultipleSignatures(): string;
//declare function myDeclareMultipleSignatures(str?: string): string;
//`;
//                assert.equal(file.functions[3].write(), expected);
//            });
//        });
//        describe("onWriteFunctionBody", () => {
//            const funcDef = file.functions[4];
//            funcDef.onWriteFunctionBody = (writer) => {
//                writer.write(`return "text";`);
//            };
//            it(`should write the function with a body`, () => {
//                const expected = `function myFunctionBodyWriter() {\n    return "text";\n}\n`;
//                assert.equal(funcDef.write(), expected);
//            });
//        });
//        describe("myDeclareAsyncFunction", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`declare async function myDeclareAsyncFunction(): any;
//`;
//                assert.equal(file.functions[5].write(), expected);
//            });
//        });
//        describe("myExportAsyncFunction", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`export async function myExportAsyncFunction() {
//}
//`;
//                assert.equal(file.functions[6].write(), expected);
//            });
//        });
//        describe("myFunctionWithDestructuringParameter", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`function myFunctionWithDestructuringParameter(str: string, { prop1, prop2 = 4 }: { prop1: number; prop2?: number; }) {
//}
//`;
//                assert.equal(file.functions[7].write(), expected);
//            });
//        });
//        describe("myFunctionWithThisType", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`function myFunctionWithThisType(this: string, num: number) {
//}
//`;
//                assert.equal(file.functions[8].write(), expected);
//            });
//        });
//        describe("myGeneratorFunction", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`function *myGeneratorFunction() {
//}
//`;
//                assert.equal(file.functions[9].write(), expected);
//            });
//        });
//        describe("myParameterFunction", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`function myParameterFunction(param1: string, param2 = "text", param3?: number, ...params: string[]) {
//}
//`;
//                assert.equal(file.functions[10].write(), expected);
//            });
//        });
//        describe("myTypeGuard", () => {
//            it("should contain the function written out", () => {
//                const expected =
//`function myTypeGuard(p: string): p is string {
//}
//`;
//                assert.equal(file.functions[11].write(), expected);
//            });
//        });
//    });
//});

//# sourceMappingURL=functionWriteTests.js.map
