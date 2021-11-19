export interface PlantaDTO {
    id: number;
    nomeCientifico: string;
    nomeUsual: string;
    quantidadeAguaPadrao: number;
    temperaturaMinimaPadrao: number;
    temperaturaMaximaPadrao: number;
}

export class Planta {
    public id: number;
    public nomeCientifico: string;
    public nomeUsual: string
    public quantidadeAguaPadrao: number;
    public temperaturaMinimaPadrao: number;
    public temperaturaMaximaPadrao: number;

    constructor({id, nomeCientifico, nomeUsual, quantidadeAguaPadrao, temperaturaMinimaPadrao, temperaturaMaximaPadrao}: PlantaDTO) {
        this.id = id
        this.nomeCientifico = nomeCientifico;
        this.nomeUsual = nomeUsual;
        this.temperaturaMinimaPadrao = temperaturaMinimaPadrao;
        this.temperaturaMaximaPadrao = temperaturaMaximaPadrao;
        this.quantidadeAguaPadrao = quantidadeAguaPadrao;
    }
}

