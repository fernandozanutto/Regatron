import { NavigatorController, Pages } from "../Main";
import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { PlantaView } from "../view/Planta.view";
import { BaseController } from "./BaseController";

export class PlantaController extends BaseController<PlantaView> {

    private planta!: Planta

    override onCreate() {
        if (this.parameters.id) {
            const dbPlanta = this.service.getPlanta(this.parameters.id)
            if (dbPlanta) {
                this.planta = dbPlanta
            } else {
                this.planta = new Planta({id: 0, luminosidade: Luminosidade.MEIA_LUZ, nomeCientifico: "", nomeUsual: "", quantidadeAguaPadrao: 0, temperaturaMaximaPadrao: 0, temperaturaMinimaPadrao: 0})    
            }
        } else {
            this.planta = new Planta({id: 0, luminosidade: Luminosidade.MEIA_LUZ, nomeCientifico: "", nomeUsual: "", quantidadeAguaPadrao: 0, temperaturaMaximaPadrao: 0, temperaturaMinimaPadrao: 0})
        }
    }

    configureView(): void {
        this.view.onButtonClick = () => {
            NavigatorController.goBack()
        }

        this.view.onSalvarButtonClick = (planta: Planta) => {
            this.service.salvarPlanta(planta)
        }

        this.view.bindViewData(this.planta)
    }   
}