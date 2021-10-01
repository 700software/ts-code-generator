import CodeBlockWriter from "code-block-writer";

export function createCallSignature(structure?: CallSignatureStructure): CallSignatureDefinition;

export function createCallSignatureParameter(structure: CallSignatureParameterStructure): CallSignatureParameterDefinition;

export function createClass(structure: ClassStructure): ClassDefinition;

export function createClassConstructor(structure?: ClassConstructorStructure): ClassConstructorDefinition;

export function createClassConstructorParameter(structure: ClassConstructorParameterStructure): ClassConstructorParameterDefinition;

export function createClassMethod(structure: ClassMethodStructure): ClassMethodDefinition;

export function createClassMethodParameter(structure: ClassMethodParameterStructure): ClassMethodParameterDefinition;

export function createClassProperty(structure: ClassPropertyStructure): ClassPropertyDefinition;

export function createClassStaticMethod(structure: ClassStaticMethodStructure): ClassStaticMethodDefinition;

export function createClassStaticMethodParameter(structure: ClassStaticMethodParameterStructure): ClassStaticMethodParameterDefinition;

export function createClassStaticProperty(structure: ClassStaticPropertyStructure): ClassStaticPropertyDefinition;

export function createDecorator(structure: DecoratorStructure): DecoratorDefinition;

export function createEnum(structure: EnumStructure): EnumDefinition;

export function createEnumMember(structure: EnumMemberStructure): EnumMemberDefinition;

export function createFile(structure?: FileStructure): FileDefinition;

export function createFunction(structure: FunctionStructure): FunctionDefinition;

export function createFunctionParameter(structure: FunctionParameterStructure): FunctionParameterDefinition;

export function createImport(structure: ImportStructure): ImportDefinition;

export function createIndexSignature(structure: IndexSignatureStructure): IndexSignatureDefinition;

export function createInterface(structure: InterfaceStructure): InterfaceDefinition;

export function createInterfaceMethod(structure: InterfaceMethodStructure): InterfaceMethodDefinition;

export function createInterfaceMethodParameter(structure: InterfaceMethodParameterStructure): InterfaceMethodParameterDefinition;

export function createInterfaceProperty(structure: InterfacePropertyStructure): InterfacePropertyDefinition;

export function createNamespace(structure: NamespaceStructure): NamespaceDefinition;

export function createReExport(structure: ReExportStructure): ReExportDefinition;

export function createTypeAlias(structure: TypeAliasStructure): TypeAliasDefinition;

export function createTypeParameter(structure: TypeParameterStructure): TypeParameterDefinition;

export function createNamedImportPart(structure: NamedImportPartStructure): NamedImportPartDefinition;

export function createVariable(structure: VariableStructure): VariableDefinition;

export abstract class BaseDefinition {
    onBeforeWrite: null | ((writer: CodeBlockWriter) => void);
    onAfterWrite: null | ((writer: CodeBlockWriter) => void);

    constructor();
}

export class FunctionBodyWriteableDefinition {
    onWriteFunctionBody: null | ((writer: CodeBlockWriter) => void);
}

export abstract class NamedDefinition {
    name: string;
}

export abstract class OptionallyNamedDefinition {
    name: null | string;
}

export abstract class OrderableDefinition {
    order: number;
}

export abstract class OptionalDefinition {
    isOptional: boolean;
}

export abstract class AbstractableDefinition {
    isAbstract: boolean;
}

export abstract class AmbientableDefinition {
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
}

export abstract class AsyncableDefinition {
    isAsync: boolean;
}

export abstract class DocumentationedDefinition {
    documentationComment: string;
}

export abstract class ThisTypedDefinition {
    thisType: null | TypeDefinition;

    setThisType(definition: NamedDefinition, typeArguments?: undefined | string[]): this;
    setThisType(text: string): this;
}

export abstract class TypedDefinition {
    type: TypeDefinition;

    setType(definition: NamedDefinition, typeArguments?: undefined | string[]): this;
    setType(text: string): this;
}

export abstract class DefaultExpressionedDefinition {
    defaultExpression: null | ExpressionDefinition;

    setDefaultExpression(text: string): this;
}

export abstract class DecoratableDefinition {
    decorators: DecoratorDefinition[];

    addDecorator(structure: DecoratorStructure): DecoratorDefinition;
    getDecorator(nameOrSearchFunction: string | ((decorator: DecoratorDefinition) => boolean)): null | DecoratorDefinition;
}

export abstract class ExportableDefinition {
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
}

export abstract class BasePropertyDefinition extends BaseDefinition implements NamedDefinition, OptionalDefinition, TypedDefinition, ReadonlyableDefinition {
    name: string;
    isOptional: boolean;
    type: TypeDefinition;
    isReadonly: boolean;

    setType(definition: NamedDefinition, typeArguments?: string[]): this;
    setType(text: string): this;
}

export abstract class TypeParameteredDefinition {
    typeParameters: TypeParameterDefinition[];

    addTypeParameter(structure: TypeParameterStructure): TypeParameterDefinition;
    getTypeParameter(nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)): null | TypeParameterDefinition;
}

export abstract class BaseObjectPropertyDefinition extends BasePropertyDefinition implements DefaultExpressionedDefinition {
    defaultExpression: null | ExpressionDefinition;
    setDefaultExpression: (text: string) => this;
}

export abstract class BaseFunctionDefinition<ParameterType extends BaseParameterDefinition, ParameterStructureType> extends BaseDefinition implements NamedDefinition, TypeParameteredDefinition, ParameteredDefinition<ParameterType, ParameterStructureType>, ReturnTypedDefinition, ThisTypedDefinition, OverloadSignaturedDefinition, DocumentationedDefinition {
    isGenerator: boolean;
    userDefinedTypeGuard: null | UserDefinedTypeGuardDefinition;
    name: string;
    parameters: ParameterType[];
    getParameter: (nameOrSearchFunction: string | ((parameter: ParameterType) => boolean)) => ParameterType | null;
    thisType: null | TypeDefinition;
    setThisType: (textOrDefinition: string | NamedDefinition, typeArguments?: string[] | undefined) => this;
    returnType: TypeDefinition;
    setReturnType: (text: string) => this;
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => TypeParameterDefinition | null;
    overloadSignatures: CallSignatureDefinition[];
    addOverloadSignature: (structure: CallSignatureStructure) => CallSignatureDefinition;
    getOverloadSignature: (searchFunction: (method: CallSignatureDefinition) => boolean) => CallSignatureDefinition | null;
    documentationComment: string;

    setUserDefinedTypeGuard(structure: UserDefinedTypeGuardStructure): this;
    abstract addParameter(structure: ParameterStructureType): ParameterType;
}

export interface BaseParameterDefinitionConstructor<ParameterType> {
    new(): ParameterType;
}

export abstract class BaseParameterDefinition extends BaseDefinition implements OptionallyNamedDefinition, OptionalDefinition, TypedDefinition, DefaultExpressionedDefinition {
    isRestParameter: boolean;
    destructuringProperties: ObjectPropertyDefinition[];
    name: null | string;
    isOptional: boolean;
    type: TypeDefinition;
    defaultExpression: null | ExpressionDefinition;
    setDefaultExpression: (text: string) => this;

    addDestructuringProperty(structure: ObjectPropertyStructure): ObjectPropertyDefinition;
    getDestructuringProperty(nameOrSearchFunction: string | ((property: ObjectPropertyDefinition) => boolean)): null | ObjectPropertyDefinition;
    setType(definition: NamedDefinition, typeArguments?: string[]): this;
    setType(text: string): this;
}

export abstract class ParameteredDefinition<ParameterType extends BaseParameterDefinition, ParameterStructureType> {
    parameters: ParameterType[];

    abstract addParameter(structure: ParameterStructureType): ParameterType;
    getParameter(nameOrSearchFunction: string | ((parameter: ParameterType) => boolean)): null | ParameterType;
}

export abstract class ReadonlyableDefinition {
    isReadonly: boolean;
}

export abstract class ReturnTypedDefinition {
    returnType: TypeDefinition;

    setReturnType(text: string): this;
}

export abstract class ModuledDefinition {
    namespaces: NamespaceDefinition[];
    classes: ClassDefinition[];
    interfaces: InterfaceDefinition[];
    enums: EnumDefinition[];
    functions: FunctionDefinition[];
    variables: VariableDefinition[];
    typeAliases: TypeAliasDefinition[];

