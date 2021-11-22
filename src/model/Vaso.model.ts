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
    dispositivos?: Dispositivo[]
}
export class Vaso {
    public id: number;
    public descricao: string;
    public quantidadeAgua: number;
    public temperaturaMinima: number;
    public temperaturaMaxima: number;
    public luminosidade: Luminosidade;
    public planta: Planta | undefined;
    public dispositivos: Dispositivo[] = []

    constructor(
        {id,
        descricao,
        quantidadeAgua,
        temperaturaMaxima,
        temperaturaMinima,
        luminosidade,
        planta,
        dispositivos} : VasoDTO
    ) { 
        this.id = id;
        this.descricao = descricao;
        this.quantidadeAgua = quantidadeAgua || planta?.quantidadeAguaPadrao || 0;
        this.temperaturaMaxima = temperaturaMaxima || planta?.temperaturaMaximaPadrao || 0;
        this.temperaturaMinima = temperaturaMinima || planta?.temperaturaMinimaPadrao || 0;
        this.luminosidade = luminosidade || planta?.luminosidade || Luminosidade.MEIA_LUZ;
        this.planta = planta || undefined;
        this.dispositivos = dispositivos || [];
        this.configurarDispositivos()
    }

    private configurarDispositivos() {
        this.dispositivos.forEach(disp => {
            if (disp instanceof GerenciadorTemperatura) {
                disp.setConfiguracao({tempMinima: this.temperaturaMinima, tempMaxima: this.temperaturaMaxima})
            } else if (disp instanceof GerenciadorLuminosidade) {
                disp.setConfiguracao({luminosidadeIdeal: this.luminosidade})
            } else if (disp instanceof GerenciadorAgua) {
                disp.setConfiguracao({quantidade: this.quantidadeAgua})
            }
        })
    }

    public adicionarDispositivo(tipo: DispositivoEnum) {
        switch(tipo) {
            case DispositivoEnum.AGUA: 
                this.dispositivos.push(new GerenciadorAgua(new Regador(), new Balanca()))
                break
            case DispositivoEnum.LUZ: 
            this.dispositivos.push(new GerenciadorLuminosidade(new FotoSensor(), new Lampada(), new Cobertor()))
                break
            case DispositivoEnum.TEMPERATURA: 
                this.dispositivos.push(new GerenciadorTemperatura(new Termometro(), new ArCondicionado()))
                break
        }
    }
}