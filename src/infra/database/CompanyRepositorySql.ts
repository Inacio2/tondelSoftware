import CompanyAdapter from "../../adapter/CompanyAdapter";
import Company from "../../domain/entities/company/Company";
import IcompanyRepository from "../../domain/repositories/ICompanyRepository";
import db from "./postgre/database";


export default class CompanyRepositorySql implements IcompanyRepository {
    create(data: Company): Promise<Company> {
        throw new Error("Method not implemented.");
    }

    async findall(): Promise<Company[]> {
        const companies = await db.any("SELECT * FROM companies");
        
        return companies.map((c: any) =>
            CompanyAdapter.create(c)
        );
    }
}
