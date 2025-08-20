"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyRepositoryMemory {
    create(company) {
        return Promise.resolve(company);
    }
    findall() {
        throw new Error("Method not implemented.");
    }
}
exports.default = CompanyRepositoryMemory;
