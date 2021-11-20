import { Dispositivo } from "../Dispositivo";
import { Termometro } from "./Termometro";

export class GerenciadorTemperatura implements Dispositivo {

    termometro: Termometro
    configPlanta: ConfigPlanta;

    constructor(termometro: Termometro, configPlanta: ConfigPlanta) {
        this.termometro = termometro
        this.configPlanta = configPlanta
    }

    compararEExecutar(): void {
        throw new Error("Method not implemented.");
    }
    notificarEstado(): number {
        return this.termometro.getValorAtual()
    }

}