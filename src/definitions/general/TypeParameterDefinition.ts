import {applyMixins, DefinitionUtils} from "./../../utils";
import {NamedDefinition, BaseDefinition} from "./../base";
import {TypeDefinition} from "./../expression";

export class TypeParameterDefinition extends BaseDefinition implements NamedDefinition {
    constraintType: TypeDefinition | null;

    setConstraintType(definition: NamedDefinition, typeArguments?: string[]): this;
    setConstraintType(text: string): this;
    setConstraintType(textOrDefinition: string | NamedDefinition, typeArguments: string[] = []) {
        this.constraintType = DefinitionUtils.getTypeDefinitionFromTextOrDefinition(textOrDefinition, typeArguments);
        return this;
    }

    // NamedDefinition
    name: string;
}

applyMixins(TypeParameterDefinition, BaseDefinition, [NamedDefinition]);
