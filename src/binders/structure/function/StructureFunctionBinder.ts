import {StructureFactory} from "./../../../factories";
import {FunctionParameterDefinition} from "./../../../definitions";
import {FunctionStructure} from "./../../../structures";
import {FunctionBinder} from "./../../base";
import {StructureBaseFunctionBinder, StructureExportableBinder, StructureAmbientableBinder, StructureAsyncableBinder, StructureFunctionBodyWriteableBinder} from "./../base";
import {StructureFunctionParameterBinder} from "./StructureFunctionParameterBinder";

export class StructureFunctionBinder extends FunctionBinder {
    constructor(factory: StructureFactory, structure: FunctionStructure) {
        super(
            new StructureBaseFunctionBinder(factory, structure, FunctionParameterDefinition, StructureFunctionParameterBinder),
            new StructureExportableBinder(structure),
            new StructureAmbientableBinder(structure),
            new StructureAsyncableBinder(structure),
            new StructureFunctionBodyWriteableBinder(structure)
        );
    }
}
