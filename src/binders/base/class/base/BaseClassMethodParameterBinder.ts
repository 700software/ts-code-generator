import {BaseClassMethodParameterDefinition} from "./../../../../definitions";
import {BaseParameterBinder, DecoratableBinder} from "./../../base";
import {ScopedBinder} from "./ScopedBinder";

export abstract class BaseClassMethodParameterBinder {
    constructor(
        private readonly baseParameterBinder: BaseParameterBinder,
        private readonly decoratableBinder: DecoratableBinder,
        private readonly scopedBinder: ScopedBinder
    ) {
    }

    bind(def: BaseClassMethodParameterDefinition) {
        this.baseParameterBinder.bind(def);
        this.decoratableBinder.bind(def);
        this.scopedBinder.bind(def);
    }
}
