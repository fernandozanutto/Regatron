import { TipoNotificacao } from "./TipoNotificacao";

export class Notificacao {
    public mensagem: String;
    public tipo: TipoNotificacao;

    constructor(mensagem: string, tipo: TipoNotificacao) {
        this.mensagem = mensagem;
        this.tipo = tipo;
    }
}
