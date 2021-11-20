import { GerenciadorTemperatura } from "../regraton-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { Dispositivo } from "../regraton-service/dispositivos/Dispositivo";
import { Luminosidade } from "./Luminosidade";
import { Planta } from "./Planta.model";

export class Vaso {
    dispositivos: Dispositivo[] = []

    constructor(
        public id: number,
        public descricao: string, 
        public quantidadeAgua: number,
        public temperaturaMaxima: number,
        public temperaturaMinima: number,
        public luminosidade: Luminosidade,
        public planta: Planta,
        dispositivos: Dispositivo[]
    ) { 
        this.dispositivos = dispositivos;
        this.configurarDispositivos()
    }


    private configurarDispositivos() {
        this.dispositivos.forEach(disp => {
            if (disp instanceof GerenciadorTemperatura) {
                disp.setConfiguracao({tempMinima: this.temperaturaMinima, tempMaxima: this.temperaturaMaxima})
            }
        })
    }
}