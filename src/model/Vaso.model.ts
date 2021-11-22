import { ArCondicionado } from "../regatron-service/dispositivos/ACInteligente/ArCondicionado";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { Termometro } from "../regatron-service/dispositivos/ACInteligente/Termometro";
import { Dispositivo, DispositivoEnum } from "../regatron-service/dispositivos/Dispositivo";
import { Cobertor } from "../regatron-service/dispositivos/LuzInteligente/Cobertor";
import { FotoSensor } from "../regatron-service/dispositivos/LuzInteligente/Fotosensor";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
import { Lampada } from "../regatron-service/dispositivos/LuzInteligente/Lampada";
import { Balanca } from "../regatron-service/dispositivos/RegadorInteligente/Balanca";
import { GerenciadorAgua } from "../regatron-service/dispositivos/RegadorInteligente/GerenciadorAgua";
import { Regador } from "../regatron-service/dispositivos/RegadorInteligente/Regador";
import { Luminosidade } from "./Luminosidade";
import { Planta } from "./Planta.model";

interface VasoDTO {
    id: number;
    descricao: string;
    quantidadeAgua?: number;
    temperaturaMinima?: number;
    temperaturaMaxima?: number;
    luminosidade?: Luminosidade;
    planta?: Planta;
    gerenciadorAgua?: GerenciadorAgua;
    gerenciadorTemp?: GerenciadorTemperatura;
    gerenciadorLum?: GerenciadorLuminosidade;
}
export class Vaso {
    public id: number;
    public descricao: string;
    public quantidadeAgua: number;
    public temperaturaMinima: number;
    public temperaturaMaxima: number;
    public luminosidade: Luminosidade;
    public planta?: Planta;
    public gerenciadorAgua?: GerenciadorAgua;
    public gerenciadorTemp?: GerenciadorTemperatura;
    public gerenciadorLum?: GerenciadorLuminosidade;

    constructor(
        {id,
        descricao,
        quantidadeAgua,
        temperaturaMaxima,
        temperaturaMinima,
        luminosidade,
        planta,
        gerenciadorAgua,
        gerenciadorTemp,
        gerenciadorLum} : VasoDTO
    ) { 
        this.id = id;
        this.descricao = descricao;
        this.quantidadeAgua = quantidadeAgua || planta?.quantidadeAguaPadrao || 0;
        this.temperaturaMaxima = temperaturaMaxima || planta?.temperaturaMaximaPadrao || 0;
        this.temperaturaMinima = temperaturaMinima || planta?.temperaturaMinimaPadrao || 0;
        this.luminosidade = luminosidade || planta?.luminosidade || Luminosidade.MEIA_LUZ;
        this.planta = planta;
        this.gerenciadorAgua = gerenciadorAgua;
        this.gerenciadorTemp = gerenciadorTemp;
        this.gerenciadorLum = gerenciadorLum;
        this.configurarGerenciadorAgua();
        this.configurarGerenciadorLum();
        this.configurarGerenciadorTemp();
    }

    private configurarGerenciadorTemp(){
        if (this.gerenciadorTemp){
            this.gerenciadorTemp.setConfiguracao({tempMinima: this.temperaturaMinima, tempMaxima: this.temperaturaMaxima})
        }
    }

    private configurarGerenciadorLum(){
        if (this.gerenciadorLum){
            this.gerenciadorLum.setConfiguracao({luminosidadeIdeal: this.luminosidade})
        }
    }

    private configurarGerenciadorAgua(){
        if (this.gerenciadorAgua){
            this.gerenciadorAgua.setConfiguracao({quantidade: this.quantidadeAgua})
        }
    }

    public adicionarGerenciadorAgua(){
        if (!this.gerenciadorAgua){
            this.gerenciadorAgua = new GerenciadorAgua(new Regador(), new Balanca())
        }
    }
    
    public adicionarGerenciadorTemp(){
        if (!this.gerenciadorTemp){
            this.gerenciadorTemp = new GerenciadorTemperatura(new Termometro(), new ArCondicionado())
        }
    }

    public adicionarGerenciadorLum(){
        if (!this.gerenciadorLum){
            this.gerenciadorLum = new GerenciadorLuminosidade(new FotoSensor(), new Lampada(), new Cobertor())
        }
    }
}