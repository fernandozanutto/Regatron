import { Dispositivo } from "../Dispositivo";
import { Regador } from "./Regador";
import { Balanca } from "./Balanca";
import { Notificador } from "./Notificador";
import { Notificacao } from "../../../model/Notificacao";

export interface RegadorConfig {
    quantidade: number;
}

export class GerenciadorAgua implements Dispositivo {
    private quantidade: number = 0;
    private notificador: Notificador = new Notificador();

    constructor(public regador: Regador, public balanca: Balanca) {
        setInterval(() => {
            //console.log(this.notificarEstado());
            this.compararEExecutar();
        }, 30000);
    }

    setConfiguracao(config: RegadorConfig): void {
        this.quantidade = config.quantidade;
    }

    compararEExecutar(): void {
        if (this.balanca.getAguaMl() - 3 * this.quantidade <= 0) {
            this.notificador.adicionar("A água do reservatório do vaso");
        }

        if (this.balanca.getAguaMl() - this.quantidade >= 0) {
            this.regador.liberaAgua(this.quantidade); //Isso teoricamente deveria diminuir o nível da agua mas
            this.balanca.setAguaMl(
                //Já que não estamos usando os componentes o método só n faz nada
                this.balanca.getAguaMl() - this.quantidade
            );
        } else {
            this.regador.liberaAgua(this.balanca.getAguaMl());
            this.balanca.setAguaMl(0); // simulando que regou tudo o que tinha, então o restante é 0
        }
    }

    notificarEstado(): string {
        return (
            "Estado do Reservatorio de Agua: " +
            this.balanca.getAguaMl() +
            " mL"
        );
    }

    checaNotificacao(): Notificacao | void {
        const notificacao = this.notificador.ler();
        if (notificacao != undefined) {
            return notificacao;
        }
    }
}
