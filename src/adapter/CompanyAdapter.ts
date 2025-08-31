import Company from "../domain/entities/company/Company";


export default class CompanyAdapter {

    static create(id : string, name : string, province : string, phone : string){
        return new Company(id,name,province,phone)
    }

}