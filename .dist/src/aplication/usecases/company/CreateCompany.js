"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = __importDefault(require("../../../domain/entities/company/Company"));
class CreateCompany {
    constructor() {
    }
    run() {
        const company = new Company_1.default(1, "tondel", "uige", "6786547");
        return company;
    }
}
exports.default = CreateCompany;
