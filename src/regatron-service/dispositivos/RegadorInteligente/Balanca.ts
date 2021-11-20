export class Balanca{

    private aguaml: number;

    constructor(){
        this.aguaml = 5000
    }

    getAguaMl(): number{
        return this.aguaml;
    }

    setAguaMl(novoVolume: number): void{
        this.aguaml = novoVolume;
    }
}