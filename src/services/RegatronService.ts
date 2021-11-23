import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";


export class RegatronService {


    private plantas: Planta[] = []
    private vasos: Vaso[] = []

    public listPlantas(): Planta[] {
        return this.plantas.map(planta => planta.clone())
    }

    public listVasos(): Vaso[]{
        return this.vasos.map(vaso => vaso.clone())
    }

    public getPlanta(id: number): Planta | undefined {
        const planta = this.plantas.find(planta => planta.id === id)
        return planta?.clone()
    }

    public getVaso(id: number): Vaso | undefined {
        const vaso = this.vasos.find(vaso => vaso.id === id)
        
        return vaso?.clone()
    }

    public salvarPlanta(planta: Planta): void {
        const indice = this.plantas.findIndex(p => p.id === planta.id)

        if (indice == -1){
            planta.id = (this.plantas.length + 1);   // Atrubui um ID pra planta nova
            this.plantas.push(planta.clone())               //  Planta nova         
        }

        else{
            this.plantas[indice] = planta.clone() //planta existente
        }
        
    }

    public salvarVaso(vaso: Vaso): void {
        const indice = this.vasos.findIndex(p => p.id === vaso.id)

        if (indice == -1){
            vaso.id = (this.vasos.length + 1);
            this.vasos.push(vaso.clone()) //vaso novo
        } else {
            this.vasos[indice] = vaso.clone() //vaso existente
        }
    }
}
