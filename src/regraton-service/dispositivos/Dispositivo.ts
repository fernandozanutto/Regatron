import { ACConfig } from "./ACInteligente/GerenciadorTemperatura";
import { LuminosidadeConfig } from "./LuzInteligente/GerenciadorLuminosidade";

export interface Dispositivo {
    setConfiguracao(config: ACConfig | LuminosidadeConfig): void
    compararEExecutar(): void
    notificarEstado(): void
}