    addClass(structure: ClassStructure): ClassDefinition;
    addEnum(structure: EnumStructure): EnumDefinition;
    addFunction(structure: FunctionStructure): FunctionDefinition;
    addInterface(structure: InterfaceStructure): InterfaceDefinition;
    addNamespace(structure: NamespaceStructure): NamespaceDefinition;
    addTypeAlias(structure: TypeAliasStructure): TypeAliasDefinition;
    addVariable(structure: VariableStructure): VariableDefinition;
    getClass(nameOrSearchFunction: string | ((classDef: ClassDefinition) => boolean)): null | ClassDefinition;
    getEnum(nameOrSearchFunction: string | ((enumDef: EnumDefinition) => boolean)): null | EnumDefinition;
    getFunction(nameOrSearchFunction: string | ((functionDef: FunctionDefinition) => boolean)): null | FunctionDefinition;
    getInterface(nameOrSearchFunction: string | ((interfaceDef: InterfaceDefinition) => boolean)): null | InterfaceDefinition;
    getNamespace(nameOrSearchFunction: string | ((namespaceDef: NamespaceDefinition) => boolean)): null | NamespaceDefinition;
    getTypeAlias(nameOrSearchFunction: string | ((typeAliasDef: TypeAliasDefinition) => boolean)): null | TypeAliasDefinition;
    getVariable(nameOrSearchFunction: string | ((variableDef: VariableDefinition) => boolean)): null | VariableDefinition;
    directlyContains(def: ExportableDefinitions): boolean;
    getNamespacesToDefinition(searchDef: ExportableDefinitions): null | NamespaceDefinition[];
    getExports(): ExportableDefinitions[];
    getMembers(): ExportableDefinitions[];
    setOrderOfMember(order: number, member: ExportableDefinitions): this;
}

export abstract class OverloadSignaturedDefinition {
    overloadSignatures: CallSignatureDefinition[];

    addOverloadSignature(structure: CallSignatureStructure): CallSignatureDefinition;
    getOverloadSignature(searchFunction: (method: CallSignatureDefinition) => boolean): null | CallSignatureDefinition;
}

export class CallSignatureDefinition extends BaseDefinition implements TypeParameteredDefinition, ParameteredDefinition<CallSignatureParameterDefinition, CallSignatureParameterStructure>, ReturnTypedDefinition, DocumentationedDefinition {
    parameters: CallSignatureParameterDefinition[];
    getParameter: (nameOrSearchFunction: string | ((parameter: CallSignatureParameterDefinition) => boolean)) => CallSignatureParameterDefinition | null;
    returnType: TypeDefinition;
    setReturnType: (text: string) => this;
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => TypeParameterDefinition | null;
    documentationComment: string;

    addParameter(structure: CallSignatureParameterStructure): CallSignatureParameterDefinition;
    getMinArgumentCount(): number;
}

export class CallSignatureParameterDefinition extends BaseParameterDefinition {
}

export class IndexSignatureDefinition extends BaseDefinition implements ReturnTypedDefinition, ReadonlyableDefinition {
    keyName: string;
    keyType: TypeDefinition;
    returnType: TypeDefinition;
    setReturnType: (text: string) => this;
    isReadonly: boolean;

    setKeyType(text: string): this;
}

export class TypeParameterDefinition extends BaseDefinition implements NamedDefinition {
    constraintType: null | TypeDefinition;
    name: string;

    setConstraintType(definition: NamedDefinition, typeArguments?: undefined | string[]): this;
    setConstraintType(text: string): this;
}

export class TypePropertyDefinition extends BasePropertyDefinition {
}

export class TypeAliasDefinition extends BaseDefinition implements NamedDefinition, AmbientableDefinition, ExportableDefinition, OrderableDefinition, TypedDefinition, TypeParameteredDefinition, DocumentationedDefinition {
    name: string;
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
    order: number;
    type: TypeDefinition;
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => TypeParameterDefinition | null;
    documentationComment: string;

    write(writeOptions?: undefined | WriteOptions): string;
    setType(definition: NamedDefinition, typeArguments?: string[]): this;
    setType(text: string): this;
}

export class DecoratorDefinition extends BaseDefinition implements NamedDefinition {
    arguments: ExpressionDefinition[];
    isDecoratorFactory: boolean;
    name: string;

    addArgument(text: string): TypeDefinition;
}

export class ObjectPropertyDefinition extends BaseObjectPropertyDefinition {
}

export class UserDefinedTypeGuardDefinition extends BaseDefinition {
    parameterName: string;
    type: TypeDefinition;
}

export class BaseExpressionDefinition extends BaseDefinition {
    text: string;
}

export abstract class BaseTypeDefinition extends BaseExpressionDefinition {
    arrayElementType: null | TypeDefinition;
    intersectionTypes: TypeDefinition[];
    unionTypes: TypeDefinition[];
    definitions: (EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition)[];
    properties: TypePropertyDefinition[];
    typeArguments: TypeDefinition[];
    text: string;

    getAllDefinitions(): (EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition)[];
    getIntersectionType(searchFunction: (definition: TypeDefinition) => boolean): null | TypeDefinition;
    getUnionType(searchFunction: (definition: TypeDefinition) => boolean): null | TypeDefinition;
    getDefinition(searchFunction: (definition: EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition) => boolean): null | EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition;
    getProperty(searchFunctionOrName: string | ((property: TypePropertyDefinition) => boolean)): null | TypePropertyDefinition;
    getTypeArgument(searchFunction: (typeArgument: TypeDefinition) => boolean): null | TypeDefinition;
    isArrayType(): boolean;
}

export class ExpressionDefinition extends BaseExpressionDefinition {
}

export class TypeDefinition extends BaseTypeDefinition {
    callSignatures: CallSignatureDefinition[];
    node: null | TypeNodeDefinition;

    getCallSignature(searchFunction: (typeDefinition: CallSignatureDefinition) => boolean): null | CallSignatureDefinition;
}

export class TypeNodeDefinition extends BaseTypeDefinition implements TypeParameteredDefinition, ParameteredDefinition<TypeFunctionParameterDefinition, TypeFunctionParameterStructure> {
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => TypeParameterDefinition | null;
    parameters: TypeFunctionParameterDefinition[];
    getParameter: (nameOrSearchFunction: string | ((parameter: TypeFunctionParameterDefinition) => boolean)) => TypeFunctionParameterDefinition | null;
    addParameter: (structure: TypeFunctionParameterStructure) => TypeFunctionParameterDefinition;
}

export class TypeFunctionParameterDefinition extends BaseParameterDefinition {
}

export class FunctionDefinition extends BaseFunctionDefinition<FunctionParameterDefinition, FunctionParameterStructure> implements ExportableDefinition, AmbientableDefinition, AsyncableDefinition, FunctionBodyWriteableDefinition, OrderableDefinition {
    isAsync: boolean;
    onWriteFunctionBody: null | ((writer: CodeBlockWriter) => void);
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
    order: number;

    addParameter(structure: FunctionParameterStructure): FunctionParameterDefinition;
    write(writeOptions?: undefined | WriteOptions): string;
}

export class FunctionParameterDefinition extends BaseParameterDefinition {
}

export class BaseClassMethodParameterDefinition extends BaseParameterDefinition implements DecoratableDefinition, ScopedDefinition {
    decorators: DecoratorDefinition[];
    addDecorator: (structure: DecoratorStructure) => DecoratorDefinition;
    getDecorator: (nameOrSearchFunction: string | ((decorator: DecoratorDefinition) => boolean)) => DecoratorDefinition | null;
    scope: Scope;
}

export abstract class BaseClassMethodDefinition<ParameterType extends BaseClassMethodParameterDefinition, ParameterStructureType> extends BaseFunctionDefinition<ParameterType, ParameterStructureType> implements AsyncableDefinition, DecoratableDefinition, ScopedDefinition, FunctionBodyWriteableDefinition {
    isAsync: boolean;
    onWriteFunctionBody: null | ((writer: CodeBlockWriter) => void);
    decorators: DecoratorDefinition[];
    addDecorator: (structure: DecoratorStructure) => DecoratorDefinition;
    getDecorator: (nameOrSearchFunction: string | ((decorator: DecoratorDefinition) => boolean)) => DecoratorDefinition | null;
    scope: Scope;

    abstract addParameter(structure: ParameterStructureType): ParameterType;
}

export class BaseClassPropertyDefinition extends BaseObjectPropertyDefinition implements DecoratableDefinition, ScopedDefinition, DocumentationedDefinition {
    decorators: DecoratorDefinition[];
    addDecorator: (structure: DecoratorStructure) => DecoratorDefinition;
    getDecorator: (nameOrSearchFunction: string | ((decorator: DecoratorDefinition) => boolean)) => DecoratorDefinition | null;
    scope: Scope;
    documentationComment: string;
}

export abstract class ScopedDefinition {
    scope: Scope;
}

