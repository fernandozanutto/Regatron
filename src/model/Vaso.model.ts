import { ArCondicionado } from "../regatron-service/dispositivos/ACInteligente/ArCondicionado";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { Termometro } from "../regatron-service/dispositivos/ACInteligente/Termometro";
import {
    Dispositivo,
    DispositivoEnum,
} from "../regatron-service/dispositivos/Dispositivo";
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
    planta?: Planta;
    gerenciadorAgua?: GerenciadorAgua;
    gerenciadorTemp?: GerenciadorTemperatura;
    gerenciadorLum?: GerenciadorLuminosidade;
}
export class Vaso {
    public id: number;
    public descricao: string;
    public planta?: Planta;
    public gerenciadorAgua?: GerenciadorAgua;
    public gerenciadorTemp?: GerenciadorTemperatura;
    public gerenciadorLum?: GerenciadorLuminosidade;

    constructor({
        id,
        descricao,
        planta,
        gerenciadorAgua,
        gerenciadorTemp,
        gerenciadorLum,
    }: VasoDTO) {
        this.id = id;
        this.descricao = descricao;
        this.planta = planta;
        this.gerenciadorAgua = gerenciadorAgua;
        this.gerenciadorTemp = gerenciadorTemp;
        this.gerenciadorLum = gerenciadorLum;
        this.configurarGerenciadorAgua();
        this.configurarGerenciadorLum();
        this.configurarGerenciadorTemp();
    }

    public getLuminosidade() {
        return this.planta?.luminosidade || Luminosidade.Sombra;
    }

    public getQuantidadeAgua() {
        return this.planta?.quantidadeAguaPadrao || -1;
    }

    public getTempMinima() {
        return this.planta?.temperaturaMinimaPadrao || -1;
    }

    public getTempMaxima() {
        return this.planta?.temperaturaMaximaPadrao || -1;
    }

    private configurarGerenciadorTemp() {
        if (this.gerenciadorTemp) {
            this.gerenciadorTemp.setConfiguracao({
                tempMinima: this.getTempMinima(),
                tempMaxima: this.getTempMaxima(),
            });
        }
    }

    private configurarGerenciadorLum() {
        if (this.gerenciadorLum) {
            this.gerenciadorLum.setConfiguracao({
                luminosidadeIdeal: this.getLuminosidade(),
            });
        }
    }

    private configurarGerenciadorAgua() {
        if (this.gerenciadorAgua) {
            this.gerenciadorAgua.setConfiguracao({
                quantidade: this.getQuantidadeAgua(),
            });
        }
    }

    public adicionarGerenciadorAgua() {
        if (!this.gerenciadorAgua) {
            this.gerenciadorAgua = new GerenciadorAgua(
                new Regador(),
                new Balanca()
            );
        }
    }

    public adicionarGerenciadorTemp() {
        if (!this.gerenciadorTemp) {
            this.gerenciadorTemp = new GerenciadorTemperatura(
                new Termometro(),
                new ArCondicionado()
            );
        }
    }

    public adicionarGerenciadorLum() {
        if (!this.gerenciadorLum) {
            this.gerenciadorLum = new GerenciadorLuminosidade(
                new FotoSensor(),
                new Lampada(),
                new Cobertor()
            );
        }
    }

    public temPlanta(): boolean{
        if (this.planta != undefined)
            return true

        else
            return false
    }

    public getId(): number{
        return this.id;
    }

    public clone(): Vaso {
        const novoVaso = new Vaso({
            descricao: this.descricao,
            gerenciadorTemp: this.gerenciadorTemp,
            gerenciadorLum: this.gerenciadorLum,
            gerenciadorAgua: this.gerenciadorAgua,
            id: this.id,
            planta: this.planta,
        });
        return novoVaso;
    }
}
