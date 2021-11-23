export enum Estado {
    DESATIVADO = "Desativado",
    ATIVADO_PARCIALMENTE = "Parcialmente",
    ATIVADO = "Ativado",
}
export class Cobertor {
    private estado: Estado;

    constructor() {
        this.estado = Estado.DESATIVADO;
    }

    estenderParcialmente(): void {
        this.estado = Estado.ATIVADO_PARCIALMENTE;
    }

    estenderTotalmente(): void {
        this.estado = Estado.ATIVADO;
    }

    retrair(): void {
        this.estado = Estado.DESATIVADO;
    }

    getEstado(): Estado {
        return this.estado;
    }
}
