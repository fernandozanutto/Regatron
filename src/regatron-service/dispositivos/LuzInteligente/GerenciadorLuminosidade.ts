import { Luminosidade } from "../../../model/Luminosidade";
import { Dispositivo } from "../Dispositivo";
import { Cobertor } from "./Cobertor";
import { FotoSensor } from "./Fotosensor";

export interface LuminosidadeConfig {
    luminosidadeIdeal: Luminosidade
}

export class GerenciadorLuminosidade implements Dispositivo {

    luminosidadeIdeal: Luminosidade | null = null

    constructor(public fotoSensor: FotoSensor, public cobertor: Cobertor) {}

    setConfiguracao(config: LuminosidadeConfig): void {
        this.luminosidadeIdeal = config.luminosidadeIdeal
    }
    compararEExecutar(): void {
        throw new Error("Method not implemented.");
    }
    notificarEstado(): Luminosidade {
        return this.fotoSensor.getValorAtual()
    }
    
}