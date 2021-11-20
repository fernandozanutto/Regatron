import { Luminosidade } from "./Luminosidade";

export interface PlantaDTO {
    id: number;
    nomeCientifico: string;
    nomeUsual: string;
    quantidadeAguaPadrao: number;
    temperaturaMinimaPadrao: number;
    temperaturaMaximaPadrao: number;
    luminosidade: Luminosidade;
}

export class Planta {
    public id: number;
    public nomeCientifico: string;
    public nomeUsual: string
    public quantidadeAguaPadrao: number;
    public temperaturaMinimaPadrao: number;
    public temperaturaMaximaPadrao: number;
    public luminosidade: Luminosidade;

    constructor({id, nomeCientifico, nomeUsual, quantidadeAguaPadrao, temperaturaMinimaPadrao, temperaturaMaximaPadrao, luminosidade}: PlantaDTO) {
        this.id = id;
        this.nomeCientifico = nomeCientifico;
        this.nomeUsual = nomeUsual;
        this.temperaturaMinimaPadrao = temperaturaMinimaPadrao;
        this.temperaturaMaximaPadrao = temperaturaMaximaPadrao;
        this.quantidadeAguaPadrao = quantidadeAguaPadrao;
        this.luminosidade = luminosidade;
    }
}

