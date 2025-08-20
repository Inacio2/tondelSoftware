import Company from "../../../domain/entities/company/Company";
import IcompomanyRepository from "../../../domain/repositories/ICompanyRepository";


export default class CreateCompany {
    constructor(private readonly companyRepository : IcompomanyRepository){

    }

    async run (company : Company) : Promise<Company> {

        return await this.companyRepository.create(company)
        
    }
}



