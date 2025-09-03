
import CompanyRepositorySql from "../src/infra/database/CompanyRepositorySql";
import database from "../src/infra/database/postgre/database";

describe("CompanyRepositorySql - Integration", () => {
  let repo: CompanyRepositorySql;

  beforeAll(() => {
    repo = new CompanyRepositorySql();
  });

  afterAll(async () => {
    // fecha a pool de conexões depois dos testes
    await database.$pool.end();
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
