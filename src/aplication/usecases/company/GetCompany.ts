import Company from "../../../domain/entities/company/Company";
import IcompanyRepository from "../../../domain/repositories/ICompanyRepository";
import { ErrorCode } from "../../../error/ErrorCodes";
import { throwError } from "../../../error/ErrorHandler";


export default class GetCompany {
    constructor (private readonly companyRepository : IcompanyRepository){

    }

    async run (): Promise<Company>{
         const company = (await this.companyRepository.findall())[0];

         if(!company){
            throwError("Empresa nao encontrada",ErrorCode.COMPANY_NOT_FOUND)
         }
         
         return company;

    }
}