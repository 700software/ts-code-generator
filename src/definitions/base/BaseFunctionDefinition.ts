import {CallSignatureStructure, TypeParameterStructure, UserDefinedTypeGuardStructure} from "./../../structures";
import {StructureFactory} from "./../../factories";
import {applyMixins} from "./../../utils";
import {TypeDefinition} from "./../expression";
import {TypeParameterDefinition, CallSignatureDefinition, UserDefinedTypeGuardDefinition} from "./../general";
import {BaseParameterDefinition} from "./BaseParameterDefinition";
import {NamedDefinition} from "./NamedDefinition";
import {TypeParameteredDefinition} from "./TypeParameteredDefinition";
import {BaseDefinition} from "./BaseDefinition";
import {ParameteredDefinition} from "./ParameteredDefinition";
import {ReturnTypedDefinition} from "./ReturnTypedDefinition";
import {ThisTypedDefinition} from "./ThisTypedDefinition";
import {OverloadSignaturedDefinition} from "./OverloadSignaturedDefinition";
import {DocumentationedDefinition} from "./DocumentationedDefinition";

export abstract class BaseFunctionDefinition<ParameterType extends BaseParameterDefinition, ParameterStructureType>
        extends BaseDefinition
        implements NamedDefinition, TypeParameteredDefinition, ParameteredDefinition<ParameterType, ParameterStructureType>, ReturnTypedDefinition,
            ThisTypedDefinition, OverloadSignaturedDefinition, DocumentationedDefinition {
    isGenerator: boolean;
    userDefinedTypeGuard: UserDefinedTypeGuardDefinition | null;

    setUserDefinedTypeGuard(structure: UserDefinedTypeGuardStructure) {
        this.userDefinedTypeGuard = new StructureFactory().getUserDefinedTypeGuard(structure);
        return this;
    }

    // NamedDefinition
    name: string;
    // ParameteredDefinition
    parameters: ParameterType[];
    abstract addParameter(structure: ParameterStructureType): ParameterType;
    getParameter: (nameOrSearchFunction: string | ((parameter: ParameterType) => boolean)) => (ParameterType | null);
    // ThisTypedDefinition
    thisType: TypeDefinition | null;
    setThisType: (textOrDefinition: string | NamedDefinition, typeArguments?: string[]) => this;
    // ReturnTyped
    returnType: TypeDefinition;
    setReturnType: (text: string) => this;
    // TypeParameteredDefinition
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => (TypeParameterDefinition | null);
    // OverloadSignaturedDefinition
    overloadSignatures: CallSignatureDefinition[];
    addOverloadSignature: (structure: CallSignatureStructure) => CallSignatureDefinition;
    getOverloadSignature: (searchFunction: (method: CallSignatureDefinition) => boolean) => (CallSignatureDefinition | null);
    // DocumentationedDefintiion
    documentationComment: string;
}

applyMixins(BaseFunctionDefinition, BaseDefinition, [NamedDefinition, TypeParameteredDefinition, ParameteredDefinition, ReturnTypedDefinition, ThisTypedDefinition,
    OverloadSignaturedDefinition, DocumentationedDefinition]);