export class ClassDefinition extends BaseDefinition implements NamedDefinition, DecoratableDefinition, OrderableDefinition, ExportableDefinition, TypeParameteredDefinition, AmbientableDefinition, AbstractableDefinition, DocumentationedDefinition {
    methods: ClassMethodDefinition[];
    properties: ClassPropertyDefinition[];
    staticMethods: ClassStaticMethodDefinition[];
    staticProperties: ClassStaticPropertyDefinition[];
    constructorDef: ClassConstructorDefinition;
    extendsTypes: TypeDefinition[];
    implementsTypes: TypeDefinition[];
    name: string;
    decorators: DecoratorDefinition[];
    addDecorator: (structure: DecoratorStructure) => DecoratorDefinition;
    getDecorator: (nameOrSearchFunction: string | ((decorator: DecoratorDefinition) => boolean)) => DecoratorDefinition | null;
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
    order: number;
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => TypeParameterDefinition | null;
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
    isAbstract: boolean;
    documentationComment: string;

    write(writeOptions?: undefined | WriteOptions): string;
    addMethod(structure: ClassMethodStructure): ClassMethodDefinition;
    addProperty(structure: ClassPropertyStructure): ClassPropertyDefinition;
    addStaticMethod(structure: ClassStaticMethodStructure): ClassStaticMethodDefinition;
    addStaticProperty(structure: ClassStaticPropertyStructure): ClassStaticPropertyDefinition;
    addExtends(definition: ClassDefinition, typeArguments?: undefined | string[]): TypeDefinition;
    addExtends(text: string): TypeDefinition;
    addImplements(definition: ClassDefinition | InterfaceDefinition, typeArguments?: undefined | string[]): TypeDefinition;
    addImplements(text: string): TypeDefinition;
    getPropertiesAndConstructorParameters(): (ClassConstructorParameterDefinition | ClassPropertyDefinition)[];
    getMethod(nameOrSearchFunction: string | ((method: ClassMethodDefinition) => boolean)): null | ClassMethodDefinition;
    getStaticMethod(nameOrSearchFunction: string | ((staticMethod: ClassStaticMethodDefinition) => boolean)): null | ClassStaticMethodDefinition;
    getProperty(nameOrSearchFunction: string | ((property: ClassPropertyDefinition) => boolean)): null | ClassPropertyDefinition;
    getStaticProperty(nameOrSearchFunction: string | ((staticProperty: ClassStaticPropertyDefinition) => boolean)): null | ClassStaticPropertyDefinition;
    setConstructor(structure: ClassConstructorStructure): this;
}

export class ClassMethodDefinition extends BaseClassMethodDefinition<ClassMethodParameterDefinition, ClassMethodParameterStructure> implements AbstractableDefinition {
    isAbstract: boolean;

    addParameter(structure: ClassMethodParameterStructure): ClassMethodParameterDefinition;
}

export class ClassMethodParameterDefinition extends BaseClassMethodParameterDefinition {
}

export class ClassPropertyDefinition extends BaseClassPropertyDefinition implements AbstractableDefinition {
    kind: ClassPropertyKind;
    isConstructorParameter: boolean;
    onWriteGetBody: null | ((writer: CodeBlockWriter) => void);
    onWriteSetBody: null | ((writer: CodeBlockWriter) => void);
    isAbstract: boolean;
}

export enum ClassPropertyKind {
    Normal = 0,
    GetAccessor = 1,
    SetAccessor = 2,
    GetSetAccessor = 3
}

export class ClassConstructorDefinition extends BaseDefinition implements ParameteredDefinition<ClassConstructorParameterDefinition, ClassConstructorParameterStructure>, FunctionBodyWriteableDefinition, ScopedDefinition, OverloadSignaturedDefinition, DocumentationedDefinition {
    onWriteFunctionBody: null | ((writer: CodeBlockWriter) => void);
    parameters: ClassConstructorParameterDefinition[];
    getParameter: (nameOrSearchFunction: string | ((parameter: ClassConstructorParameterDefinition) => boolean)) => ClassConstructorParameterDefinition | null;
    scope: Scope;
    overloadSignatures: CallSignatureDefinition[];
    addOverloadSignature: (structure: CallSignatureStructure) => CallSignatureDefinition;
    getOverloadSignature: (searchFunction: (method: CallSignatureDefinition) => boolean) => CallSignatureDefinition | null;
    documentationComment: string;

    addParameter(structure: ClassConstructorParameterStructure): ClassConstructorParameterDefinition;
}

export class ClassConstructorParameterDefinition extends BaseParameterDefinition implements DecoratableDefinition, ReadonlyableDefinition {
    scope: ClassConstructorParameterScope;
    decorators: DecoratorDefinition[];
    addDecorator: (structure: DecoratorStructure) => DecoratorDefinition;
    getDecorator: (nameOrSearchFunction: string | ((decorator: DecoratorDefinition) => boolean)) => DecoratorDefinition | null;
    isReadonly: boolean;

    toClassProperty(): ClassPropertyDefinition;
}

export type ClassConstructorParameterScope = "none" | "public" | "protected" | "private";

export const ClassConstructorParameterScope: { None: ClassConstructorParameterScope; Public: ClassConstructorParameterScope; Protected: ClassConstructorParameterScope; Private: ClassConstructorParameterScope; toScope(scope: ClassConstructorParameterScope): Scope; };

export class ClassStaticMethodDefinition extends BaseClassMethodDefinition<ClassStaticMethodParameterDefinition, ClassStaticMethodParameterStructure> {
    addParameter(structure: ClassStaticMethodParameterStructure): ClassStaticMethodParameterDefinition;
}

export class ClassStaticPropertyDefinition extends BaseClassPropertyDefinition {
}

export class ClassStaticMethodParameterDefinition extends BaseClassMethodParameterDefinition {
}

export type Scope = "public" | "protected" | "private";

export const Scope: { Public: Scope; Protected: Scope; Private: Scope; };

export class InterfaceDefinition extends BaseDefinition implements NamedDefinition, ExportableDefinition, TypeParameteredDefinition, AmbientableDefinition, OrderableDefinition, DocumentationedDefinition {
    methods: InterfaceMethodDefinition[];
    callSignatures: CallSignatureDefinition[];
    indexSignatures: IndexSignatureDefinition[];
    newSignatures: CallSignatureDefinition[];
    properties: InterfacePropertyDefinition[];
    extendsTypes: TypeDefinition[];
    name: string;
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
    order: number;
    typeParameters: TypeParameterDefinition[];
    addTypeParameter: (structure: TypeParameterStructure) => TypeParameterDefinition;
    getTypeParameter: (nameOrSearchFunction: string | ((typeParameter: TypeParameterDefinition) => boolean)) => TypeParameterDefinition | null;
    documentationComment: string;

    addCallSignature(structure: CallSignatureStructure): CallSignatureDefinition;
    addExtends(definition: ClassDefinition | InterfaceDefinition, typeArguments?: undefined | string[]): TypeDefinition;
    addExtends(text: string): TypeDefinition;
    addIndexSignature(structure: IndexSignatureStructure): IndexSignatureDefinition;
    addMethod(structure: InterfaceMethodStructure): InterfaceMethodDefinition;
    addNewSignature(structure: CallSignatureStructure): CallSignatureDefinition;
    addProperty(structure: InterfacePropertyStructure): InterfacePropertyDefinition;
    getCallSignature(searchFunction: (callSignature: CallSignatureDefinition) => boolean): null | CallSignatureDefinition;
    getIndexSignature(searchFunction: (indexSignature: IndexSignatureDefinition) => boolean): null | IndexSignatureDefinition;
    getMethod(nameOrSearchFunction: string | ((method: InterfaceMethodDefinition) => boolean)): null | InterfaceMethodDefinition;
    getNewSignature(searchFunction: (newSignature: CallSignatureDefinition) => boolean): null | CallSignatureDefinition;
    getProperty(nameOrSearchFunction: string | ((property: InterfacePropertyDefinition) => boolean)): null | InterfacePropertyDefinition;
    write(writeOptions?: undefined | WriteOptions): string;
}

export class InterfaceMethodParameterDefinition extends BaseParameterDefinition {
}

export class InterfaceMethodDefinition extends BaseFunctionDefinition<InterfaceMethodParameterDefinition, InterfaceMethodParameterStructure> {
    addParameter(structure: InterfaceMethodParameterStructure): InterfaceMethodParameterDefinition;
}

export class InterfacePropertyDefinition extends BasePropertyDefinition implements DocumentationedDefinition {
    documentationComment: string;
}

export class EnumDefinition extends BaseDefinition implements AmbientableDefinition, ExportableDefinition, OrderableDefinition, DocumentationedDefinition {
    isConst: boolean;
    members: EnumMemberDefinition[];
    name: string;
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
    order: number;
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
    documentationComment: string;

