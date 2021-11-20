import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { ArCondicionado } from "../regatron-service/dispositivos/ACInteligente/ArCondicionado";
import { Termometro } from "../regatron-service/dispositivos/ACInteligente/Termometro";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
import { Cobertor } from "../regatron-service/dispositivos/LuzInteligente/Cobertor";
import { FotoSensor } from "../regatron-service/dispositivos/LuzInteligente/Fotosensor";
//import { Lampada } from "../regatron-service/dispositivos/LuzInteligente/Lampada";

export class RegatronService {
    private arCondicionado1 = new ArCondicionado(20)
    private termometro1 = new Termometro
    private gerenciadorTemperatura1 = new GerenciadorTemperatura(this.termometro1, this.arCondicionado1)

    private arCondicionado2 = new ArCondicionado(22)
    private termometro2 = new Termometro
    private gerenciadorTemperatura2 = new GerenciadorTemperatura(this.termometro2, this.arCondicionado1)
    //vaso dois compartilha ar condicionado com vaso 1.

    private arCondicionado3 = new ArCondicionado(24)
    private termometro3 = new Termometro
    private gerenciadorTemperatura3 = new GerenciadorTemperatura(this.termometro3, this.arCondicionado2)    

    plantas: Planta[] = [
        new Planta({id: 1, nomeCientifico: "PLANTUS DELICIUS", nomeUsual: "GOSTOSA", luminosidade: Luminosidade.MEIA_LUZ, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 74, temperaturaMinimaPadrao: 0}),
        new Planta({id: 2, nomeCientifico: "PLANTUS NOTDELICIUS", nomeUsual: "RUIM", luminosidade: Luminosidade.SOL_PLENO, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 220, temperaturaMinimaPadrao: 30})
        
    ]
    vasos: Vaso[] = [
        new Vaso({descricao: "Vaso da cozinha", dispositivos: [this.gerenciadorTemperatura1], id: 1, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso sanitário", dispositivos: [this.gerenciadorTemperatura2], id: 2, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso da sacada", dispositivos: [this.gerenciadorTemperatura3], id: 3, planta: this.plantas[1]}),
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