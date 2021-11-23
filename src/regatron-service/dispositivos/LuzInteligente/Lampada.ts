export class Lampada {
    private ligada: boolean;

    constructor() {
        this.ligada = false;
    }

    ligar(): void {
        this.ligada = true;
    }

    desligar(): void {
        this.ligada = false;
    }

    estaLigada(): boolean {
        return this.ligada;
    }
}
