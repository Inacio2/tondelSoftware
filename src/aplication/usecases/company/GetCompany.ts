import Company from "../../../domain/entities/company/Company";
import IcompanyRepository from "../../../domain/repositories/ICompanyRepository";


export default class GetCompany {
    constructor (private readonly companyRepository : IcompanyRepository){

    }

    async run (): Promise<Company>{
         const company = (await this.companyRepository.findall())[0];
         if(!company){
            console.log("sem dados");
         }
         return company;

    }
}