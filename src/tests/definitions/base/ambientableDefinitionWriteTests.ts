import * as assert from "assert";
import {createFile} from "./../../../createFunctions";
import {NamespaceDeclarationType} from "./../../../definitions";

describe("AmbientableDefinition", () => {
    const file = createFile();
    file.addNamespace({
        name: "MyNamespace",
        hasDeclareKeyword: true
    });
    file.addNamespace({
        name: "MyModule",
        hasDeclareKeyword: true,
        declarationType: NamespaceDeclarationType.Module
    });
    file.addNamespace({
        name: "MyOtherNamespace",
        hasDeclareKeyword: true,
        interfaces: [{ name: "myOtherInterface" }],
        functions: [{ name: "myOtherFunction", isAmbient: true }]
    });
    file.addInterface({
        name: "MyInterface",
        hasDeclareKeyword: true
    });
    file.addClass({
        name: "MyClass",
        hasDeclareKeyword: true
    });
    file.addEnum({
        name: "MyEnum",
        hasDeclareKeyword: true
    });
    file.addFunction({
        name: "myFunction",
        hasDeclareKeyword: true,
        isAmbient: true
    });

    describe("write()", () => {
        it("should contain the file written out with declare keywords", () => {
            const expected =
`declare namespace MyNamespace {
}

declare module MyModule {
}

declare namespace MyOtherNamespace {
    interface myOtherInterface {
    }

    function myOtherFunction(): void;
}

declare interface MyInterface {
}

declare class MyClass {
}

declare enum MyEnum {
}

declare function myFunction(): void;
`;
            assert.equal(file.write(), expected);
        });
    });
});
