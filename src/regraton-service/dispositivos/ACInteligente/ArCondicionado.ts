export class ArCondicionado {
    private temperaturaAtual: number;
    
    constructor(temperaturaAtual: number){
        this.temperaturaAtual = temperaturaAtual;
    }

    getTemperaturaAtual(): number{
        return this.temperaturaAtual;
    }

    setTemperaturaAtual(novaTemp: number): void{
        this.temperaturaAtual = novaTemp;
    }

    aquece(tempTermometro: number): void{
        
    }

    resfria(tempTermometro: number): void{


    }


}