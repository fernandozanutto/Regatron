import { Notificacao } from "../../../model/Notificacao";
import { TipoNotificacao } from "../../../model/TipoNotificacao";

export class Notificador {
    private fila: Notificacao[] = [];

    adicionar(mensagem: string): void {
        var notificacao = new Notificacao(mensagem, TipoNotificacao.VISUAL);
        this.fila.push(notificacao);
    }

    ler(): Notificacao | undefined {
        return this.fila.pop();
    }

    estaVazio(): boolean {
        return this.fila.length == 0;
    }
}
