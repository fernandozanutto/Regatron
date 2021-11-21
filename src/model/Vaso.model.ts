import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { Dispositivo } from "../regatron-service/dispositivos/Dispositivo";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
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
            }
        })
    }
}