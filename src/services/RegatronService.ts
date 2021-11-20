import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { ArCondicionado } from "../regatron-service/dispositivos/ACInteligente/ArCondicionado";
import { Termometro } from "../regatron-service/dispositivos/ACInteligente/Termometro";

export class RegatronService {
    private arCondicionado = new ArCondicionado(20)
    private termometro = new Termometro
    private gerenciadorTemperatura = new GerenciadorTemperatura(this.termometro, this.arCondicionado)

    plantas: Planta[] = [
        new Planta({id: 1, nomeCientifico: "PLANTUS DELICIUS", nomeUsual: "GOSTOSA", luminosidade: Luminosidade.MEIA_LUZ, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 74, temperaturaMinimaPadrao: 0}),
        new Planta({id: 2, nomeCientifico: "PLANTUS NOTDELICIUS", nomeUsual: "RUIM", luminosidade: Luminosidade.SOL_PLENO, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 220, temperaturaMinimaPadrao: 30})
        
    ]
    vasos: Vaso[] = [
        new Vaso({descricao: "Vaso da cozinha", dispositivos: [this.gerenciadorTemperatura], id: 1, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso sanitário", dispositivos: [], id: 2, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso da sacada", dispositivos: [], id: 3, planta: this.plantas[1]}),
    ]

    public listPlantas(): Planta[] {
        return this.clone(this.plantas)
    }

    public listVasos(): Vaso[]{
        return this.clone(this.vasos)
    }

    public getPlanta(id: number): Planta | undefined {
        return this.clone(this.plantas.find(planta => planta.id === id))
    }

    public getVaso(id: number): Vaso | undefined {
        return this.clone(this.vasos.find(vaso => vaso.id === id))
    }

    public salvarPlanta(planta: Planta): void {
        const indice = this.plantas.findIndex(p => p.id === planta.id)

        console.log(planta)
        console.log(this.plantas[indice])
        this.plantas[indice] = planta
    }

    private clone<T>(data: T) {
        return JSON.parse(JSON.stringify(data)) as T
    }
}