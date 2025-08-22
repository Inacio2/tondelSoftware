export default class Company {
    id : string
    name : string
    province : string
    phone : string

    constructor (id: string, name : string, province : string, phone : string){

        // Validacoes
        
        if (!name.trim() || typeof name !== "string") throw new Error("Nome tem de ser preenchido e tem de ser uma string")
        if(!province.trim() || typeof province !== "string") throw new Error("Provínca tem de ser preenchido e tem de ser uma string")
        if (typeof phone !== "string" || !/^\d+$/.test(phone)) {
            throw new Error("Telefone inválido: deve conter apenas números");
        }

        this.id = id
        this.name = name
        this.province = province
        this.phone = phone
    }

}