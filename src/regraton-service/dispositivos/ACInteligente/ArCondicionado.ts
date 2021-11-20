export class ArCondicionado {
    private temperaturaAtual: number;
    private temperaturaMinima: number;
    private temperaturaMaxima: number;
    private ligado: boolean;
    
    constructor(temperaturaAtual: number){
        this.temperaturaAtual = temperaturaAtual;
        this.temperaturaMinima = 15;
        this.temperaturaMaxima = 28;
        this.ligado = false;
    }

    liga(): void{
        this.ligado = true;
    }

    desliga(): void{
        this.ligado = false;
    }

    estaLigado(): boolean{
        return this.ligado;
    }

    getTemperaturaAtual(): number{
        return this.temperaturaAtual;
    }

    setTemperaturaAtual(novaTemp: number): void{
        this.temperaturaAtual = novaTemp;
    }

    aquece(novaTemp: number): void{
        if (novaTemp <= this.temperaturaMaxima){
            this.setTemperaturaAtual(novaTemp);
        }
    }

    resfria(novaTemp: number): void{
        if (novaTemp >= this.temperaturaMinima){
            this.setTemperaturaAtual(novaTemp);
        }
    }

}