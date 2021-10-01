"use strict";
var chai_1 = require("chai");
var writers = require("./../../writers");
function getBaseDefinitionWriter(writer, def) {
    def.onBeforeWrite = function (w) { return w.write("{start}"); };
    def.onAfterWrite = function (w) { return w.write("{end}"); };
    return new writers.BaseDefinitionWriter(writer);
}
exports.getBaseDefinitionWriter = getBaseDefinitionWriter;
function getAmbientableWriter(writer, def) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeDeclareKeyword = function (passedInDef) {
            chai_1.expect(passedInDef).to.equal(def);
            writer.write("{declare-keyword}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getAmbientableWriter = getAmbientableWriter;
function getAsyncableWriter(writer, def) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeAsyncKeyword = function (passedInDef) {
            chai_1.expect(passedInDef).to.equal(def);
            writer.write("{async-keyword}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getAsyncableWriter = getAsyncableWriter;
function getCallSignatureWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{call-signature:" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getCallSignatureWriter = getCallSignatureWriter;
function getClassConstructorParameterScopeWriter(writer, scopes) {
    scopes = scopes.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeScope = function (passedInScope) {
            chai_1.expect(passedInScope).to.equal(scopes.shift());
            writer.write("{class-constructor-parameter-scope}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getClassConstructorParameterScopeWriter = getClassConstructorParameterScopeWriter;
function getClassConstructorWriter(writer, def) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(def);
            writer.write("{class-constructor:" + flags);
        };
        return Writer;
    }());
    return new Writer();
}
exports.getClassConstructorWriter = getClassConstructorWriter;
function getDocumentationedWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{doc-comment}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getDocumentationedWriter = getDocumentationedWriter;
function getDecoratorWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            writer.write("{decorator:" + passedInDef.name + ":" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getDecoratorWriter = getDecoratorWriter;
function getDecoratorsWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags, separator) {
            if (separator === void 0) { separator = null; }
            chai_1.expect(passedInDef).to.equal(defs.shift());
            if (separator === " ")
                separator = "space";
            writer.write("{decorators:" + flags + ":" + (separator || "newline") + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getDecoratorsWriter = getDecoratorsWriter;
function getEnumMemberWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (def) {
            writer.write("{enum-member:" + def.name + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getEnumMemberWriter = getEnumMemberWriter;
function getExportableWriter(writer, def) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeExportKeyword = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(def);
            writer.write("{export-keyword:" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getExportableWriter = getExportableWriter;
function getExpressionWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeWithEqualsSign = function (passedInDef) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            if (passedInDef != null)
                writer.write(" = {expression:" + passedInDef.text + "}");
            else
                writer.write(" = {expression}");
        };
        Writer.prototype.write = function (passedInDef) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            if (passedInDef != null)
                writer.write("{expression:" + passedInDef.text + "}");
            else
                writer.write("{expression}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getExpressionWriter = getExpressionWriter;
function getExtendsImplementsClauseWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeExtends = function (passedInDef) {
            writer.write("{extends-clause:" + passedInDef.name + "}");
        };
        Writer.prototype.writeImplements = function (passedInDef) {
            writer.write("{implements-clause:" + passedInDef.name + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getExtendsImplementsClauseWriter = getExtendsImplementsClauseWriter;
function getFunctionBodyWriter(writer, defs, willWrites) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.willWriteFunctionBody = function (def, flags) {
            return willWrites.shift() || false;
        };
        Writer.prototype.write = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{function-body};");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getFunctionBodyWriter = getFunctionBodyWriter;
function getFunctionReturnTypeWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{function-return-type}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getFunctionReturnTypeWriter = getFunctionReturnTypeWriter;
function getFunctionWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (def, flags) {
            writer.write("{function:" + def.name + ":" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getFunctionWriter = getFunctionWriter;
function getImportWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{import}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getImportWriter = getImportWriter;
function getIndexSignatureWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef) {
            writer.write("{index-signature:" + passedInDef.keyName + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getIndexSignatureWriter = getIndexSignatureWriter;
function getInterfaceWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            writer.write("{interface:" + passedInDef.name + ":" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getInterfaceWriter = getInterfaceWriter;
function getNamedImportPartWriter(writer) {
    var defs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defs[_i - 1] = arguments[_i];
    }
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef) {
            var def = defs.shift();
            chai_1.expect(passedInDef).to.equal(def);
            writer.write("{named-import-part:" + def.name + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getNamedImportPartWriter = getNamedImportPartWriter;
function getNamedImportPartsWriter(writer, defs) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDefs) {
            chai_1.expect(passedInDefs).to.equal(defs);
            writer.write("{named-import-parts}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getNamedImportPartsWriter = getNamedImportPartsWriter;
function getParameterWriter(writer, defs) {
    defs = defs.filter(function (d) { return d.destructuringProperties.length === 0; });
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{parameter:" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getParameterWriter = getParameterWriter;
function getParametersWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("({parameters:" + flags + "})");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getParametersWriter = getParametersWriter;
function getPropertyWriter(writer, willWriteAccessorBodies) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.willWriteAccessorBody = function (def) {
            return willWriteAccessorBodies.shift() || false;
        };
        Writer.prototype.write = function (passedInDef, flags) {
            writer.write("{property:" + passedInDef.name + ":" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getPropertyWriter = getPropertyWriter;
function getTypeWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeWithColon = function (passedInDef, fallbackType) {
            writer.write(": ");
            this.write(passedInDef, fallbackType);
        };
        Writer.prototype.writeWithEqualsSign = function (passedInDef, fallbackType) {
            writer.write(" = ");
            this.write(passedInDef, fallbackType);
        };
        Writer.prototype.write = function (passedInDef, fallbackType) {
            writer.write("{");
            writer.write("type");
            if (passedInDef != null)
                writer.write(":" + passedInDef.text);
            writer.write(":" + fallbackType);
            writer.write("}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getTypeWriter = getTypeWriter;
function getTypeWithDefaultExpressionWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags, fallbackType) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{type-with-default:" + flags + ":" + fallbackType + "}");
        };
        Writer.prototype.writeWithOptionalCheck = function (passedInDef, flags, fallbackType) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{type-with-default-optional-check:" + flags + ":" + fallbackType + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getTypeWithDefaultExpressionWriter = getTypeWithDefaultExpressionWriter;
function getParameterWithDestructuringWriter(writer, defs) {
    defs = defs.filter(function (d) { return d.destructuringProperties.length > 0; });
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            writer.write("{destructuring-param:" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getParameterWithDestructuringWriter = getParameterWithDestructuringWriter;
function getDefaultExpressionedWriter(writer, defs, shouldWrites) {
    defs = defs.slice();
    shouldWrites = shouldWrites.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeWithEqualsSign = function (passedInDef, flags) {
            writer.write(" = {default-expression:" + flags + "}");
        };
        Writer.prototype.getShouldWriteDefaultExpression = function (passedInDef, flags) {
            chai_1.expect(passedInDef).to.equal(defs.shift());
            return shouldWrites.shift();
        };
        return Writer;
    }());
    return new Writer();
}
exports.getDefaultExpressionedWriter = getDefaultExpressionedWriter;
function getScopeWriter(writer, scopes) {
    scopes = scopes.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeScope = function (passedInScope) {
            chai_1.expect(passedInScope).to.equal(scopes.shift());
            writer.write("{scope}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getScopeWriter = getScopeWriter;
function getTypeParameterWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef) {
            writer.write("{type-parameter:" + passedInDef.name + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getTypeParameterWriter = getTypeParameterWriter;
function getTypeParametersWriter(writer, defs) {
    defs = defs.slice();
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDefs) {
            chai_1.expect(passedInDefs).to.deep.equal(defs);
            writer.write("{type-parameters}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getTypeParametersWriter = getTypeParametersWriter;
function getVariableDeclarationWriter(writer, type) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.writeDeclarationType = function (passedInType) {
            chai_1.expect(passedInType).to.equal(type);
            writer.write("{var-declaration-type}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getVariableDeclarationWriter = getVariableDeclarationWriter;
function getVariableWriter(writer) {
    var Writer = (function () {
        /* istanbul ignore next */ function Writer() {
        }
        Writer.prototype.write = function (passedInDef, flags) {
            writer.write("{variable:" + passedInDef.name + ":" + flags + "}");
        };
        return Writer;
    }());
    return new Writer();
}
exports.getVariableWriter = getVariableWriter;

//# sourceMappingURL=mocks.js.map
