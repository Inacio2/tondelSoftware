import Company from "../domain/entities/company/Company";


export default class CompanyAdapter {
    static create(data: { id: string; name: string; province: string; phone: string }) {
        return new Company(data.id, data.name, data.province, data.phone);
    }
}