import {applyMixins} from "./../../utils";
import {BasePropertyDefinition, DocumentationedDefinition} from "./../base";

export class InterfacePropertyDefinition extends BasePropertyDefinition implements DocumentationedDefinition {
    // ReSharper disable once InconsistentNaming
    // tslint:disable-next-line:no-unused-variable
    private _interfacePropertyBrand: string; // to make structural typing happy // todo: what other type has the same structure as this? Next time leave a comment!
    // DocumentationedDefinition
    documentationComment: string;
}

applyMixins(InterfacePropertyDefinition, BasePropertyDefinition, [DocumentationedDefinition]);
