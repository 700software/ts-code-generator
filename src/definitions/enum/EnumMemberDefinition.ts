import {applyMixins} from "./../../utils";
import {NamedDefinition, BaseDefinition, DocumentationedDefinition} from "./../base";

export class EnumMemberDefinition extends BaseDefinition implements NamedDefinition, DocumentationedDefinition {
    value: number;

    // NamedDefinition
    name: string;
    // DocumentationedDefinition
    documentationComment: string;
}

applyMixins(EnumMemberDefinition, BaseDefinition, [NamedDefinition, DocumentationedDefinition]);
