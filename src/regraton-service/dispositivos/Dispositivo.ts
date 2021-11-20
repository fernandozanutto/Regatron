export interface Dispositivo {
    configPlanta: ConfigPlanta 
    compararEExecutar(): void
    notificarEstado(): void
}