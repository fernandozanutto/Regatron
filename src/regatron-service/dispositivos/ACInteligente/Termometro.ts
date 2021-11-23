export class Termometro implements Sensor {
    getValorAtual(): number {
        return Math.random() * 20 + 1;
    }
}
