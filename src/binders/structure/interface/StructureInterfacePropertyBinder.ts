import {StructureFactory} from "./../../../factories";
import {InterfacePropertyStructure} from "./../../../structures";
import {InterfacePropertyBinder} from "./../../base";
import {StructureBasePropertyBinder, StructureDocumentationedBinder} from "./../base";

export class StructureInterfacePropertyBinder extends InterfacePropertyBinder {
    constructor(factory: StructureFactory, structure: InterfacePropertyStructure) {
        super(
            new StructureBasePropertyBinder(factory, structure),
            new StructureDocumentationedBinder(structure)
        );
    }
}
