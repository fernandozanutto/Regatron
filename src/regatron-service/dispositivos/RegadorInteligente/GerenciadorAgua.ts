import { Dispositivo } from "../Dispositivo";
import { Regador} from "./Regador";
import { Balanca} from "./Balanca";

export interface RegadorConfig {
     quantidade: number; 
}

export class GerenciadorAgua implements Dispositivo {

    private quantidade: number = 0;

    constructor(
        public regador: Regador,
        public balanca: Balanca) {
            setInterval(() =>{
                //console.log(this.notificarEstado());
                this.compararEExecutar();
            }, 1200)
    }

    setConfiguracao(config: RegadorConfig): void {
        this.quantidade = config.quantidade;
    }

    compararEExecutar(): void {
        if (this.balanca.getAguaMl() - this.quantidade >= 0) {
            this.regador.regar(this.quantidade);         //Isso teoricamente deveria diminuir o nível da agua mas
            this.balanca.setAguaMl(                     //Já que não estamos usando os componentes o método só n faz nada
                this.balanca.getAguaMl() - (this.quantidade)
            )
        } else {
            this.regador.regar(this.balanca.getAguaMl())
            this.balanca.setAguaMl(0) // simulando que regou tudo o que tinha, então o restante é 0
        }
    }

    notificarEstado(): string {
       return "Estado do Reservatorio de Agua: " + this.balanca.getAguaMl() + " mL"
    }
}