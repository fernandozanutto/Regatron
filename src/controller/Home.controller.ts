import { NavigatorController, Pages } from "../Main";
import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { HomeView } from "../view/HomeView";
import { BaseController } from "./BaseController";

export class HomeController extends BaseController<HomeView> {
    plantas: Planta[] = []
    vasos: Vaso[] = []

    override init() {
        this.plantas = this.service.listPlantas()
        this.vasos = this.service.listVasos()
        super.init()
    }

    override resume() {
        this.plantas = this.service.listPlantas()
        this.vasos = this.service.listVasos()
        super.resume()
    }

    configureView(): void {
        this.view.populatePlantaComponents(this.plantas)
        this.view.populateVasoComponents(this.vasos)

        this.view.bindViewEvents()

        this.view.onVasoItemButtonClick = (id: number) => {
            NavigatorController.navigate(Pages.VASO, {id: id})
        }

        this.view.onPlantaItemButtonClick = (id: number ) => {
            NavigatorController.navigate(Pages.PLANTA, {id: id})
        }
    }
}