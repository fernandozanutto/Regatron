import {RegatronService} from "../services/RegatronService"
import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { ArCondicionado } from "../regatron-service/dispositivos/ACInteligente/ArCondicionado";
import { Termometro } from "../regatron-service/dispositivos/ACInteligente/Termometro";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
import { Cobertor } from "../regatron-service/dispositivos/LuzInteligente/Cobertor";
import { FotoSensor } from "../regatron-service/dispositivos/LuzInteligente/Fotosensor";
import { Lampada } from "../regatron-service/dispositivos/LuzInteligente/Lampada";
import { GerenciadorAgua } from "../regatron-service/dispositivos/RegadorInteligente/GerenciadorAgua";
import { Regador } from "../regatron-service/dispositivos/RegadorInteligente/Regador";
import { Balanca } from "../regatron-service/dispositivos/RegadorInteligente/Balanca";

export class Regatron {
    private database : RegatronService;

    constructor (database: RegatronService){
        this.database = database

        this.database.salvarPlanta(new Planta({id: 1, nomeCientifico: "PLANTUS DELICIUS", 
        nomeUsual: "GOSTOSA", luminosidade: Luminosidade.MEIA_LUZ, quantidadeAguaPadrao: 200, 
        temperaturaMaximaPadrao: 74, temperaturaMinimaPadrao: 0}))
        
        this.database.salvarPlanta(new Planta({id: 2, nomeCientifico: "PLANTUS NOTDELICIUS", 
        nomeUsual: "RUIM", luminosidade: Luminosidade.SOL_PLENO, quantidadeAguaPadrao: 200, 
        temperaturaMaximaPadrao: 220, temperaturaMinimaPadrao: 30}))

        this.database.salvarPlanta(new Planta({id: 3, nomeCientifico: "PLANTUS DARKUS ", 
        nomeUsual: "TREVAS", luminosidade: Luminosidade.SOMBRA, quantidadeAguaPadrao: 150, 
        temperaturaMaximaPadrao: 29, temperaturaMinimaPadrao: 5}))

      //  this.database.salvarVaso(new Vaso({descricao: "Vaso da cozinha", dispositivos: [this.gerenciadorTemperatura1, this.gerenciadorLuminosidade1], id: 1, planta: this.plantas[0]}))
      //  this.database.salvarVaso(new Vaso({descricao: "Vaso sanitário", dispositivos: [this.gerenciadorTemperatura2, this.gerenciadorLuminosidade2, this.gerenciadorAgua1], id: 2, planta: this.plantas[0]}))
      //  this.database.salvarVaso(new Vaso({descricao: "Vaso da sacada", dispositivos: [this.gerenciadorTemperatura3, this.gerenciadorLuminosidade3], id: 3, planta: this.plantas[1]}))


        console.log("Plantas existentes: ", this.database.listPlantas());
        console.log("Vasos existentes: ", this.database.listVasos());
    }
}