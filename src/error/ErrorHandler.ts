import { ErrorCode } from "./ErrorCodes";


class CustomError extends Error {
  public readonly code: ErrorCode;

  constructor(message: string, code: ErrorCode) {
    super(message);
    this.code = code;
    this.name = "CustomError";
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

export function throwError(message: string, code: ErrorCode): never {
  throw new CustomError(message, code);
}
