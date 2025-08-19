import Company from "../entities/company/Company";

export default interface IcompomanyRepository {

    create( data : Company) : Promise<Company>
    findall() : Promise<Company>

}