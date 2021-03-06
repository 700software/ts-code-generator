import {CallSignatureStructure} from "./../../structures";
import {StructureFactory} from "./../../factories";
import {DefinitionUtils} from "./../../utils";
import {CallSignatureDefinition} from "./../general/CallSignatureDefinition";

export abstract class OverloadSignaturedDefinition {
    overloadSignatures: CallSignatureDefinition[] = [];

    addOverloadSignature(structure: CallSignatureStructure) {
        const def = new StructureFactory().getCallSignature(structure);
        this.overloadSignatures.push(def);
        return def;
    }

    getOverloadSignature(searchFunction: (method: CallSignatureDefinition) => boolean) {
        return DefinitionUtils.getDefinitionFromListByFunc(this.overloadSignatures, searchFunction);
    }
}
