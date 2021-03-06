import {MainFactory, StructureFactory} from "./../../factories";
import {NamedImportPartStructure} from "./../../structures";
import {DefinitionUtils} from "./../../utils";
import {WriteOptions} from "./../../WriteOptions";
import {BaseDefinition} from "./../base";
import {DefaultImportPartDefinition} from "./DefaultImportPartDefinition";
import {StarImportPartDefinition} from "./StarImportPartDefinition";
import {NamedImportPartDefinition} from "./NamedImportPartDefinition";

export class ImportDefinition extends BaseDefinition {
    fileName: string;
    moduleSpecifier: string;
    starImportName: string | null;
    defaultImport: DefaultImportPartDefinition | null;
    namedImports: NamedImportPartDefinition[] = [];
    starImports: StarImportPartDefinition[] = [];

    addNamedImport(structure: NamedImportPartStructure) {
        const def = new StructureFactory().getNamedImportPart(structure);
        this.namedImports.push(def);
        return def;
    }

    getNamedImport(searchFunction: (importPart: NamedImportPartDefinition) => boolean) {
        return DefinitionUtils.getDefinitionFromListByFunc(this.namedImports, searchFunction);
    }

    getStarImport(searchFunction: (importPart: StarImportPartDefinition) => boolean) {
        return DefinitionUtils.getDefinitionFromListByFunc(this.starImports, searchFunction);
    }

    setDefaultImport(importName: string) {
        const factory = new StructureFactory();
        this.defaultImport = factory.getDefaultImportPartByName(importName);
        return this;
    }

    write(writeOptions?: WriteOptions) {
        const writer = MainFactory.createWriter(writeOptions);
        const importWriter = MainFactory.createWriteFactory(writer).getImportWriter();
        importWriter.write(this);
        return writer.toString();
    }
}