    addMember(structure: EnumMemberStructure): EnumMemberDefinition;
    getMember(nameOrSearchFunction: string | ((member: EnumMemberDefinition) => boolean)): null | EnumMemberDefinition;
    write(writeOptions?: undefined | WriteOptions): string;
}

export class EnumMemberDefinition extends BaseDefinition implements NamedDefinition, DocumentationedDefinition {
    value: number;
    name: string;
    documentationComment: string;
}

export type NamespaceDeclarationType = "namespace" | "module";

export const NamespaceDeclarationType: { Namespace: NamespaceDeclarationType; Module: NamespaceDeclarationType; };

export class NamespaceDefinition extends BaseDefinition implements NamedDefinition, ExportableDefinition, ModuledDefinition, AmbientableDefinition, OrderableDefinition, DocumentationedDefinition {
    declarationType: NamespaceDeclarationType;
    name: string;
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
    namespaces: NamespaceDefinition[];
    classes: ClassDefinition[];
    interfaces: InterfaceDefinition[];
    enums: EnumDefinition[];
    functions: FunctionDefinition[];
    variables: VariableDefinition[];
    typeAliases: TypeAliasDefinition[];
    getExports: () => ExportableDefinitions[];
    addClass: (structure: ClassStructure) => ClassDefinition;
    addEnum: (structure: EnumStructure) => EnumDefinition;
    addFunction: (structure: FunctionStructure) => FunctionDefinition;
    addInterface: (structure: InterfaceStructure) => InterfaceDefinition;
    addNamespace: (structure: NamespaceStructure) => NamespaceDefinition;
    addTypeAlias: (structure: TypeAliasStructure) => TypeAliasDefinition;
    addVariable: (structure: VariableStructure) => VariableDefinition;
    getClass: (nameOrSearchFunction: string | ((classDef: ClassDefinition) => boolean)) => ClassDefinition | null;
    getEnum: (nameOrSearchFunction: string | ((enumDef: EnumDefinition) => boolean)) => EnumDefinition | null;
    getFunction: (nameOrSearchFunction: string | ((functionDef: FunctionDefinition) => boolean)) => FunctionDefinition | null;
    getInterface: (nameOrSearchFunction: string | ((interfaceDef: InterfaceDefinition) => boolean)) => InterfaceDefinition | null;
    getNamespace: (nameOrSearchFunction: string | ((namespaceDef: NamespaceDefinition) => boolean)) => NamespaceDefinition | null;
    getTypeAlias: (nameOrSearchFunction: string | ((typeAliasDef: TypeAliasDefinition) => boolean)) => TypeAliasDefinition | null;
    getVariable: (nameOrSearchFunction: string | ((variableDef: VariableDefinition) => boolean)) => VariableDefinition | null;
    directlyContains: (def: ExportableDefinitions) => boolean;
    getNamespacesToDefinition: (searchDef: ExportableDefinitions) => NamespaceDefinition[] | null;
    getMembers: () => ExportableDefinitions[];
    setOrderOfMember: (order: number, member: ExportableDefinitions) => this;
    order: number;
    documentationComment: string;

    write(writeOptions?: undefined | WriteOptions): string;
}

export class FileDefinition extends BaseDefinition implements ModuledDefinition {
    fileName: string;
    imports: ImportDefinition[];
    reExports: ReExportDefinition[];
    defaultExportExpression: null | ExpressionDefinition;
    namespaces: NamespaceDefinition[];
    classes: ClassDefinition[];
    interfaces: InterfaceDefinition[];
    enums: EnumDefinition[];
    functions: FunctionDefinition[];
    variables: VariableDefinition[];
    typeAliases: TypeAliasDefinition[];
    addClass: (structure: ClassStructure) => ClassDefinition;
    addEnum: (structure: EnumStructure) => EnumDefinition;
    addFunction: (structure: FunctionStructure) => FunctionDefinition;
    addInterface: (structure: InterfaceStructure) => InterfaceDefinition;
    addNamespace: (structure: NamespaceStructure) => NamespaceDefinition;
    addTypeAlias: (structure: TypeAliasStructure) => TypeAliasDefinition;
    addVariable: (structure: VariableStructure) => VariableDefinition;
    getClass: (nameOrSearchFunction: string | ((classDef: ClassDefinition) => boolean)) => ClassDefinition | null;
    getEnum: (nameOrSearchFunction: string | ((enumDef: EnumDefinition) => boolean)) => EnumDefinition | null;
    getFunction: (nameOrSearchFunction: string | ((functionDef: FunctionDefinition) => boolean)) => FunctionDefinition | null;
    getInterface: (nameOrSearchFunction: string | ((interfaceDef: InterfaceDefinition) => boolean)) => InterfaceDefinition | null;
    getNamespace: (nameOrSearchFunction: string | ((namespaceDef: NamespaceDefinition) => boolean)) => NamespaceDefinition | null;
    getTypeAlias: (nameOrSearchFunction: string | ((typeAliasDef: TypeAliasDefinition) => boolean)) => TypeAliasDefinition | null;
    getVariable: (nameOrSearchFunction: string | ((variableDef: VariableDefinition) => boolean)) => VariableDefinition | null;
    directlyContains: (def: ExportableDefinitions) => boolean;
    getNamespacesToDefinition: (searchDef: ExportableDefinitions) => NamespaceDefinition[] | null;
    getMembers: () => ExportableDefinitions[];
    setOrderOfMember: (order: number, member: ExportableDefinitions) => this;

    addImport(structure: ImportStructure): ImportDefinition;
    addReExport(structure: ReExportStructure): ReExportDefinition;
    getModuleSpecifierToFile(file: FileDefinition): string;
    getImport(searchFunction: (importDef: ImportDefinition) => boolean): null | ImportDefinition;
    getReExport(searchFunction: (reExportDef: ReExportDefinition) => boolean): null | ReExportDefinition;
    getExports(): ExportableDefinitions[];
    write(writeOptions?: undefined | WriteOptions): string;
    writeExportsAsDefinitionFile(options: { imports: ImportStructure[]; writeOptions?: WriteOptions | undefined; }): string;
}

export class ImportDefinition extends BaseDefinition {
    fileName: string;
    moduleSpecifier: string;
    starImportName: null | string;
    defaultImport: null | DefaultImportPartDefinition;
    namedImports: NamedImportPartDefinition[];
    starImports: StarImportPartDefinition[];

    addNamedImport(structure: NamedImportPartStructure): NamedImportPartDefinition;
    getNamedImport(searchFunction: (importPart: NamedImportPartDefinition) => boolean): null | NamedImportPartDefinition;
    getStarImport(searchFunction: (importPart: StarImportPartDefinition) => boolean): null | StarImportPartDefinition;
    setDefaultImport(importName: string): this;
    write(writeOptions?: undefined | WriteOptions): string;
}

export class ReExportDefinition extends BaseDefinition {
    fileName: string;
    moduleSpecifier: string;
    starExports: StarImportPartDefinition[];
    namedExports: NamedImportPartDefinition[];

    getExports(): ExportableDefinitions[];
    addNamedExport(structure: NamedImportPartStructure): NamedImportPartDefinition;
    getNamedExport(searchFunction: (exportPart: NamedImportPartDefinition) => boolean): null | NamedImportPartDefinition;
    getStarExport(searchFunction: (exportPart: StarImportPartDefinition) => boolean): null | StarImportPartDefinition;
    write(writeOptions?: undefined | WriteOptions): string;
}

export class NamedImportPartDefinition extends BaseDefinition {
    definitions: ExportableDefinitions[];
    expression: null | ExpressionDefinition;
    alias: null | string;
    name: string;
}

export class StarImportPartDefinition extends BaseDefinition {
    definitions: ExportableDefinitions[];
    expression: null | ExpressionDefinition;
    name: string;
}

export class DefaultImportPartDefinition extends BaseDefinition {
    definitions: ExportableDefinitions[];
    expression: null | ExpressionDefinition;
    name: string;
}

export class VariableDefinition extends BaseDefinition implements NamedDefinition, ExportableDefinition, TypedDefinition, DefaultExpressionedDefinition, AmbientableDefinition, OrderableDefinition, DocumentationedDefinition {
    declarationType: VariableDeclarationType;
    name: string;
    isAmbient: boolean;
    hasDeclareKeyword: boolean;
    defaultExpression: null | ExpressionDefinition;
    setDefaultExpression: (text: string) => this;
    isExported: boolean;
    isNamedExportOfFile: boolean;
    isDefaultExportOfFile: boolean;
    order: number;
    type: TypeDefinition;
    documentationComment: string;

