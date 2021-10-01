﻿import {StructureFactory} from "./../../../factories";
import {ModuledStructure} from "./../../../structures";
import {ModuledBinder} from "./../../base";

export class StructureModuledBinder extends ModuledBinder {
    constructor(private readonly factory: StructureFactory, private readonly structure: ModuledStructure) {
        super();
    }

    getMembers() {
        const classes = (this.structure.classes || []).map(c => this.factory.getClass(c));
        const enums = (this.structure.enums || []).map(e => this.factory.getEnum(e));
        const functions = (this.structure.functions || []).map(f => this.factory.getFunction(f));
        const interfaces = (this.structure.interfaces || []).map(i => this.factory.getInterface(i));
        const namespaces = (this.structure.namespaces || []).map(n => this.factory.getNamespace(n));
        const typeAliases = (this.structure.typeAliases || []).map(t => this.factory.getTypeAlias(t));
        const variables = (this.structure.variables || []).map(v => this.factory.getVariable(v));

        // should order these in the order that would work well with writing
        return [...typeAliases, ...interfaces, ...enums, ...classes, ...namespaces, ...functions, ...variables];
    }
}
