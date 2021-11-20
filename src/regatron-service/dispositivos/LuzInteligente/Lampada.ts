export class Lampada {
    private ligada : boolean

    constructor(){
        this.ligada = false
    }

    liga() : void{
        this.ligada = true
    }

    desliga() : void{
        this.ligada = false
    }

    estaLigada() : boolean{
        return this.ligada
    }
}
