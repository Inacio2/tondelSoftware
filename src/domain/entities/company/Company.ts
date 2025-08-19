export default class Company {
    id : number
    name : string
    province : string
    phone : string

    constructor (id: number, name : string, province : string, phone : string){

        this.id = id
        this.name = name
        this.province = province
        this.phone = phone
    }

}