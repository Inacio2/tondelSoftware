import CreateCompany from "../src/aplication/usecases/company/CreateCompany"
import Company from "../src/domain/entities/company/Company";
import CompanyRepositoryMemory from "../src/infra/CompanyRepositoryMemory";

test ("should enter in the park", async function(){
    const companyRepositoryMemory = new CompanyRepositoryMemory()
    const createCompany = new CreateCompany(companyRepositoryMemory)
    const company = new Company(1,"inacio","uige","234")
    const Createdcompany = await createCompany.run(company)
    expect(Createdcompany).toBe(company)
})