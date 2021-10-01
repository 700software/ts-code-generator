import {ExportableDefinitions} from "./../../../definitions";
import {DefaultImportPartBinder} from "./../../base";
import {StructureBaseDefinitionBinder} from "./../base";

export class StructureDefaultImportPartBinder extends DefaultImportPartBinder {
    constructor(private readonly name: string) {
        super(
            new StructureBaseDefinitionBinder({})
        );
    }

    getName() {
        return this.name;
    }

    getDefinitions() {
        return [] as ExportableDefinitions[];
    }

    getExpression() {
        return null;
    }
}
