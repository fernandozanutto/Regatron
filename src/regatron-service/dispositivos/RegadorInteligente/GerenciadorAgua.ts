import { Dispositivo } from "../Dispositivo";
import { Regador } from "./Regador";
import { Balanca } from "./Balanca";
import { Notificador } from "./Notificador";
import { Notificacao } from "../../../model/Notificacao";

export interface RegadorConfig {
    quantidade: number;
}

export class GerenciadorAgua implements Dispositivo {
    private quantidadePorDia: number = 0;
    private notificador: Notificador = new Notificador();
    private static readonly INTERVALO_REGADA = 30_000;

    constructor(public regador: Regador, public balanca: Balanca) {
        setInterval(() => {
            //console.log(this.notificarEstado());
            this.compararEExecutar();
        }, GerenciadorAgua.INTERVALO_REGADA);
    }

    setConfiguracao(config: RegadorConfig): void {
        this.quantidadePorDia = config.quantidade;
    }

    private getQuantidadePorRegada(): number {
        const regadasPorDia =
            (24 * 60 * 60 * 1000) / GerenciadorAgua.INTERVALO_REGADA;
        return this.quantidadePorDia / regadasPorDia;
    }

    compararEExecutar(): void {
        if (
            this.balanca.getValorAtual() - 3 * this.getQuantidadePorRegada() <=
            0
        ) {
            this.notificador.adicionar("Encher água do reservatório do vaso");
        }

        if (this.balanca.getValorAtual() - this.getQuantidadePorRegada() >= 0) {
            this.regador.liberaAgua(this.getQuantidadePorRegada()); //Isso teoricamente deveria diminuir o nível da agua mas
            this.balanca.setAguaMl(
                //Já que não estamos usando os componentes o método só n faz nada
                this.balanca.getValorAtual() - this.getQuantidadePorRegada()
            );
        } else {
            this.regador.liberaAgua(this.balanca.getValorAtual());
            this.balanca.setAguaMl(0); // simulando que regou tudo o que tinha, então o restante é 0
        }
    }

    notificarEstado(): string {
        return (
            "Estado do Reservatorio de Agua: " +
            this.balanca.getValorAtual().toFixed(2) +
            " mL"
        );
    }

    checarNotificacao(): Notificacao | void {
        const notificacao = this.notificador.ler();
        if (notificacao != undefined) {
            return notificacao;
        }
    }
}
