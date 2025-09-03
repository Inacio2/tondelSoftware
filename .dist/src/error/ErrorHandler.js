"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = throwError;
class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = "CustomError";
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}
function throwError(message, code) {
    throw new CustomError(message, code);
}
