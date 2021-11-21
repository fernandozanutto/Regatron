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
        public termometro: Termometro, 
        public arCondicionado: ArCondicionado
    ) {

        setInterval(() => {
            this.compararEExecutar();
            // console.log("Gerenciador Temperatura: " + this.notificarEstado())
        }, 1000)
    }

    setConfiguracao({tempMinima, tempMaxima}: ACConfig): void {
        this.temperaturaMinima = tempMinima;
        this.temperaturaMaxima = tempMaxima
    }

    compararEExecutar(): void {
        this.temperaturaAtual = this.notificarEstado();
        const arLigado = this.arCondicionado.estaLigado();

        if(this.temperaturaAtual > this.temperaturaMaxima){//temp da planta acima do maximo
            if (arLigado){
                //testa se o ambiente nao esta sendo resfriado
                if(this.temperaturaAtual > this.arCondicionado.getTemperaturaAtual()){
                    //aciona resfriamento do ar condicionado
                    const novaTemp = this.arCondicionado.getTemperaturaAtual() - 1;
                    this.arCondicionado.resfria(novaTemp);
                }
            }
            else{
                this.arCondicionado.liga();
            }
        }

        else if(this.temperaturaAtual < this.temperaturaMinima){//temp da planta abaixo do minimo
            if (arLigado){
                //testa se o ambiente nao esta sendo aquecido
                if (this.temperaturaAtual < this.arCondicionado.getTemperaturaAtual()){
                    //aciona aquecimento do ar condicionado
                    const novaTemp = this.arCondicionado.getTemperaturaAtual() + 1;
                    this.arCondicionado.aquece(novaTemp);
                }
            }
            else{
                this.arCondicionado.liga()
            }
        }

        else{
            this.arCondicionado.desliga();
        }

    }
    notificarEstado(): number {
        return this.termometro.getValorAtual()
    }

}
