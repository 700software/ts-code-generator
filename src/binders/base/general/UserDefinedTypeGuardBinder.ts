import {UserDefinedTypeGuardDefinition, TypeDefinition} from "./../../../definitions";
import {IBaseBinder} from "./../IBaseBinder";
import {BaseDefinitionBinder} from "./../base/BaseDefinitionBinder";

export abstract class UserDefinedTypeGuardBinder implements IBaseBinder {
    protected abstract getParameterName(): string;
    protected abstract getType(): TypeDefinition;

    constructor(
        private readonly baseDefinitionBinder: BaseDefinitionBinder
    ) {
    }

    bind(def: UserDefinedTypeGuardDefinition) {
        this.baseDefinitionBinder.bind(def);
        def.parameterName = this.getParameterName();
        def.type = this.getType();
    }
}
