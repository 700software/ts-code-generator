"use strict";
(function (WriteFlags) {
    WriteFlags[WriteFlags["None"] = 0] = "None";
    WriteFlags[WriteFlags["HideExpressions"] = 1] = "HideExpressions";
    WriteFlags[WriteFlags["HideFunctionBodies"] = 2] = "HideFunctionBodies";
    WriteFlags[WriteFlags["HidePrivateMembers"] = 4] = "HidePrivateMembers";
    WriteFlags[WriteFlags["HideProtectedMembers"] = 8] = "HideProtectedMembers";
    WriteFlags[WriteFlags["HideScopeOnParameters"] = 16] = "HideScopeOnParameters";
    WriteFlags[WriteFlags["IsInAmbientContext"] = 32] = "IsInAmbientContext";
    WriteFlags[WriteFlags["HideFunctionImplementations"] = 64] = "HideFunctionImplementations";
    WriteFlags[WriteFlags["Default"] = 0] = "Default";
})(/* istanbul ignore next */exports.WriteFlags || (exports.WriteFlags = {}));
var WriteFlags = exports.WriteFlags;

//# sourceMappingURL=WriteFlags.js.map
