import {RegatronService} from "../services/RegatronService"

export class Regatron {
    private database : RegatronService;

    constructor (database: RegatronService){
        this.database = database
        console.log("Plantas existentes: ", this.database.listPlantas());
        console.log("Vasos existentes: ", this.database.listVasos());
    }
}