    write(writeOptions?: undefined | WriteOptions): string;
    setType(definition: NamedDefinition, typeArguments?: string[]): this;
    setType(text: string): this;
}

export type VariableDeclarationType = "var" | "let" | "const";

export const VariableDeclarationType: { Var: VariableDeclarationType; Let: VariableDeclarationType; Const: VariableDeclarationType; };

export class GlobalDefinition {
    files: FileDefinition[];

    addDefinitionAsImportToFile(opts: { definition: EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition; file: FileDefinition; alias?: string | undefined; }): void;
    addFile(structure: FileStructure): FileDefinition;
    getFile(fileNameOrSearchFunction: string | ((file: FileDefinition) => boolean)): null | FileDefinition;
    getFileOfDefinition(def: ExportableDefinitions): null | FileDefinition;
    getFileAndNamespacesToDefinition(def: ExportableDefinitions): null | { file: FileDefinition; namespaces: NamespaceDefinition[]; };
}

export type DecoratedDefinitions = ClassMethodParameterDefinition | ClassConstructorParameterDefinition | ClassMethodDefinition | ClassStaticMethodDefinition | ClassDefinition | ClassPropertyDefinition | ClassStaticPropertyDefinition;

export type TypeParameteredDefinitions = FunctionDefinition | ClassMethodDefinition | ClassStaticMethodDefinition | InterfaceMethodDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition;

export type ModuledDefinitions = NamespaceDefinition | FileDefinition;

export type WriteableDefinitions = EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition | FileDefinition;

export type ExportableDefinitions = EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition;

export type NodeDefinitions = EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ReExportDefinition | ClassDefinition | InterfaceDefinition | ImportDefinition | NamespaceDefinition;

export type ModuleMemberDefinitions = EnumDefinition | FunctionDefinition | VariableDefinition | TypeAliasDefinition | ClassDefinition | InterfaceDefinition | NamespaceDefinition;

export type BaseFunctionDefinitions = FunctionDefinition | ClassMethodDefinition | ClassStaticMethodDefinition | InterfaceMethodDefinition;

export type FunctionBodyWriteableDefinitions = FunctionDefinition | ClassMethodDefinition | ClassStaticMethodDefinition | ClassConstructorDefinition | InterfaceMethodDefinition;

export type ClassMethodDefinitions = ClassMethodDefinition | ClassStaticMethodDefinition;

export type ClassMethodParameterDefinitions = ClassMethodParameterDefinition | ClassStaticMethodParameterDefinition;

export type ParameterDefinitions = FunctionParameterDefinition | InterfaceMethodParameterDefinition | ClassMethodParameterDefinition | ClassStaticMethodParameterDefinition | ClassConstructorParameterDefinition | CallSignatureParameterDefinition | TypeFunctionParameterDefinition;

export type ParameteredDefinitions = CallSignatureDefinition | FunctionDefinition | ClassMethodDefinition | ClassStaticMethodDefinition | ClassConstructorDefinition | InterfaceMethodDefinition | TypeNodeDefinition;

export type PropertyDefinitions = InterfacePropertyDefinition | ClassPropertyDefinition | ClassStaticPropertyDefinition;

export type MethodDefinitions = ClassMethodDefinition | InterfaceMethodDefinition;

export type MethodParameterDefinitions = InterfaceMethodParameterDefinition | ClassMethodParameterDefinition;

export interface BaseStructure {
    onBeforeWrite?: undefined | ((writer: CodeBlockWriter) => void);
    onAfterWrite?: undefined | ((writer: CodeBlockWriter) => void);
}

export interface NamedStructure {
    name: string;
}

export interface OptionallyNamedStructure {
    name?: undefined | string;
}

export interface AbstractableStructure {
    isAbstract?: undefined | true | false;
}

export interface AmbientableStructure {
    isAmbient?: undefined | true | false;
    hasDeclareKeyword?: undefined | true | false;
}

export interface AsyncableStructure {
    isAsync?: undefined | true | false;
}

export interface DefaultExpressionedStructure {
    defaultExpression?: undefined | string;
}

export interface DecoratableStructure {
    decorators?: undefined | DecoratorStructure[];
}

export interface ExportableStructure {
    isExported?: undefined | true | false;
    isNamedExportOfFile?: undefined | true | false;
    isDefaultExportOfFile?: undefined | true | false;
}

export interface FunctionBodyWriteableStructure {
    onWriteFunctionBody?: undefined | ((writer: CodeBlockWriter) => void);
}

export interface DocumentationedStructure {
    documentationComment?: undefined | string;
}

export interface ModuledStructure {
    namespaces?: undefined | NamespaceStructure[];
    classes?: undefined | ClassStructure[];
    interfaces?: undefined | InterfaceStructure[];
    functions?: undefined | FunctionStructure[];
    enums?: undefined | EnumStructure[];
    variables?: undefined | VariableStructure[];
    typeAliases?: undefined | TypeAliasStructure[];
}

export interface OptionalStructure {
    isOptional?: undefined | true | false;
}

export interface BaseObjectPropertyStructure extends BasePropertyStructure, DefaultExpressionedStructure {
}

export interface TypedStructure {
    type?: undefined | string;
}

export interface BasePropertyStructure extends BaseStructure, NamedStructure, OptionalStructure, TypedStructure, ReadonlyableStructure {
}

export interface TypeParameteredStructure {
    typeParameters?: undefined | TypeParameterStructure[];
}

export interface BaseFunctionStructure<T extends BaseParameterStructure> extends BaseStructure, NamedStructure, TypeParameteredStructure, ParameteredStructure<T>, ReturnTypedStructure, OverloadSignaturedStructure, DocumentationedStructure {
    isGenerator?: undefined | true | false;
}

export interface BaseParameterStructure extends BaseStructure, OptionallyNamedStructure, OptionalStructure, TypedStructure, DefaultExpressionedStructure {
    isRestParameter?: undefined | true | false;
    destructuringProperties?: undefined | ObjectPropertyStructure[];
}

export interface ParameteredStructure<T extends BaseParameterStructure> {
    parameters?: undefined | T[];
}

export interface ReadonlyableStructure {
    isReadonly?: undefined | true | false;
}

export interface ReturnTypedStructure {
    returnType?: undefined | string;
}

export interface OverloadSignaturedStructure {
    overloadSignatures?: undefined | CallSignatureStructure[];
}

export interface CallSignatureStructure extends BaseStructure, TypeParameteredStructure, ParameteredStructure<CallSignatureParameterStructure>, ReturnTypedStructure, DocumentationedStructure {
}

export interface CallSignatureParameterStructure extends BaseParameterStructure {
}

export interface DecoratorStructure extends BaseStructure, NamedStructure {
    arguments?: undefined | string[];
    isDecoratorFactory?: undefined | true | false;
}

export interface IndexSignatureStructure extends BaseStructure, ReturnTypedStructure, ReadonlyableStructure {
    keyName: string;
    keyType?: undefined | string;
    returnType: string;
}

export interface ObjectPropertyStructure extends BaseObjectPropertyStructure {
}

export interface TypeAliasStructure extends BaseStructure, NamedStructure, ExportableStructure, TypedStructure, TypeParameteredStructure, AmbientableStructure, DocumentationedStructure {
    type: string;
}

export interface TypeParameterStructure extends BaseStructure, NamedStructure {
    constraintType?: undefined | string;
}

export interface TypePropertyStructure extends BasePropertyStructure {
}

export interface UserDefinedTypeGuardStructure extends BaseStructure {
    parameterName?: undefined | string;
    type: string;
}

export interface BaseClassMethodStructure<ParameterType extends BaseClassMethodParameterStructure> extends BaseFunctionStructure<ParameterType>, AsyncableStructure, DecoratableStructure, ScopedStructure, FunctionBodyWriteableStructure {
}

export interface BaseClassMethodParameterStructure extends BaseParameterStructure, DecoratableStructure {
}

export interface BaseClassPropertyStructure extends BaseObjectPropertyStructure, DecoratableStructure, ScopedStructure, DocumentationedStructure {
}

export interface ScopedStructure {
    scope?: undefined | "public" | "protected" | "private";
}

export interface ClassMethodParameterStructure extends BaseClassMethodParameterStructure {
}

export interface ClassMethodStructure extends BaseClassMethodStructure<ClassMethodParameterStructure>, AbstractableStructure {
}

export interface ClassPropertyStructure extends BaseClassPropertyStructure, AbstractableStructure {
    kind?: undefined | ClassPropertyKind;
    onWriteGetBody?: undefined | ((writer: CodeBlockWriter) => void);
    onWriteSetBody?: undefined | ((writer: CodeBlockWriter) => void);
}

