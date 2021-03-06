import {TypeParameterStructure, CallSignatureParameterStructure} from "./../../structures";
import {StructureFactory} from "./../../factories";
import {applyMixins} from "./../../utils";
import {TypeParameteredDefinition, BaseDefinition, ReturnTypedDefinition, ParameteredDefinition, DocumentationedDefinition} from "./../base";
import {TypeParameterDefinition} from "./../general";
import {TypeDefinition} from "./../expression";
import {CallSignatureParameterDefinition} from "./CallSignatureParameterDefinition";

export class CallSignatureDefinition
        extends BaseDefinition
        implements TypeParameteredDefinition, ParameteredDefinition<CallSignatureParameterDefinition, CallSignatureParameterStructure>, ReturnTypedDefinition,
            DocumentationedDefinition {
    addParameter(structure: CallSignatureParameterStructure) {
        const def = new StructureFactory().getCallSignatureParameter(structure);
        this.parameters.push(def);
        return def;
    }

    getMinArgumentCount() {
        return this.parameters.filter(p => !p.isOptional && !p.isRestParameter).length;
    }

    // ParameteredDefinition
    parameters: CallSignatureParameterDefinition[];
    getParameter: (nameOrSearchFunction: string | ((parameter: CallSignatureParameterDefinition) => boolean)) => (CallSignatureParameterDefinition | null);
    // ReturnTyped
    returnType: TypeDefinition;
    setReturnType: (text: string) => this;
    // TypeParameteredDefinition
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => (TypeParameterDefinition | null);
    // DocumentationedDefinition
    documentationComment: string;
}

applyMixins(CallSignatureDefinition, BaseDefinition, [TypeParameteredDefinition, ParameteredDefinition, ReturnTypedDefinition, DocumentationedDefinition]);
