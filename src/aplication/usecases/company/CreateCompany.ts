import Company from "../../../domain/entities/company/Company";
import IcompomanyRepository from "../../../domain/repositories/ICompanyRepository";


export default class CreateCompany {
    constructor(){

    }

    run ()  {

        const company = new Company(1,"tondel","uige","6786547")
        return company;

    }
}



