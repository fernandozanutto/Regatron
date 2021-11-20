export enum Estado{ATIVADO, ATIVADO_PARCIALMENTE, DESATIVADO}
export class Cobertor {
    private estado : Estado

    constructor(){
        this.estado = Estado.DESATIVADO
    }

    extendeParcialmente() : void{
        this.estado = Estado.ATIVADO_PARCIALMENTE
    }

    extendeTotalmente() : void{
        this.estado = Estado.ATIVADO
    }

    retrai() : void{
        this.estado =Estado.DESATIVADO
    }

    getEstado() : Estado{
        return this.estado
    }
}
