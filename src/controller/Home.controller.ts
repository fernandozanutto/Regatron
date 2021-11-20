import { NavigatorController, Pages } from "../Main";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { HomeView } from "../view/HomeView";
import { BaseController } from "./BaseController";

export class HomeController extends BaseController<HomeView> {
    plantas: Planta[] = []
    vasos: Vaso[] = []

    override init() {
        super.init()
        this.plantas = this.service.listPlantas()
        this.vasos = this.service.listVasos()
    }

    configureView(): void {
        this.view.populatePlantaComponents(this.plantas)
        this.view.populateVasoComponents(this.vasos)

        this.view.onTesteButtonClick = () => {
            NavigatorController.navigate(Pages.TEST)
        }

        this.view.onPlantaButtonClick = () => {
            NavigatorController.navigate(Pages.PLANTA)
        }

        this.view.onVasoButtonClick = () => {
            
        }
    }
}