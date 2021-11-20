import { Luminosidade } from "../../../model/Luminosidade";

export class FotoSensor implements Sensor {
    getValorAtual(): number {
        var luz : Luminosidade 
        switch(Math.floor(Math.random()*3)){
            case 0:
                luz = Luminosidade.SOMBRA
            case 1:
                luz = Luminosidade.MEIA_LUZ
            case 2:
                luz = Luminosidade.SOL_PLENO
            default:
                luz = Luminosidade.SOMBRA //darkness prevails
        }
        return luz
    }

}
