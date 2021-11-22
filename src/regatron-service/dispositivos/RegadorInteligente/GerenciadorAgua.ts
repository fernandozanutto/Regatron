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
                console.log(this.notificarEstado());
                this.compararEExecutar();
            }, 3_600_000)
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

    notificarEstado(): string {
       return "Estado do Reservatorio de Agua: " + this.balanca.getAguaMl() + " mL"
    }
}