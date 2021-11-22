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
    //instanciando dispositivos de temperatura
    private arCondicionado1 = new ArCondicionado()
    private termometro1 = new Termometro()
    private gerenciadorTemperatura1 = new GerenciadorTemperatura(this.termometro1, this.arCondicionado1)

    private arCondicionado2 = new ArCondicionado()
    private termometro2 = new Termometro()
    private gerenciadorTemperatura2 = new GerenciadorTemperatura(this.termometro2, this.arCondicionado2)
    //vaso dois compartilha ar condicionado com vaso 1.

    private arCondicionado3 = new ArCondicionado()
    private termometro3 = new Termometro()
    private gerenciadorTemperatura3 = new GerenciadorTemperatura(this.termometro3, this.arCondicionado3)
    
    //instanciando dispositivos de iluminacao
    private cobertor1 = new Cobertor()
    private fotoSensor1 = new FotoSensor()
    private lampada1 = new Lampada()
    private gerenciadorLuminosidade1 = new GerenciadorLuminosidade(this.fotoSensor1, this.lampada1, this.cobertor1)

    private cobertor2 = new Cobertor()
    private fotoSensor2 = new FotoSensor()
    private lampada2 = new Lampada()
    private gerenciadorLuminosidade2 = new GerenciadorLuminosidade(this.fotoSensor2, this.lampada2, this.cobertor2)

    private cobertor3 = new Cobertor()
    private fotoSensor3 = new FotoSensor()
    private lampada3 = new Lampada()
    private gerenciadorLuminosidade3 = new GerenciadorLuminosidade(this.fotoSensor3, this.lampada3, this.cobertor3)

    private regador1 = new Regador()
    private balanca1 = new Balanca()
    private gerenciadorAgua1 = new GerenciadorAgua(this.regador1, this.balanca1)

    

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

        this.database.salvarVaso(new Vaso({descricao: "Vaso da cozinha", 
        gerenciadorTemp: this.gerenciadorTemperatura1, gerenciadorLum: this.gerenciadorLuminosidade1, 
        id: 1, planta: this.database.plantas[0]}))

        this.database.salvarVaso(new Vaso({descricao: "Vaso sanitário", 
        gerenciadorTemp: this.gerenciadorTemperatura2, gerenciadorLum: this.gerenciadorLuminosidade2, 
        gerenciadorAgua: this.gerenciadorAgua1, id: 2, planta: this.database.plantas[0]}))

        this.database.salvarVaso(new Vaso({descricao: "Vaso da sacada", 
        gerenciadorTemp: this.gerenciadorTemperatura3, gerenciadorLum: this.gerenciadorLuminosidade3, 
        id: 3, planta: this.database.plantas[1]}))
        
        console.log("Plantas existentes: ", this.database.listPlantas());
        console.log("Vasos existentes: ", this.database.listVasos());
    }
}