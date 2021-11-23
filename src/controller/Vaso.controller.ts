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
                this.vaso = new Vaso({descricao: "", id: 0})
            }
        } else {
            this.vaso = new Vaso({descricao: "", id: 0})
        }

        this.plantasDisponiveis = this.service.listPlantas()


        setInterval(() => {
            console.log(this)
            if (this.vaso.gerenciadorAgua){
                console.log('alsdhasuodhas')
                this.view.addLogAgua(this.vaso.gerenciadorAgua.notificarEstado())
            }

            if (this.vaso.gerenciadorTemp) {
                console.log('sazxcczxzxczxcczx')
                this.view.addLogTemperatura(this.vaso.gerenciadorTemp.notificarEstado())
            }

            if (this.vaso.gerenciadorLum) {
                console.log('axlcjbhxckagb')
                this.view.addLogLuminosidade(this.vaso.gerenciadorLum.notificarEstado())
            }
            
        }, 2000)
    }

    configureView(): void {
        this.view.onVoltarButtonClick = () => {
            NavigatorController.goBack()
        }
        this.view.onSalvarButtonClick = (vaso: Vaso) => {
            this.service.salvarVaso(vaso)
            NavigatorController.goBack()
        }

        this.view.bindViewData(this.vaso, this.plantasDisponiveis)
    }
    
}