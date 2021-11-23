import { Luminosidade } from "../../../model/Luminosidade";

export class FotoSensor implements Sensor {
    getValorAtual(): number {
        var random = Math.floor(Math.random() * 3);

        return random;
    }
}
