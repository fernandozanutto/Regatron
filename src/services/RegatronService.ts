import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { ArCondicionado } from "../regatron-service/dispositivos/ACInteligente/ArCondicionado";
import { Termometro } from "../regatron-service/dispositivos/ACInteligente/Termometro";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
import { Cobertor } from "../regatron-service/dispositivos/LuzInteligente/Cobertor";
import { FotoSensor } from "../regatron-service/dispositivos/LuzInteligente/Fotosensor";
import { Lampada } from "../regatron-service/dispositivos/LuzInteligente/Lampada";

export class RegatronService {

    //instanciando dispositivos de temperatura
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
    
    //instanciando dispositivos de iluminacao
    private cobertor1 = new Cobertor()
    private fotoSensor1 = new FotoSensor()
    private lampada1 = new Lampada()
    private gerenciadorLuminosidade1 = new GerenciadorLuminosidade(this.fotoSensor1, this.lampada1, this.cobertor1)

    private cobertor2 = new Cobertor()
    private fotoSensor2 = new FotoSensor()
    private lampada2 = new Lampada()
    private gerenciadorLuminosidade2 = new GerenciadorLuminosidade(this.fotoSensor2, this.lampada2, this.cobertor2)

    private cobertor3 = new Cobertor()
    private fotoSensor3 = new FotoSensor()
    private lampada3 = new Lampada()
    private gerenciadorLuminosidade3 = new GerenciadorLuminosidade(this.fotoSensor3, this.lampada3, this.cobertor3)

    //instanciando dispositivos de rega
 

    plantas: Planta[] = [
        new Planta({id: 1, nomeCientifico: "PLANTUS DELICIUS", nomeUsual: "GOSTOSA", luminosidade: Luminosidade.MEIA_LUZ, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 74, temperaturaMinimaPadrao: 0}),
        new Planta({id: 2, nomeCientifico: "PLANTUS NOTDELICIUS", nomeUsual: "RUIM", luminosidade: Luminosidade.SOL_PLENO, quantidadeAguaPadrao: 200, temperaturaMaximaPadrao: 220, temperaturaMinimaPadrao: 30})
        
    ]
    vasos: Vaso[] = [
        new Vaso({descricao: "Vaso da cozinha", dispositivos: [this.gerenciadorTemperatura1, this.gerenciadorLuminosidade1], id: 1, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso sanitário", dispositivos: [this.gerenciadorTemperatura2, this.gerenciadorLuminosidade2], id: 2, planta: this.plantas[0]}),
        new Vaso({descricao: "Vaso da sacada", dispositivos: [this.gerenciadorTemperatura3, this.gerenciadorLuminosidade3], id: 3, planta: this.plantas[1]}),
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

        if (indice == -1){
            this.plantas.push(planta) //planta nova
        }

        else{
            this.plantas[indice] = planta //planta existente
        }
        
    }

    public salvarVaso(vaso: Vaso): void {
        const indice = this.vasos.findIndex(p => p.id === vaso.id)

        if (indice == -1){
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
