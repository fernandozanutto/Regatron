import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { ArCondicionado } from "../regatron-service/dispositivos/ACInteligente/ArCondicionado";
import { Termometro } from "../regatron-service/dispositivos/ACInteligente/Termometro";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
import { Cobertor } from "../regatron-service/dispositivos/LuzInteligente/Cobertor";
import { FotoSensor } from "../regatron-service/dispositivos/LuzInteligente/Fotosensor";
import { Lampada } from "../regatron-service/dispositivos/LuzInteligente/Lampada";
import { GerenciadorAgua } from "../regatron-service/dispositivos/RegadorInteligente/GerenciadorAgua";
import { Regador } from "../regatron-service/dispositivos/RegadorInteligente/Regador";
import { Balanca } from "../regatron-service/dispositivos/RegadorInteligente/Balanca";

export class RegatronService {

    //instanciando dispositivos de temperatura
    private arCondicionado1 = new ArCondicionado()
    private termometro1 = new Termometro()
    private gerenciadorTemperatura1 = new GerenciadorTemperatura(this.termometro1, this.arCondicionado1)

    private arCondicionado2 = new ArCondicionado()
    private termometro2 = new Termometro()
    private gerenciadorTemperatura2 = new GerenciadorTemperatura(this.termometro2, this.arCondicionado2)
    //vaso dois compartilha ar condicionado com vaso 1.

    private arCondicionado3 = new ArCondicionado()
    private termometro3 = new Termometro()
    private gerenciadorTemperatura3 = new GerenciadorTemperatura(this.termometro3, this.arCondicionado3)
    
    //instanciando dispositivos de iluminacao
    private cobertor1 = new Cobertor()
    private fotoSensor1 = new FotoSensor()
    private lampada1 = new Lampada()
    private gerenciadorLuminosidade1 = new GerenciadorLuminosidade(this.fotoSensor1, this.lampada1, this.cobertor1)

    private cobertor2 = new Cobertor()
    private fotoSensor2 = new FotoSensor()
    private lampada2 = new Lampada()
    private gerenciadorLuminosidade2 = new GerenciadorLuminosidade(this.fotoSensor2, this.lampada2, this.cobertor2)

    private cobertor3 = new Cobertor()
    private fotoSensor3 = new FotoSensor()
    private lampada3 = new Lampada()
    private gerenciadorLuminosidade3 = new GerenciadorLuminosidade(this.fotoSensor3, this.lampada3, this.cobertor3)

    private regador1 = new Regador()
    private balanca1 = new Balanca()
    private gerenciadorAgua1 = new GerenciadorAgua(this.regador1, this.balanca1)

    plantas: Planta[] = []

    vasos: Vaso[] = []

    public listPlantas(): Planta[] {
        return this.clone(this.plantas)
    }

    public listVasos(): Vaso[]{
        return this.clone(this.vasos)
    }

    public getPlanta(id: number): Planta | undefined {
        const planta = this.plantas.find(planta => planta.id === id)
        return this.clone(planta)
    }

    public getVaso(id: number): Vaso | undefined {
        const vaso = this.vasos.find(vaso => vaso.id === id)
        const clone = this.clone(vaso)

        if (clone && vaso) {
            clone.gerenciadorAgua = vaso.gerenciadorAgua
            clone.gerenciadorTemp = vaso.gerenciadorTemp
            clone.gerenciadorLum = vaso.gerenciadorLum
        }
        
        return clone
    }

    public salvarPlanta(planta: Planta): void {
        const indice = this.plantas.findIndex(p => p.id === planta.id)

        if (indice == -1){
            planta.id = (this.plantas.length + 1);   // Atrubui um ID pra planta nova
            this.plantas.push(planta)               //  Planta nova         
        }

        else{
            this.plantas[indice] = planta //planta existente
        }
        
    }

    public salvarVaso(vaso: Vaso): void {
        const indice = this.vasos.findIndex(p => p.id === vaso.id)

        if (indice == -1){
            vaso.id = (this.vasos.length + 1);
            this.vasos.push(vaso) //vaso novo
        }

        else{
            this.vasos[indice] = vaso //vaso existente
        }

    }

    private clone<T>(data: T) {
        return JSON.parse(JSON.stringify(data)) as T
    }
}
