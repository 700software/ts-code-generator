import {Logger} from "./Logger";

export function logError(name: string | null, innerError: Error) {
    Logger.warn("\n" + getWarningMessage(name, innerError));
}

function getWarningMessage(name: string | null, innerError: Error) {
    return getLine() + getSymbolMessage(name) + "\n\n" + getInnerErrorMessage(innerError) + "\n" + getLine() + "\n";
}

function getLine() {
    return "-----------------------------------------\n";
}

function getSymbolMessage(name: string | null) {
    if (name == null) {
        return "Unknown error. Object was null.";
    }
    else {
        return `Failed getting info from "${name}".`;
    }
}

function getInnerErrorMessage(innerError: Error) {
    return `Detail: ${innerError.message}\n\n` +
           `Stack: ${innerError.stack}`;
}
