import { Dispositivo } from "../Dispositivo";
import { Termometro } from "./Termometro";

export class GerenciadorTemperatura implements Dispositivo {

    termometro: Termometro

    constructor(termometro: Termometro) {
        this.termometro = termometro
    }

    compararEExecutar(): void {
        throw new Error("Method not implemented.");
    }
    notificarEstado(): number {
        return this.termometro.getValorAtual()
    }

}