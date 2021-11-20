import { Dispositivo } from "../Dispositivo";
import { Termometro } from "./Termometro";

export interface ACConfig {
    tempMinima: number;
    tempMaxima: number;
}

export class GerenciadorTemperatura implements Dispositivo {

    termometro: Termometro
    temperaturaMinima: number = 0;
    temperaturaMaxima: number = 0;

    constructor(termometro: Termometro) {
        this.termometro = termometro

        setInterval(() => {
            console.log("Estado Medidor Temperatura: " + this.notificarEstado())
        }, 1000)
    }

    setConfiguracao({tempMinima, tempMaxima}: ACConfig): void {
        this.temperaturaMinima = tempMinima;
        this.temperaturaMaxima = tempMaxima
    }

    compararEExecutar(): void {
        throw new Error("Method not implemented.");
    }
    notificarEstado(): number {
        return this.termometro.getValorAtual()
    }

}