import {InterfacePropertyDefinition} from "./../../../definitions";
import {BasePropertyBinder, DocumentationedBinder} from "./../base";
import {IBaseBinder} from "./../IBaseBinder";

export abstract class InterfacePropertyBinder implements IBaseBinder {
    constructor(
        private readonly basePropertyBinder: BasePropertyBinder,
        private readonly documentationedBinder: DocumentationedBinder
    ) {
    }

    bind(def: InterfacePropertyDefinition) {
        this.basePropertyBinder.bind(def);
        this.documentationedBinder.bind(def);
    }
}
