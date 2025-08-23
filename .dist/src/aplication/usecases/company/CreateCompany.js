"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCompany {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async run(company) {
        return await this.companyRepository.create(company);
    }
}
exports.default = CreateCompany;
