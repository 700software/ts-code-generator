import {DecoratableDefinition, DecoratorDefinition} from "./../../../definitions";

export abstract class DecoratableBinder {
    abstract getDecorators(): DecoratorDefinition[];

    bind(def: DecoratableDefinition) {
        def.decorators.push(...this.getDecorators());
    }
}
