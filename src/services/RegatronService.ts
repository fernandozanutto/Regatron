import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";


export class RegatronService {


    plantas: Planta[] = []

    vasos: Vaso[] = []

    public listPlantas(): Planta[] {
        return this.clone(this.plantas)
    }

    public listVasos(): Vaso[]{
        return this.clone(this.vasos)
    }

    public getPlanta(id: number): Planta | undefined {
        const planta = this.plantas.find(planta => planta.id === id)
        return this.clone(planta)
    }

    public getVaso(id: number): Vaso | undefined {
        const vaso = this.vasos.find(vaso => vaso.id === id)
        const clone = this.clone(vaso)

        if (clone && vaso) {
            clone.gerenciadorAgua = vaso.gerenciadorAgua
            clone.gerenciadorTemp = vaso.gerenciadorTemp
            clone.gerenciadorLum = vaso.gerenciadorLum
        }
        
        return clone
    }

    public salvarPlanta(planta: Planta): void {
        const indice = this.plantas.findIndex(p => p.id === planta.id)

        if (indice == -1){
            planta.id = (this.plantas.length + 1);   // Atrubui um ID pra planta nova
            this.plantas.push(planta)               //  Planta nova         
        }

        else{
            this.plantas[indice] = planta //planta existente
        }
        
    }

    public salvarVaso(vaso: Vaso): void {
        const indice = this.vasos.findIndex(p => p.id === vaso.id)

        if (indice == -1){
            vaso.id = (this.vasos.length + 1);
            this.vasos.push(vaso) //vaso novo
        }

        else{
            this.vasos[indice] = vaso //vaso existente
        }

    }

    private clone<T>(data: T) {
        return JSON.parse(JSON.stringify(data)) as T
    }
}
