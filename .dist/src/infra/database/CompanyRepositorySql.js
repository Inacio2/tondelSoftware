"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyAdapter_1 = __importDefault(require("../../adapter/CompanyAdapter"));
const database_1 = __importDefault(require("./postgre/database"));
class CompanyRepositorySql {
    create(data) {
        throw new Error("Method not implemented.");
    }
    async findall() {
        const companies = await database_1.default.any("SELECT * FROM companies");
        return companies.map((c) => CompanyAdapter_1.default.create(c));
    }
}
exports.default = CompanyRepositorySql;
