import {StructureFactory} from "./../../factories";
import {applyMixins} from "./../../utils";
import {NamedDefinition, BaseDefinition} from "./../base";
import {ExpressionDefinition} from "./../expression";

export class DecoratorDefinition extends BaseDefinition implements NamedDefinition {
    // ReSharper disable once InconsistentNaming
    private _isDecoratorFactory: boolean;

    arguments: ExpressionDefinition[] = [];

    get isDecoratorFactory() {
        return this._isDecoratorFactory || this.arguments.length > 0;
    }

    set isDecoratorFactory(value: boolean) {
        this._isDecoratorFactory = value;
    }

    addArgument(text: string) {
        const def = new StructureFactory().getTypeFromText(text);
        this.arguments.push(def);
        return def;
    }

    // NamedDefinition
    name: string;
}

applyMixins(DecoratorDefinition, BaseDefinition, [NamedDefinition]);
