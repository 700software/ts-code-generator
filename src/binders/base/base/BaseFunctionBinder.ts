import * as definitions from "./../../../definitions";
import {BaseDefinitionBinder} from "./BaseDefinitionBinder";
import {DocumentationedBinder} from "./DocumentationedBinder";
import {NamedBinder} from "./NamedBinder";
import {ParameteredBinder} from "./ParameteredBinder";
import {ReturnTypedBinder} from "./ReturnTypedBinder";
import {OverloadSignaturedBinder} from "./OverloadSignaturedBinder";
import {TypeParameteredBinder} from "./TypeParameteredBinder";

export abstract class BaseFunctionBinder<ParameterType extends definitions.BaseParameterDefinition> {
    constructor(
        private readonly baseDefinitionBinder: BaseDefinitionBinder,
        private readonly namedBinder: NamedBinder,
        private readonly typeParameterBinder: TypeParameteredBinder,
        private readonly parameterBinder: ParameteredBinder<ParameterType>,
        private readonly returnTypedBinder: ReturnTypedBinder,
        private readonly overloadSignaturedBinder: OverloadSignaturedBinder,
        private readonly documentationedBinder: DocumentationedBinder
    ) {
    }

    protected abstract getUserDefinedTypeGuard(): definitions.UserDefinedTypeGuardDefinition | null;
    protected abstract getIsGenerator(): boolean;

    bind(def: definitions.BaseFunctionDefinition<ParameterType, any>) {
        this.baseDefinitionBinder.bind(def);
        this.namedBinder.bind(def);
        this.typeParameterBinder.bind(def);
        this.parameterBinder.bind(def);
        this.returnTypedBinder.bind(def);
        this.overloadSignaturedBinder.bind(def);
        this.documentationedBinder.bind(def);

        if (def.parameters.length > 0 && def.parameters[0].name === "this") {
            const thisParam = def.parameters.splice(0, 1)[0];
            def.thisType = thisParam.type;
        }

        def.isGenerator = this.getIsGenerator();
        def.userDefinedTypeGuard = this.getUserDefinedTypeGuard();

        if (def.userDefinedTypeGuard != null) {
            def.returnType.text = (def.userDefinedTypeGuard.parameterName || "this") + " is " + def.userDefinedTypeGuard.type.text;
        }
    }
}
