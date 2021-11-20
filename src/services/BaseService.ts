import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";

export class RegatronService {
    plantas: Planta[] = [
        new Planta({id: 1, nomeCientifico: "PLANTUS DELICIUS", nomeUsual: "GOSTOSA", luminosidade: Luminosidade.MEIA_LUZ, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 74, temperaturaMinimaPadrao: 0}),
        new Planta({id: 2, nomeCientifico: "PLANTUS NOTDELICIUS", nomeUsual: "RUIM", luminosidade: Luminosidade.SOL_PLENO, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 220, temperaturaMinimaPadrao: 30})
        
    ]
    vasos: Vaso[] = [
        new Vaso({descricao: "Vaso da cozinha", dispositivos: [], id: 1, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso sanitário", dispositivos: [], id: 2, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso da sacada", dispositivos: [], id: 3, planta: this.plantas[1]}),
    ]

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