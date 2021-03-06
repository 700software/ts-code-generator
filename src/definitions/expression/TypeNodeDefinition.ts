import {TypeParameteredDefinition, ParameteredDefinition} from "./../base";
import {TypeParameterDefinition} from "./../general";
import {TypeParameterStructure, TypeFunctionParameterStructure} from "./../../structures";
import {applyMixins} from "./../../utils";
import {BaseTypeDefinition} from "./base";
import {TypeFunctionParameterDefinition} from "./TypeFunctionParameterDefinition";

export class TypeNodeDefinition
        extends BaseTypeDefinition
        implements TypeParameteredDefinition, ParameteredDefinition<TypeFunctionParameterDefinition, TypeFunctionParameterStructure> {
    // TypeParameteredDefinition
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition = (structure) => {
        throw new Error(`addTypeParameter is not supported on ${nameof(TypeNodeDefinition)}`);
    };
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => (TypeParameterDefinition | null);
    // ParameteredDefinition
    parameters: TypeFunctionParameterDefinition[];
    getParameter: (nameOrSearchFunction: string | ((parameter: TypeFunctionParameterDefinition) => boolean)) => (TypeFunctionParameterDefinition | null);
    addParameter: (structure: TypeFunctionParameterStructure) => TypeFunctionParameterDefinition = (structure) => {
        throw new Error(`addParameter is not supported on ${nameof(TypeNodeDefinition)}`);
    };
}

applyMixins(TypeNodeDefinition, BaseTypeDefinition, [TypeParameteredDefinition, ParameteredDefinition]);
