"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("../domain/entities/company/Company"));
class CompanyAdapter {
    static create(data) {
        return new Company_1.default(data.id, data.name, data.province, data.phone);
    }
}
exports.default = CompanyAdapter;
