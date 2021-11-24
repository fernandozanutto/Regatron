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
    temperaturaAtual: number = 0;

    constructor(
        private termometro: Termometro,
        private arCondicionado: ArCondicionado
    ) {
        setInterval(() => {
            this.compararEExecutar();
        }, 1000);
    }

    setConfiguracao({ tempMinima, tempMaxima }: ACConfig): void {
        this.temperaturaMinima = tempMinima;
        this.temperaturaMaxima = tempMaxima;
    }

    compararEExecutar(): void {
        this.temperaturaAtual = this.termometro.getValorAtual();
        const arLigado = this.arCondicionado.estaLigado();

        if (this.temperaturaAtual > this.temperaturaMaxima) {
            if (arLigado) {
                if (
                    this.temperaturaAtual <=
                    this.arCondicionado.getTemperaturaAtual()
                ) {
                    const novaTemp =
                        this.arCondicionado.getTemperaturaAtual() - 1;
                    this.arCondicionado.resfriar(novaTemp);
                }
            } else {
                this.arCondicionado.ligar();
            }
        } else if (this.temperaturaAtual < this.temperaturaMinima) {
            if (arLigado) {
                if (
                    this.temperaturaAtual >= 
                    this.arCondicionado.getTemperaturaAtual()
                ) {
                    const novaTemp =
                        this.arCondicionado.getTemperaturaAtual() + 1;
                    this.arCondicionado.aquecer(novaTemp);
                }
            } else {
                this.arCondicionado.ligar();
            }
        } else {
            this.arCondicionado.desligar();
        }
    }
    notificarEstado(): string {
        const estadoTemperatura =
            "Temperatura: " + this.termometro.getValorAtual().toFixed(1) + "ºC";
        const estadoArCondicionado =
            "AC: " +
            (this.arCondicionado.estaLigado() ? "Ligado" : "Desligado") +
            ": " +
            this.arCondicionado.getTemperaturaAtual().toFixed(1) +
            "ºC";
        return estadoTemperatura + " - " + estadoArCondicionado;
    }
}
