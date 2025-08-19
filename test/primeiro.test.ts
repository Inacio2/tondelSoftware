import CreateCompany from "../src/aplication/usecases/company/CreateCompany"
import Company from "../src/domain/entities/company/Company";

test ("should enter in the park", function(){
    const createCompany = new CreateCompany()
    const company =  createCompany.run()
    expect(company.name).toBe("tondel")
})