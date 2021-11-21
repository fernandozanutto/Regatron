import { Dispositivo } from "../Dispositivo";
import { Regador} from "./Regador";
import { Balanca} from "./Balanca";

export interface RegadorConfig {

     intervaloMs: number;
     quantidade: number; 
}

export class GerenciadorAgua implements Dispositivo {

    intervaloMs: number = 10000;
    quantidade: number = 0;

    constructor(
        public regador: Regador,
        public balanca: Balanca) {
            setInterval(() =>{
                console.log("Estado do Reservatorio de Agua: " + this.notificarEstado() + " mL");
                this.compararEExecutar();
            }, this.intervaloMs)
    }

    setConfiguracao({intervaloMs,quantidade}: RegadorConfig): void {
        this.intervaloMs = intervaloMs;
        this.quantidade = quantidade;
    }

    compararEExecutar(): void {
        this.regador.rega(this.quantidade);         //Isso teoricamente deveria diminuir o nível da agua mas
        this.balanca.setAguaMl(                     //Já que não estamos usando os componentes o método só n faz nada
            this.balanca.getAguaMl() - this.quantidade
        )
    }

    notificarEstado(): number {
       return this.balanca.getAguaMl()
    }

}