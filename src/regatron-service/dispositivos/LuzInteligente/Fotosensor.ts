import { Luminosidade } from "../../../model/Luminosidade";

export class FotoSensor implements Sensor {
    getValorAtual(): Luminosidade {
        var luz : Luminosidade 
        var random = Math.floor(Math.random()*3)
        switch(random){
            case 0:
                luz = Luminosidade.SOMBRA
                break
            case 1:
                luz = Luminosidade.MEIA_LUZ
                break
            case 2:
                luz = Luminosidade.SOL_PLENO
                break
            default:
                luz = Luminosidade.SOMBRA //darkness prevails
                break
        }
        return luz
    }

}
