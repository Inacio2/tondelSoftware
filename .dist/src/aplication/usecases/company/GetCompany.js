"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCodes_1 = require("../../../error/ErrorCodes");
const ErrorHandler_1 = require("../../../error/ErrorHandler");
class GetCompany {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async run() {
        const company = (await this.companyRepository.findall())[0];
        if (!company) {
            (0, ErrorHandler_1.throwError)("Empresa nao encontrada", ErrorCodes_1.ErrorCode.COMPANY_NOT_FOUND);
        }
        return company;
    }
}
exports.default = GetCompany;
