export class Balanca implements Sensor{
    private aguaml: number;

    constructor() {
        this.aguaml = 5000;
    }
    getValorAtual(): number {
        return this.aguaml;
    }

    setAguaMl(novoVolume: number): void {
        this.aguaml = novoVolume;
    }
}
