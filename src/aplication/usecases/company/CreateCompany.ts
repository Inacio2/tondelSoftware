import Company from "../../../domain/entities/company/Company";
import IcompanyRepository from "../../../domain/repositories/ICompanyRepository";


export default class CreateCompany {
    constructor(private readonly companyRepository : IcompanyRepository){

    }

    async run (company : Company) : Promise<Company> {

        return await this.companyRepository.create(company)
        
    }
}



