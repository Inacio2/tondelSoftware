import Company from "../domain/entities/company/Company";
import IcompanyRepository from "../domain/repositories/ICompanyRepository";


export default class CompanyRepositoryMemory implements IcompanyRepository {

    create(company: Company): Promise<Company> {
        return Promise.resolve(company)
    
    }   
    findall(): Promise<Company[]> {
        throw new Error("Method not implemented.");
    }

}