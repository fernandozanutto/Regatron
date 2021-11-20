import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";

export class RegatronService {
    plantas: Planta[] = []
    vasos: Vaso[] = []

    public listPlantas(): Planta[] {
        return this.plantas
    }

    public listVasos(): Vaso[]{
        return this.vasos
    }

    public getPlanta(id: number): Planta | null{
        return null
    }

    public getVaso(id: number): Vaso | null{
        return null
    }

}