import {StructureFactory} from "./../../../factories";
import {ParameteredStructure, BaseParameterStructure} from "./../../../structures";
import {BaseParameterDefinitionConstructor, BaseParameterDefinition} from "./../../../definitions";
import {ParameteredBinder} from "./../../base";

export interface StructureParameterBinderConstructor<ParameterType extends BaseParameterDefinition> {
    new(factory: StructureFactory, structure: BaseParameterStructure): { bind(def: ParameterType): void; };
}

export class StructureParameteredBinder<ParameterType extends BaseParameterDefinition, StructureParameterType extends BaseParameterStructure>
        extends ParameteredBinder<ParameterType> {
    constructor(
        private readonly factory: StructureFactory,
        private readonly structure: ParameteredStructure<StructureParameterType>,
        private readonly paramDefinition: BaseParameterDefinitionConstructor<ParameterType>,
        private readonly paramBinder: StructureParameterBinderConstructor<ParameterType>
    ) {
        super();
    }

    getParameters() {
        return (this.structure.parameters || []).map(param => {
            const paramDefinition = new this.paramDefinition();
            const paramBinder = new this.paramBinder(this.factory, param);

            paramBinder.bind(paramDefinition);

            return paramDefinition;
        });
    }
}
