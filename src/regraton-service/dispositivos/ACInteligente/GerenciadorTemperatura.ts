import { Dispositivo } from "../Dispositivo";
import { ArCondicionado } from "./ArCondicionado";
import { Termometro } from "./Termometro";

export interface ACConfig {
    tempMinima: number;
    tempMaxima: number;
}

export class GerenciadorTemperatura implements Dispositivo {

    temperaturaMinima: number = 0;
    temperaturaMaxima: number = 0;

    constructor(
        public termometro: Termometro, 
        public arCondicionado: ArCondicionado
        ) {

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