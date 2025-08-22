"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("../../../domain/entities/company/Company"));
class CreateCompany {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async run(company) {
        return Promise.resolve(new Company_1.default("ola", "", "njsj", "123"));
    }
}
exports.default = CreateCompany;
