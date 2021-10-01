import CodeBlockWriter from "code-block-writer";
import {ClassConstructorDefinition} from "./../definitions";
import {WriteFlags} from "./../WriteFlags";
import {BaseDefinitionWriter} from "./BaseDefinitionWriter";
import {DocumentationedWriter} from "./DocumentationedWriter";
import {FunctionBodyWriter} from "./FunctionBodyWriter";
import {ParametersWriter} from "./ParametersWriter";
import {ScopeWriter} from "./ScopeWriter";

export class ClassConstructorWriter {
    constructor(
        private readonly writer: CodeBlockWriter,
        private readonly baseDefinitionWriter: BaseDefinitionWriter,
        private readonly documentationedWriter: DocumentationedWriter,
        private readonly parametersWriter: ParametersWriter,
        private readonly functionBodyWriter: FunctionBodyWriter,
        private readonly scopeWriter: ScopeWriter
    ) {
    }

    shouldWriteConstructor(def: ClassConstructorDefinition, flags: WriteFlags) {
        return (def.parameters.length > 0 || this.functionBodyWriter.willWriteFunctionBody(def, flags) || (flags & WriteFlags.HideFunctionBodies) !== 0);
    }

    write(def: ClassConstructorDefinition, flags: WriteFlags) {
        this.baseDefinitionWriter.writeWrap(def, () => {
            def.overloadSignatures.forEach(signatureDef => {
                this.writeStartOfConstructor(def);
                this.parametersWriter.write(signatureDef, flags);
                this.writer.write(";").newLine();
            });
            this.writeStartOfConstructor(def);
            this.parametersWriter.write(def, flags);
            this.functionBodyWriter.write(def, flags);
        });
    }

    private writeStartOfConstructor(def: ClassConstructorDefinition) {
        this.documentationedWriter.write(def);
        this.scopeWriter.writeScope(def.scope);
        this.writer.write("constructor");
    }
}