export interface ClassConstructorStructure extends BaseStructure, ParameteredStructure<ClassConstructorParameterStructure>, FunctionBodyWriteableStructure, ScopedStructure, DocumentationedStructure, OverloadSignaturedStructure {
}

export interface ClassConstructorParameterStructure extends BaseParameterStructure, ReadonlyableStructure {
    scope?: undefined | "none" | "public" | "protected" | "private";
}

export interface ClassStaticMethodParameterStructure extends BaseClassMethodParameterStructure {
}

export interface ClassStaticMethodStructure extends BaseClassMethodStructure<ClassStaticMethodParameterStructure> {
}

export interface ClassStaticPropertyStructure extends BaseClassPropertyStructure {
}

export interface ClassStructure extends BaseStructure, NamedStructure, DecoratableStructure, ExportableStructure, TypeParameteredStructure, AmbientableStructure, AbstractableStructure, DocumentationedStructure {
    methods?: undefined | ClassMethodStructure[];
    properties?: undefined | ClassPropertyStructure[];
    staticMethods?: undefined | ClassStaticMethodStructure[];
    staticProperties?: undefined | ClassStaticPropertyStructure[];
    constructorDef?: undefined | ClassConstructorStructure;
    extendsTypes?: undefined | string[];
    implementsTypes?: undefined | string[];
}

export interface EnumStructure extends BaseStructure, NamedStructure, ExportableStructure, AmbientableStructure, DocumentationedStructure {
    isConst?: undefined | true | false;
    members?: undefined | EnumMemberStructure[];
}

export interface EnumMemberStructure extends BaseStructure, NamedStructure, DocumentationedStructure {
    value: number;
}

export interface TypeFunctionParameterStructure extends BaseParameterStructure {
}

export interface FileStructure extends BaseStructure, ModuledStructure {
    imports?: undefined | ImportStructure[];
    reExports?: undefined | ReExportStructure[];
    fileName?: undefined | string;
    defaultExportExpression?: undefined | string;
}

export interface NamedImportPartStructure {
    name: string;
    alias?: undefined | string;
}

export interface ImportStructure extends BaseStructure {
    moduleSpecifier: string;
    starImportName?: undefined | string;
    defaultImportName?: undefined | string;
    namedImports?: undefined | NamedImportPartStructure[];
}

export interface ReExportStructure extends BaseStructure {
    moduleSpecifier: string;
    namedExports?: undefined | NamedImportPartStructure[];
}

export interface FunctionStructure extends BaseFunctionStructure<FunctionParameterStructure>, AmbientableStructure, AsyncableStructure, ExportableStructure, FunctionBodyWriteableStructure {
}

export interface FunctionParameterStructure extends BaseParameterStructure {
}

export interface InterfaceMethodStructure extends BaseFunctionStructure<InterfaceMethodParameterStructure> {
}

export interface InterfaceMethodParameterStructure extends BaseParameterStructure {
}

export interface InterfacePropertyStructure extends BasePropertyStructure, DocumentationedStructure {
}

export interface InterfaceStructure extends BaseStructure, NamedStructure, ExportableStructure, TypeParameteredStructure, AmbientableStructure, DocumentationedStructure {
    callSignatures?: undefined | CallSignatureStructure[];
    extendsTypes?: undefined | string[];
    methods?: undefined | InterfaceMethodStructure[];
    newSignatures?: undefined | CallSignatureStructure[];
    indexSignatures?: undefined | IndexSignatureStructure[];
    properties?: undefined | InterfacePropertyStructure[];
}

export interface NamespaceStructure extends BaseStructure, NamedStructure, ExportableStructure, ModuledStructure, AmbientableStructure, DocumentationedStructure {
    declarationType?: undefined | "namespace" | "module";
}

export interface VariableStructure extends BaseStructure, NamedStructure, ExportableStructure, TypedStructure, DefaultExpressionedStructure, AmbientableStructure, DocumentationedStructure {
    declarationType?: undefined | "var" | "let" | "const";
}

export interface WriteOptions {
    newLine?: undefined | string;
    indentNumberOfSpaces?: undefined | number;
    useTabs?: undefined | true | false;
}

export abstract class AbstractableBinder {
    abstract getIsAbstract(): boolean;
    bind(def: AbstractableDefinition): void;
}

export abstract class AmbientableBinder {
    abstract getIsAmbient(): boolean;
    abstract getHasDeclareKeyword(): boolean;
    bind(def: AmbientableDefinition): void;
}

export abstract class AsyncableBinder {
    abstract getIsAsync(): boolean;
    bind(def: AsyncableDefinition): void;
}

export abstract class BaseDefinitionBinder {
    abstract getOnBeforeWrite(): null | ((writer: CodeBlockWriter) => void);
    abstract getOnAfterWrite(): null | ((writer: CodeBlockWriter) => void);
    bind(def: BaseDefinition): void;
}

export abstract class BaseFunctionBinder<ParameterType extends BaseParameterDefinition> {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, typeParameterBinder: TypeParameteredBinder, parameterBinder: ParameteredBinder<ParameterType>, returnTypedBinder: ReturnTypedBinder, overloadSignaturedBinder: OverloadSignaturedBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly typeParameterBinder: TypeParameteredBinder;
    private readonly parameterBinder: ParameteredBinder<ParameterType>;
    private readonly returnTypedBinder: ReturnTypedBinder;
    private readonly overloadSignaturedBinder: OverloadSignaturedBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    bind(def: BaseFunctionDefinition<ParameterType, any>): void;
}

export abstract class BaseObjectPropertyBinder implements IBaseBinder {
    constructor(basePropertyBinder: BasePropertyBinder, defaultExpressionedBinder: DefaultExpressionedBinder);

    private readonly basePropertyBinder: BasePropertyBinder;
    private readonly defaultExpressionedBinder: DefaultExpressionedBinder;

    bind(def: BaseObjectPropertyDefinition): void;
}

export abstract class BaseParameterBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, optionalBinder: OptionalBinder, typedBinder: TypedBinder, defaultExpressionedBinder: DefaultExpressionedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly optionalBinder: OptionalBinder;
    private readonly typedBinder: TypedBinder;
    private readonly defaultExpressionedBinder: DefaultExpressionedBinder;

    abstract getIsRestParameter(): boolean;
    abstract getDestructuringProperties(): ObjectPropertyDefinition[];
    bind(def: BaseParameterDefinition): void;
}

export abstract class BasePropertyBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, optionalBinder: OptionalBinder, typedBinder: TypedBinder, readonlyableBinder: ReadonlyableBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly optionalBinder: OptionalBinder;
    private readonly typedBinder: TypedBinder;
    private readonly readonlyableBinder: ReadonlyableBinder;

    bind(def: BasePropertyDefinition): void;
}

export abstract class DecoratableBinder {
    abstract getDecorators(): DecoratorDefinition[];
    bind(def: DecoratableDefinition): void;
}

export abstract class DefaultExpressionedBinder {
    abstract getDefaultExpression(): null | ExpressionDefinition;
    bind(def: DefaultExpressionedDefinition): void;
}

export abstract class ExportableBinder {
    abstract getIsExported(): boolean;
    abstract getIsDefaultExportOfFile(): boolean;
    abstract getIsNamedExportOfFile(): boolean;
    bind(def: ExportableDefinition): void;
}

export abstract class FunctionBodyWriteableBinder {
    abstract getOnWriteFunctionBody(): null | ((writer: CodeBlockWriter) => void);
    bind(def: FunctionBodyWriteableDefinition): void;
}

export abstract class DocumentationedBinder {
    abstract getDocumentationComment(): string;
    bind(def: DocumentationedDefinition): void;
}

export abstract class ModuledBinder {
    abstract getMembers(): NodeDefinitions[];
    bind(def: ModuledDefinitions, handleCustomDefinition?: undefined | ((def: NodeDefinitions) => void)): void;
}

export abstract class NamedBinder {
    abstract getName(): null | string;
    bind(def: NamedDefinition | OptionallyNamedDefinition): void;
}

export abstract class OptionalBinder {
    abstract getIsOptional(): boolean;
    bind(def: OptionalDefinition): void;
}

export abstract class ParameteredBinder<ParameterType extends BaseParameterDefinition> {
    abstract getParameters(): ParameterType[];
    bind(def: ParameteredDefinition<ParameterType, any>): void;
}

export abstract class ReadonlyableBinder {
    abstract getIsReadonly(): boolean;
    bind(def: ReadonlyableDefinition): void;
}

export abstract class ReturnTypedBinder {
    abstract getReturnType(): TypeDefinition;
    bind(def: ReturnTypedDefinition): void;
}

export abstract class TypedBinder {
    abstract getType(): TypeDefinition;
    bind(def: TypedDefinition): void;
}

