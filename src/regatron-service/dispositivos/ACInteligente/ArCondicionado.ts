export class ArCondicionado {
    private temperaturaAtual: number;
    private temperaturaMinima: number;
    private temperaturaMaxima: number;
    private ligado: boolean;

    constructor() {
        this.temperaturaAtual = 20;
        this.temperaturaMinima = 15;
        this.temperaturaMaxima = 28;
        this.ligado = false;
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }

    estaLigado(): boolean {
        return this.ligado;
    }

    getTemperaturaAtual(): number {
        return this.temperaturaAtual;
    }

    setTemperaturaAtual(novaTemp: number): void {
        this.temperaturaAtual = novaTemp;
    }

    aquecer(novaTemp: number): void {
        if (novaTemp <= this.temperaturaMaxima) {
            this.setTemperaturaAtual(novaTemp);
        }
    }

    resfriar(novaTemp: number): void {
        if (novaTemp >= this.temperaturaMinima) {
            this.setTemperaturaAtual(novaTemp);
        }
    }
}
