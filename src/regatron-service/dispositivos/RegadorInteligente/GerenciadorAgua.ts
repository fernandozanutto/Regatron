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
                console.log("Isto é um log da água :S olar amigos")
            }, this.intervaloMs)
    }

    setConfiguracao({intervaloMs,quantidade}: RegadorConfig): void {
        this.intervaloMs = intervaloMs;
        this.quantidade = quantidade;
    }

    compararEExecutar(): void {
        this.regador.rega(this.quantidade);

    }

    notificarEstado(): void {
        throw new Error("Method not implemented.");
    }

}