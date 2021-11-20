import { Dispositivo } from "../regraton-service/dispositivos/Dispositivo";
import { Luminosidade } from "./Luminosidade";
import { Planta } from "./Planta.model";

export class Vaso {
    dispositivos: Dispositivo[] = []

    constructor(
        public descricao: string, 
        public quantidadeAgua: number,
        public temperaturaMaxima: number,
        public temperaturaMinima: number,
        public luminosidade: Luminosidade,
        public planta: Planta
    ) { }


}