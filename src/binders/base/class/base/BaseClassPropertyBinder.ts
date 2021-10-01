import {BaseClassPropertyDefinition} from "./../../../../definitions";
import {DecoratableBinder, BaseObjectPropertyBinder, DocumentationedBinder} from "./../../base";
import {ScopedBinder} from "./ScopedBinder";

export abstract class BaseClassPropertyBinder {
    constructor(
        private readonly objectPropertyBinder: BaseObjectPropertyBinder,
        private readonly decoratableBinder: DecoratableBinder,
        private readonly scopedBinder: ScopedBinder,
        private readonly documentationedBinder: DocumentationedBinder
    ) {
    }

    bind(def: BaseClassPropertyDefinition) {
        this.objectPropertyBinder.bind(def);
        this.decoratableBinder.bind(def);
        this.scopedBinder.bind(def);
        this.documentationedBinder.bind(def);
    }
}
