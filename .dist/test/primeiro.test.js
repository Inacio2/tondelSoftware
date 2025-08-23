"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCompany_1 = __importDefault(require("../src/aplication/usecases/company/CreateCompany"));
const Company_1 = __importDefault(require("../src/domain/entities/company/Company"));
const CompanyRepositoryMemory_1 = __importDefault(require("../src/infra/CompanyRepositoryMemory"));
test("should enter in the park", async function () {
    const companyRepositoryMemory = new CompanyRepositoryMemory_1.default();
    const createCompany = new CreateCompany_1.default(companyRepositoryMemory);
    const company = new Company_1.default("242", "inacio", "uige", "234");
    const Createdcompany = await createCompany.run(company);
    expect(Createdcompany).toBe(company);
});
