import { NavigatorController, Pages } from "../Main";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { VasoView } from "../view/Vaso.view";
import { BaseController } from "./BaseController";

export class VasoController extends BaseController<VasoView> {

    private vaso!: Vaso
    private plantasDisponiveis!: Planta[]

    override onCreate() {
        if (this.parameters.id) {
            const dbVaso = this.service.getVaso(this.parameters.id)
            if (dbVaso) {
                this.vaso = dbVaso
            } else {
                this.vaso = new Vaso({descricao: "", id: 0, dispositivos: []})
            }
        } else {
            this.vaso = new Vaso({descricao: "", id: 0, dispositivos: []})
        }

        this.plantasDisponiveis = this.service.listPlantas()
    }

    configureView(): void {
        this.view.onBackButtonClick = () => {
            NavigatorController.goBack()
        }

        this.view.bindViewData(this.vaso, this.plantasDisponiveis)
    }
    
}