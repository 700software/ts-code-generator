import {StructureFactory} from "./../../factories";
import {ExpressionDefinition} from "./../expression";

export abstract class DefaultExpressionedDefinition {
    defaultExpression: ExpressionDefinition | null;

    setDefaultExpression(text: string) {
        this.defaultExpression = new StructureFactory().getTypeFromText(text);
        return this;
    }
}
