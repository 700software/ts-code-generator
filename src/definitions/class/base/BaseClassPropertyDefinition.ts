import {applyMixins} from "./../../../utils";
import {DecoratorStructure} from "./../../../structures";
import {DecoratableDefinition, BaseObjectPropertyDefinition, DocumentationedDefinition} from "./../../base";
import {DecoratorDefinition} from "./../../general";
import {Scope} from "./../Scope";
import {ScopedDefinition} from "./ScopedDefinition";

export class BaseClassPropertyDefinition
        extends BaseObjectPropertyDefinition
        implements DecoratableDefinition, ScopedDefinition, DocumentationedDefinition {
    // DecoratableDefinition
    decorators: DecoratorDefinition[];
    addDecorator: (structure: DecoratorStructure) => DecoratorDefinition;
    getDecorator: (nameOrSearchFunction: string | ((decorator: DecoratorDefinition) => boolean)) => (DecoratorDefinition | null);
    // ScopeDefinition
    scope: Scope;
    // DocumentationedDefinition
    documentationComment: string;
}

applyMixins(BaseClassPropertyDefinition, BaseObjectPropertyDefinition, [DecoratableDefinition, ScopedDefinition, DocumentationedDefinition]);