export abstract class TypeParameteredBinder {
    abstract getTypeParameters(): TypeParameterDefinition[];
    bind(def: TypeParameteredDefinition): void;
}

export abstract class OverloadSignaturedBinder {
    bind(def: OverloadSignaturedDefinition): void;
}

export interface IBaseBinder {
    bind(def: BaseDefinition): void;
}

export abstract class BaseClassMethodBinder<ParameterType extends BaseClassMethodParameterDefinition> {
    constructor(baseFunctionBinder: BaseFunctionBinder<ParameterType>, decoratableBinder: DecoratableBinder, scopedBinder: ScopedBinder, asyncableBinder: AsyncableBinder, functionBodyWriteableBinder: FunctionBodyWriteableBinder);

    private readonly baseFunctionBinder: BaseFunctionBinder<ParameterType>;
    private readonly decoratableBinder: DecoratableBinder;
    private readonly scopedBinder: ScopedBinder;
    private readonly asyncableBinder: AsyncableBinder;
    private readonly functionBodyWriteableBinder: FunctionBodyWriteableBinder;

    bind(def: BaseClassMethodDefinition<ParameterType, any>): void;
}

export abstract class BaseClassMethodParameterBinder {
    constructor(baseParameterBinder: BaseParameterBinder, decoratableBinder: DecoratableBinder, scopedBinder: ScopedBinder);

    private readonly baseParameterBinder: BaseParameterBinder;
    private readonly decoratableBinder: DecoratableBinder;
    private readonly scopedBinder: ScopedBinder;

    bind(def: BaseClassMethodParameterDefinition): void;
}

export abstract class BaseClassPropertyBinder {
    constructor(objectPropertyBinder: BaseObjectPropertyBinder, decoratableBinder: DecoratableBinder, scopedBinder: ScopedBinder, documentationedBinder: DocumentationedBinder);

    private readonly objectPropertyBinder: BaseObjectPropertyBinder;
    private readonly decoratableBinder: DecoratableBinder;
    private readonly scopedBinder: ScopedBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    bind(def: BaseClassPropertyDefinition): void;
}

export abstract class ScopedBinder {
    abstract getScope(): Scope;
    bind(def: ScopedDefinition): void;
}

export class ClassMemberContainer {
    constructorDef: ClassConstructorDefinition;
    methods: ClassMethodDefinition[];
    properties: ClassPropertyDefinition[];
    staticMethods: ClassStaticMethodDefinition[];
    staticProperties: ClassStaticPropertyDefinition[];
}

export abstract class ClassBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, exportableBinder: ExportableBinder, ambientableBinder: AmbientableBinder, typeParameteredBinder: TypeParameteredBinder, abstractableBinder: AbstractableBinder, decoratableBinder: DecoratableBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly exportableBinder: ExportableBinder;
    private readonly ambientableBinder: AmbientableBinder;
    private readonly typeParameteredBinder: TypeParameteredBinder;
    private readonly abstractableBinder: AbstractableBinder;
    private readonly decoratableBinder: DecoratableBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    abstract getMembers(): ClassMemberContainer;
    abstract getExtendsTypes(): TypeDefinition[];
    abstract getImplementsTypes(): TypeDefinition[];
    bind(def: ClassDefinition): void;
}

export abstract class ClassConstructorBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, parameteredBinder: ParameteredBinder<ClassConstructorParameterDefinition>, functionBodyWriteableBinder: FunctionBodyWriteableBinder, scopedBinder: ScopedBinder, overloadSignaturedBinder: OverloadSignaturedBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly parameteredBinder: ParameteredBinder<ClassConstructorParameterDefinition>;
    private readonly functionBodyWriteableBinder: FunctionBodyWriteableBinder;
    private readonly scopedBinder: ScopedBinder;
    private readonly overloadSignaturedBinder: OverloadSignaturedBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    bind(def: ClassConstructorDefinition): void;
}

export abstract class ClassConstructorParameterBinder implements IBaseBinder {
    constructor(baseParameterBinder: BaseParameterBinder, decoratableBinder: DecoratableBinder, readonlyableBinder: ReadonlyableBinder);

    private readonly baseParameterBinder: BaseParameterBinder;
    private readonly decoratableBinder: DecoratableBinder;
    private readonly readonlyableBinder: ReadonlyableBinder;

    abstract getClassConstructorParameterScope(): ClassConstructorParameterScope;
    bind(def: ClassConstructorParameterDefinition): void;
}

export abstract class ClassMethodBinder implements IBaseBinder {
    constructor(baseClassMethodBinder: BaseClassMethodBinder<ClassMethodParameterDefinition>, abstractableBinder: AbstractableBinder);

    private readonly baseClassMethodBinder: BaseClassMethodBinder<ClassMethodParameterDefinition>;
    private readonly abstractableBinder: AbstractableBinder;

    bind(def: ClassMethodDefinition): void;
}

export abstract class ClassMethodParameterBinder implements IBaseBinder {
    constructor(baseClassMethodParameterBinder: BaseClassMethodParameterBinder);

    private readonly baseClassMethodParameterBinder: BaseClassMethodParameterBinder;

    bind(def: ClassMethodParameterDefinition): void;
}

export abstract class ClassPropertyBinder implements IBaseBinder {
    constructor(baseClassPropertyBinder: BaseClassPropertyBinder, abstractableBinder: AbstractableBinder);

    private readonly baseClassPropertyBinder: BaseClassPropertyBinder;
    private readonly abstractableBinder: AbstractableBinder;

    abstract getKind(): ClassPropertyKind;
    abstract getOnWriteGetBody(): null | ((writer: CodeBlockWriter) => void);
    abstract getOnWriteSetBody(): null | ((writer: CodeBlockWriter) => void);
    bind(def: ClassPropertyDefinition): void;
}

export abstract class ClassStaticMethodBinder implements IBaseBinder {
    constructor(baseClassMethodBinder: BaseClassMethodBinder<ClassStaticMethodParameterDefinition>);

    private readonly baseClassMethodBinder: BaseClassMethodBinder<ClassStaticMethodParameterDefinition>;

    bind(def: ClassStaticMethodDefinition): void;
}

export abstract class ClassStaticMethodParameterBinder implements IBaseBinder {
    constructor(baseClassMethodParameterBinder: BaseClassMethodParameterBinder);

    private readonly baseClassMethodParameterBinder: BaseClassMethodParameterBinder;

    bind(def: ClassStaticMethodParameterDefinition): void;
}

export abstract class ClassStaticPropertyBinder implements IBaseBinder {
    constructor(baseClassPropertyBinder: BaseClassPropertyBinder);

    private readonly baseClassPropertyBinder: BaseClassPropertyBinder;

    bind(def: ClassStaticPropertyDefinition): void;
}

export abstract class EnumBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, exportableBinder: ExportableBinder, ambientableBinder: AmbientableBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly exportableBinder: ExportableBinder;
    private readonly ambientableBinder: AmbientableBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    abstract getIsConst(): boolean;
    abstract getMembers(): EnumMemberDefinition[];
    bind(def: EnumDefinition): void;
}

export abstract class EnumMemberBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    abstract getValue(): number;
    bind(def: EnumMemberDefinition): void;
}

export abstract class BaseTypeBinder {
    constructor(expressionBinder: ExpressionBinder);

    private readonly expressionBinder: ExpressionBinder;

    abstract isArrayType(): boolean;
    abstract getArrayElementType(): null | TypeDefinition;
    abstract isIntersectionType(): boolean;
    abstract isUnionType(): boolean;
    abstract getUnionOrIntersectionTypes(): TypeDefinition[];
    abstract getProperties(): TypePropertyDefinition[];
    abstract getTypeArguments(): TypeDefinition[];
    bind(def: BaseTypeDefinition): void;
}

export abstract class ExpressionBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;

    abstract getText(): string;
    bind(def: ExpressionDefinition): void;
}

export abstract class TypeBinder {
    constructor(baseTypeBinder: BaseTypeBinder);

    private readonly baseTypeBinder: BaseTypeBinder;

    abstract getCallSignatures(): CallSignatureDefinition[];
    abstract getTypeNode(): null | TypeNodeDefinition;
    bind(def: TypeDefinition): void;
}

export abstract class TypeNodeBinder {
    constructor(baseTypeBinder: BaseTypeBinder, parameteredBinder: null | ParameteredBinder<TypeFunctionParameterDefinition>, typeParameteredBinder: null | TypeParameteredBinder);

    private readonly baseTypeBinder: BaseTypeBinder;
    private readonly parameteredBinder: null | ParameteredBinder<TypeFunctionParameterDefinition>;
    private readonly typeParameteredBinder: null | TypeParameteredBinder;

