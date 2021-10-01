var path = require("path");
var fs = require("fs");
var getInfoFromFiles = require("ts-type-info").getInfoFromFiles;

// using ts-type-info still seems like the best way to generate definition files... haven't found anything else
// that gives me this kind of control...    

generateDefinitionFile();

function generateDefinitionFile() {
    const result = getInfoFromFiles([
        path.join(__dirname, "src/main.ts")
    ], {
        showDebugMessages: false,
        compilerOptions: {
            strictNullChecks: true
        }
    });
    const fileInfo = result.getFile("main.ts");

    removeInternalProperties(result);
    fixSetType(result);

    const definitionFileText = fileInfo.writeExportsAsDefinitionFile({
        imports: [{
            defaultImportName: "CodeBlockWriter",
            moduleSpecifier: "code-block-writer"
        }]
    });

    fs.writeFile(path.join(__dirname, "ts-code-generator.d.ts"), definitionFileText);
}

function removeInternalProperties(result) {
    const baseDefClass = result.getFile("BaseDefinition.ts").getClass("BaseDefinition");
    baseDefClass.properties = baseDefClass.properties.filter(p => p.name !== "___uniqueID");

    const moduledDefinition = result.getFile("ModuledDefinition.ts").getClass("ModuledDefinition");
    moduledDefinition.staticMethods = moduledDefinition.staticMethods.filter(p => p.name !== "initialize");
}

function fixSetType(result) {
    result.files.forEach(f => {
        f.classes.forEach(c => {
            if (c.properties.some(p => p.name === "setType")) {
                c.properties = c.properties.filter(p => p.name !== "setType");
                c.addMethod({
                    name: "setType",
                    returnType: "this",
                    overloadSignatures: [{
                        parameters: [
                            { name: "definition", type: "NamedDefinition" },
                            { name: "typeArguments", type: "string[]", isOptional: true }
                        ],
                        returnType: "this"
                    }, {
                        parameters: [{ name: "text", type: "string" }],
                        returnType: "this"
                    }]
                });
            }
        });
    });
}
