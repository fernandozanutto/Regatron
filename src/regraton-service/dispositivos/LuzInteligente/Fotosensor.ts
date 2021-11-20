import { Luminosidade } from "../../../model/Luminosidade";

export class FotoSensor implements Sensor {
    getValorAtual(): number {
        return Luminosidade.MEIA_LUZ
    }

}