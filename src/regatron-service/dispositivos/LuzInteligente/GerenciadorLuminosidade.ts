import { Luminosidade } from "../../../model/Luminosidade";
import { Dispositivo } from "../Dispositivo";
import { Cobertor } from "./Cobertor";
import { Lampada } from "./Lampada";
import { FotoSensor } from "./Fotosensor";

export interface LuminosidadeConfig {
    luminosidadeIdeal: Luminosidade
}

export class GerenciadorLuminosidade implements Dispositivo {

    luminosidadeIdeal: Luminosidade = Luminosidade.SOMBRA 
    horaAtual : number
    constructor(public fotoSensor: FotoSensor, public lampada: Lampada, public cobertor: Cobertor) {
        this.horaAtual = new Date().getHours()
    }

    setConfiguracao(config: LuminosidadeConfig): void {
        this.luminosidadeIdeal = config.luminosidadeIdeal
    }

    compararEExecutar(): void {
        var luzAtual : Luminosidade = this.fotoSensor.getValorAtual()
        this.atualizaRelogio()

        if(this.horaAtual >= 6 && this.horaAtual <= 19 && this.lampada.estaLigada())
            this.lampada.desliga()

        if(luzAtual > this.luminosidadeIdeal){
            switch(luzAtual){
                case Luminosidade.SOL_PLENO:
                    this.cobertor.estendeTotalmente()
                    break
                case Luminosidade.MEIA_LUZ:
                    this.cobertor.estendeParcialmente()
                    break
            }
        }
        else if(luzAtual < this.luminosidadeIdeal){
            if(this.horaAtual > 19 || this.horaAtual < 6 || !this.lampada.estaLigada())
                this.lampada.liga()
        }
    }

    notificarEstado(): Luminosidade {
        return this.fotoSensor.getValorAtual()
    }

    atualizaRelogio(): void {
        this.horaAtual = new Date().getHours()
    }

    
}
