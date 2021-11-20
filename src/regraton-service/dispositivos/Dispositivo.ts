import { ACConfig } from "./ACInteligente/GerenciadorTemperatura";

export interface Dispositivo {
    setConfiguracao(config: ACConfig): void
    compararEExecutar(): void
    notificarEstado(): void
}