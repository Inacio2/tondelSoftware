"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyRepositorySql_1 = __importDefault(require("../src/infra/database/CompanyRepositorySql"));
const database_1 = __importDefault(require("../src/infra/database/postgre/database"));
describe("CompanyRepositorySql - Integration", () => {
    let repo;
    beforeAll(() => {
        repo = new CompanyRepositorySql_1.default();
    });
    afterAll(async () => {
        // fecha a pool de conexões depois dos testes
        await database_1.default.$pool.end();
    });
    it("deve buscar companies do banco real", async () => {
        const companies = await repo.findall();
        // apenas para depuração
        console.log("Companies:", companies);
        // garante que voltou pelo menos 1 registro
        expect(companies.length).toBeGreaterThan(0);
        // valida alguns campos (ajuste de acordo com seu schema real)
        expect(companies[0]).toHaveProperty("id");
        expect(companies[0]).toHaveProperty("name");
        expect(companies[0]).toHaveProperty("province");
        expect(companies[0]).toHaveProperty("phone");
    });
});
