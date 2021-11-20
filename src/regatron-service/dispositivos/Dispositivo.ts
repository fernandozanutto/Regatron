import { ACConfig } from "./ACInteligente/GerenciadorTemperatura";
import { LuminosidadeConfig } from "./LuzInteligente/GerenciadorLuminosidade";
import { RegadorConfig } from "./RegadorInteligente/GerenciadorAgua";

export interface Dispositivo {
    setConfiguracao(config: ACConfig | LuminosidadeConfig | RegadorConfig): void
    compararEExecutar(): void
    notificarEstado(): void
}