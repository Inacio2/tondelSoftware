import Company from "../domain/entities/company/Company";
import IcompomanyRepository from "../domain/repositories/ICompanyRepository";

export default class CompanyRepositoryMemory implements IcompomanyRepository {

    create(company: Company): Promise<Company> {
        return Promise.resolve(company)
    
    }   
    findall(): Promise<Company> {
        throw new Error("Method not implemented.");
    }

}