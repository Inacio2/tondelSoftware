import Company from "../entities/company/Company";

export default interface IcompanyRepository {

    create( data : Company) : Promise<Company>
    findall() : Promise<Company[]>

}