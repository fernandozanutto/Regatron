import { Dispositivo } from "../Dispositivo";
import { Regador} from "./Regador";
import { Balanca} from "./Balanca";

export interface RegadorConfig {
     quantidade: number; 
}

export class GerenciadorAgua implements Dispositivo {

    quantidade: number = 0;

    constructor(
        public regador: Regador,
        public balanca: Balanca) {
            setInterval(() =>{
                console.log("Estado do Reservatorio de Agua: " + this.notificarEstado() + " mL");
                this.compararEExecutar();
            }, 77777)
    }

    setConfiguracao(config: RegadorConfig): void {
        this.quantidade = config.quantidade;
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