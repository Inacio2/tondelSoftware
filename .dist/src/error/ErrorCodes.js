"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["USER_NOT_FOUND"] = 1000] = "USER_NOT_FOUND";
    ErrorCode[ErrorCode["ACCOUNT_DISABLED"] = 1001] = "ACCOUNT_DISABLED";
    ErrorCode[ErrorCode["INVALID_PASSWORD"] = 1002] = "INVALID_PASSWORD";
    ErrorCode[ErrorCode["EMAIL_EXISTS"] = 1003] = "EMAIL_EXISTS";
    ErrorCode[ErrorCode["USER_EXISTS"] = 1003] = "USER_EXISTS";
    ErrorCode[ErrorCode["UNEXISTENT_PRODUCT"] = 1004] = "UNEXISTENT_PRODUCT";
    ErrorCode[ErrorCode["MAX_STOCK"] = 1005] = "MAX_STOCK";
    ErrorCode[ErrorCode["MIN_STOCK"] = 1006] = "MIN_STOCK";
    ErrorCode[ErrorCode["INSUFFICIENT_STOCK"] = 1007] = "INSUFFICIENT_STOCK";
    ErrorCode[ErrorCode["SUPLIER_HAS_STOCK"] = 1008] = "SUPLIER_HAS_STOCK";
    ErrorCode[ErrorCode["SUPLIER_NOT_FOUND"] = 1009] = "SUPLIER_NOT_FOUND";
    ErrorCode[ErrorCode["CUSTOMER_NOT_FOUND"] = 1010] = "CUSTOMER_NOT_FOUND";
    ErrorCode[ErrorCode["COMPANY_NOT_FOUND"] = 1011] = "COMPANY_NOT_FOUND";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