    bind(def: TypeNodeDefinition): void;
}

export abstract class TypeFunctionParameterBinder implements IBaseBinder {
    constructor(baseParameterBinder: BaseParameterBinder);

    private readonly baseParameterBinder: BaseParameterBinder;

    bind(def: TypeFunctionParameterDefinition): void;
}

export abstract class FileBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, moduledBinder: ModuledBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly moduledBinder: ModuledBinder;

    abstract getFileName(): string;
    abstract getDefaultExportExpression(): null | ExpressionDefinition;
    abstract getImports(): ImportDefinition[];
    abstract getReExports(): ReExportDefinition[];
    bind(def: FileDefinition): void;
}

export abstract class ImportBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;

    abstract getFileName(): string;
    abstract getModuleSpecifier(): string;
    abstract getIsStarImport(): boolean;
    abstract getStarImportName(): string;
    abstract getDefaultImport(): null | DefaultImportPartDefinition;
    abstract getNamedImports(): NamedImportPartDefinition[];
    abstract getStarImports(): StarImportPartDefinition[];
    bind(def: ImportDefinition): void;
}

export abstract class ReExportBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;

    abstract getFileName(): string;
    abstract getModuleSpecifier(): string;
    abstract getIsStarExport(): boolean;
    abstract getNamedExports(): NamedImportPartDefinition[];
    abstract getStarExports(): StarImportPartDefinition[];
    bind(def: ReExportDefinition): void;
}

export abstract class DefaultImportPartBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;

    abstract getName(): string;
    abstract getDefinitions(): ExportableDefinitions[];
    abstract getExpression(): null | ExpressionDefinition;
    bind(def: DefaultImportPartDefinition): void;
}

export abstract class NamedImportPartBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;

    abstract getName(): string;
    abstract getAlias(): null | string;
    abstract getDefinitions(): ExportableDefinitions[];
    abstract getExpression(): null | ExpressionDefinition;
    bind(def: NamedImportPartDefinition): void;
}

export abstract class StarImportPartBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;

    abstract getName(): string;
    abstract getDefinitions(): ExportableDefinitions[];
    abstract getExpression(): null | ExpressionDefinition;
    bind(def: StarImportPartDefinition): void;
}

export abstract class FunctionBinder implements IBaseBinder {
    constructor(baseFunctionBinder: BaseFunctionBinder<FunctionParameterDefinition>, exportableBinder: ExportableBinder, ambientableBinder: AmbientableBinder, asyncableBinder: AsyncableBinder, functionBodyWriteableBinder: FunctionBodyWriteableBinder);

    private readonly baseFunctionBinder: BaseFunctionBinder<FunctionParameterDefinition>;
    private readonly exportableBinder: ExportableBinder;
    private readonly ambientableBinder: AmbientableBinder;
    private readonly asyncableBinder: AsyncableBinder;
    private readonly functionBodyWriteableBinder: FunctionBodyWriteableBinder;

    bind(def: FunctionDefinition): void;
}

export abstract class FunctionParameterBinder implements IBaseBinder {
    constructor(baseParameterBinder: BaseParameterBinder);

    private readonly baseParameterBinder: BaseParameterBinder;

    bind(def: FunctionParameterDefinition): void;
}

export abstract class CallSignatureBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, typeParameterBinder: TypeParameteredBinder, parameterBinder: ParameteredBinder<CallSignatureParameterDefinition>, returnTypedBinder: ReturnTypedBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly typeParameterBinder: TypeParameteredBinder;
    private readonly parameterBinder: ParameteredBinder<CallSignatureParameterDefinition>;
    private readonly returnTypedBinder: ReturnTypedBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    bind(def: CallSignatureDefinition): void;
}

export abstract class CallSignatureParameterBinder implements IBaseBinder {
    constructor(baseParameterBinder: BaseParameterBinder);

    private readonly baseParameterBinder: BaseParameterBinder;

    bind(def: CallSignatureParameterDefinition): void;
}

export abstract class DecoratorBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;

    abstract getArguments(): ExpressionDefinition[];
    abstract getIsDecoratorFactory(): boolean;
    bind(def: DecoratorDefinition): void;
}

export abstract class IndexSignatureBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, returnTypedBinder: ReturnTypedBinder, readonlyableBinder: ReadonlyableBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly returnTypedBinder: ReturnTypedBinder;
    private readonly readonlyableBinder: ReadonlyableBinder;

    abstract getKeyName(): string;
    abstract getKeyType(): TypeDefinition;
    bind(def: IndexSignatureDefinition): void;
}

export abstract class ObjectPropertyBinder implements IBaseBinder {
    constructor(baseObjectPropertyBinder: BaseObjectPropertyBinder);

    private readonly baseObjectPropertyBinder: BaseObjectPropertyBinder;

    bind(def: ObjectPropertyDefinition): void;
}

export abstract class TypeAliasBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, exportableBinder: ExportableBinder, typedBinder: TypedBinder, typeParameteredBinder: TypeParameteredBinder, ambientableBinder: AmbientableBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly exportableBinder: ExportableBinder;
    private readonly typedBinder: TypedBinder;
    private readonly typeParameteredBinder: TypeParameteredBinder;
    private readonly ambientableBinder: AmbientableBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    bind(def: TypeAliasDefinition): void;
}

export abstract class TypeParameterBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;

    abstract getConstraintType(): null | TypeDefinition;
    bind(def: TypeParameterDefinition): void;
}

export abstract class TypePropertyBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, basePropertyBinder: BasePropertyBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly basePropertyBinder: BasePropertyBinder;

    bind(def: TypePropertyDefinition): void;
}

export abstract class UserDefinedTypeGuardBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;

    bind(def: UserDefinedTypeGuardDefinition): void;
}

export class InterfaceMemberContainer {
    callSignatures: CallSignatureDefinition[];
    indexSignatures: IndexSignatureDefinition[];
    methods: InterfaceMethodDefinition[];
    newSignatures: CallSignatureDefinition[];
    properties: InterfacePropertyDefinition[];
}

export abstract class InterfaceBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, exportableBinder: ExportableBinder, ambientableBinder: AmbientableBinder, typeParameteredBinder: TypeParameteredBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly exportableBinder: ExportableBinder;
    private readonly ambientableBinder: AmbientableBinder;
    private readonly typeParameteredBinder: TypeParameteredBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    abstract getMembers(): InterfaceMemberContainer;
    abstract getExtendsTypes(): TypeDefinition[];
    bind(def: InterfaceDefinition): void;
}

export abstract class InterfaceMethodBinder implements IBaseBinder {
    constructor(baseFunctionBinder: BaseFunctionBinder<InterfaceMethodParameterDefinition>);

    private readonly baseFunctionBinder: BaseFunctionBinder<InterfaceMethodParameterDefinition>;

    bind(def: InterfaceMethodDefinition): void;
}

export abstract class InterfaceMethodParameterBinder implements IBaseBinder {
    constructor(baseParameterBinder: BaseParameterBinder);

    private readonly baseParameterBinder: BaseParameterBinder;

    bind(def: InterfaceMethodParameterDefinition): void;
}

export abstract class InterfacePropertyBinder implements IBaseBinder {
    constructor(basePropertyBinder: BasePropertyBinder, documentationedBinder: DocumentationedBinder);

    private readonly basePropertyBinder: BasePropertyBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    bind(def: InterfacePropertyDefinition): void;
}

export abstract class NamespaceBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, exportableBinder: ExportableBinder, ambientableBinder: AmbientableBinder, moduledBinder: ModuledBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly exportableBinder: ExportableBinder;
    private readonly ambientableBinder: AmbientableBinder;
    private readonly moduledBinder: ModuledBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    abstract getNamespaceDeclarationType(): NamespaceDeclarationType;
    bind(def: NamespaceDefinition): void;
}

export abstract class VariableBinder implements IBaseBinder {
    constructor(baseDefinitionBinder: BaseDefinitionBinder, namedBinder: NamedBinder, exportableBinder: ExportableBinder, ambientableBinder: AmbientableBinder, typedBinder: TypedBinder, defaultExpressionedBinder: DefaultExpressionedBinder, documentationedBinder: DocumentationedBinder);

    private readonly baseDefinitionBinder: BaseDefinitionBinder;
    private readonly namedBinder: NamedBinder;
    private readonly exportableBinder: ExportableBinder;
    private readonly ambientableBinder: AmbientableBinder;
    private readonly typedBinder: TypedBinder;
    private readonly defaultExpressionedBinder: DefaultExpressionedBinder;
    private readonly documentationedBinder: DocumentationedBinder;

    abstract getDeclarationType(): VariableDeclarationType;
    bind(def: VariableDefinition): void;
}
